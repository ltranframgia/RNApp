
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
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

  handlePress = () => {
    if (this.props.text) {
      this.props.onPressDay(this.props.text)
    }
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
    let color = '#1D1E2C'
    if (inActive === true) {
      color = '#E2E2E2'
    }
    return (
      <TouchableOpacity style={{ height: 100, flex: 1, justifyContent: 'flex-start' }} onPress={this.handlePress.bind(this)}>

        <Text style={{ height: 16, marginTop: 4, color: color, textAlign: 'center', fontFamily: fonts.hiraKakuProW6, fontSize: 12 }}>{text}</Text>

        {/* {this.renderPlan('', null)}
      {this.renderPlan('', null)}
      {this.renderPlan('', null)}
      {this.renderPlan('', null)} */}
      </TouchableOpacity>
      // <View style={{ height: 100, flex: 1, justifyContent: 'flex-start' }}>


      // </View>
    )
  }
}
