
// const paths = [
//   {
//     radius: 0,
//     borderWidth: 60,
//     startValue: 0,
//     value: 100,
//     color: 'white'
//   },
//   {
//     radius: 60,
//     startValue: 0,
//     value: 25,
//     color: 'red'
//   },
//   {
//     radius: 70,
//     startValue: 0,
//     value: 50,
//     color: 'yellow'
//   },
//   {
//     radius: 70,
//     startValue: 50,
//     value: 40,
//     color: 'green'
//   },
//   {
//     radius: 80,
//     startValue: 0,
//     value: 90,
//     color: 'white'
//   },
// ]

{/* <CircleChart width={300} height={300} paths={paths} total={total} animated={animated} /> */ }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, ART } from 'react-native';
import * as d3 from 'd3'

const {
  Surface,
  Group,
  Shape,
} = ART;

const CIRCLE = Math.PI * 2;

class AcrChart extends Component {

  static propTypes = {
    radius: PropTypes.number,
    borderWidth: PropTypes.number,
    startAngle: PropTypes.number,
    endAngle: PropTypes.number,
    color: PropTypes.string,
  };

  static defaultProps = {
    radius: 60,
    borderWidth: 10,
    startAngle: 0,
    endAngle: Math.PI,
    color: 'green',
  };

  constructor(props) {
    super(props);

  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  componentDidMount() {
    console.log('componentDidMount')

  }

  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps')
    // console.log(nextProps)
  }

  render() {

    const { radius, borderWidth, startAngle, endAngle, color } = this.props;

    const arcPath = d3.arc()
      .innerRadius(radius)
      .outerRadius(radius + borderWidth)
      .startAngle(startAngle)
      .endAngle(endAngle);

    return (
      <Shape
        d={arcPath()}
        fill={color}
      />
    );
  }
}

const AnimatedArcChart = Animated.createAnimatedComponent(AcrChart);

let currentPaths = [];

class CircleChart extends Component {

  constructor(props) {
    super(props)
    this.animatedValue = new Animated.Value(0)
    this.isAnimating = false
  }

  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps CircleChart')
    // console.log(nextProps)
    if (nextProps.animated === true &&
      this.isAnimating === false) {
      this.startAnimated()
    } else {
      // this.resetAnimated()
    }
  }

  startAnimated = () => {
    console.log('startAnimated')
    this.animatedValue.setValue(0)
    this.isAnimating = true
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
    }).start((finished) => {
      console.log('Animated ', finished)
      if (finished) {
        currentPaths = this.props.paths;
      }
      this.isAnimating = false
    });
  }

  render() {

    const { total, paths, width, height } = this.props;

    const ratio = CIRCLE / total;
    let animatedPath = [];
    animatedPath = paths.map((nextPath, index) => {

      let oldStartAngle = 0
      let oldEndAngle = 0
      let oldRadius = nextPath.radius
      let borderWidth = nextPath.borderWidth ? nextPath.borderWidth : 10

      if (index < currentPaths.length) {
        const oldPath = currentPaths[index];
        oldStartAngle = oldPath.startValue * ratio
        oldEndAngle = (oldPath.startValue + oldPath.value) * ratio
        oldRadius = oldPath.radius
      }

      const nextStartAngle = nextPath.startValue * ratio
      const nextEndAngle = (nextPath.startValue + nextPath.value) * ratio

      // interpolate
      const startValue = this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [oldStartAngle, nextStartAngle]
      })

      const endValue = this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [oldEndAngle, nextEndAngle]
      })

      const radius = this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [oldRadius, nextPath.radius]
      })

      return { ...nextPath, startValue, endValue, radius, borderWidth };
    })

    return (
      <Surface width={width} height={height} style={{ backgroundColor: 'gray' }}>
        <Group x={width / 2} y={height / 2}>
          {
            animatedPath.map((value, index) => {
              return (<AnimatedArcChart
                key={"Chart_" + index}
                radius={value.radius}
                startAngle={value.startValue}
                endAngle={value.endValue}
                borderWidth={value.borderWidth}
                color={value.color}
              />)
            })
          }
        </Group>
      </Surface>
    );
  }
}

export default CircleChart;
