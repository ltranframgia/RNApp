
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import fonts from '../../../constants/fonts'

export default class DayView extends React.PureComponent {

  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
  };

  static defaultProps = {
    text: '',
    color: 'white',
  };

  constructor(props) {
    super(props);

  }

  // shouldComponentUpdate(nextProps) {
  //   return (nextProps !== this.props)
  // }

  componentWillReceiveProps(nextProps) {

  }


  renderPlan(text, color) {
    return (
      <View style={{ height: 18, backgroundColor: color, alignItems: 'center', justifyContent: 'center', margin: 1, borderRadius: 2 }}>
        <Text style={{ color: 'white', fontSize: 10, marginHorizontal: 2 }} lineBreakMode='tail' numberOfLines={1}>{text}</Text>
      </View>
    )
  }

  render() {
    const { text, inActive } = this.props;
    let opacity = null
    if (inActive === true) {
      opacity = 0.5
    }
    return (
      <View style={{ height: 100, flex: 1, justifyContent: 'flex-start' }}>
        <Text style={{ alignSelf: 'center', height: 18, marginVertical: 1, opacity: opacity, fontFamily:fonts.hiraKakuProW6, fontSize: 12  }}>{text}</Text>
        {/* {this.renderPlan('', null)}
        {this.renderPlan('', null)}
        {this.renderPlan('', null)}
        {this.renderPlan('', null)} */}

      </View>
    )
  }
}
