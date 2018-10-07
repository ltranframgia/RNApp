
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import fonts from '../../../constants/fonts'
import DayView from './DayView'
const ScreenWidth = Dimensions.get('window').width
const widthLabel = ScreenWidth / 7

// let dayNames = [0, 1, 2, 3, 4, 5, 6];
export default class WeekView extends React.PureComponent {

  constructor(props) {
    super(props);
    // this.dayNames = [0, 1, 2, 3, 4, 5, 6];
  }

  // shouldComponentUpdate(nextProps) {
  //   const { startDay, startDayIndex, numberOfDay, month, year } = nextProps.week;
  //   // this.dayNames = [0, 1, 2, 3, 4, 5, 6].map((value) => {
  //   //   let day = startDay + value - startDayIndex
  //   //   if (value < startDayIndex) {
  //   //     return ''
  //   //   }

  //   //   if (day > numberOfDay) {
  //   //     return ''
  //   //   }

  //   //   return `${day}`
  //   // })
  //   return true
  // }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    const { startDay, startDayIndex, numberOfDay, month, year } = this.props.week;
    const marginLeft = startDayIndex * widthLabel
    let marginRight = 0

    const dayNames = [0, 1, 2, 3, 4, 5, 6].map((value) => {
      let day = startDay + value - startDayIndex
      if (value < startDayIndex) {
        marginRight = marginRight + widthLabel;
        return ''
      }

      if (day > numberOfDay) {
        return ''
      }
      marginRight = marginRight + widthLabel;
      return `${day}`
    })
    marginRight = ScreenWidth - marginRight;
    return (
      <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
        <View style={{ marginLeft: marginLeft,marginRight:marginRight, height: 1, backgroundColor: '#F6F7FA', position: 'absolute', left: 0, right: 0, top: 0, opacity: 0.5 }} />
        <DayView onPressDay={this.props.onPressDay} text={`${dayNames[0]}`} inActive={true} />
        <DayView onPressDay={this.props.onPressDay} text={`${dayNames[1]}`} />
        <DayView onPressDay={this.props.onPressDay} text={`${dayNames[2]}`} />
        <DayView onPressDay={this.props.onPressDay} text={`${dayNames[3]}`} />
        <DayView onPressDay={this.props.onPressDay} text={`${dayNames[4]}`} />
        <DayView onPressDay={this.props.onPressDay} text={`${dayNames[5]}`} />
        <DayView onPressDay={this.props.onPressDay} text={`${dayNames[6]}`} inActive={true} />
      </View>
    )
  }
}
