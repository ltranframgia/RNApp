
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import DayView from './DayView'

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
    const dayNames = [0, 1, 2, 3, 4, 5, 6].map((value) => {
      let day = startDay + value - startDayIndex
      if (value < startDayIndex) {
        return ''
      }

      if (day > numberOfDay) {
        return ''
      }

      return `${day}`
    })

    return (
      <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
        <View style={{ height: 0.5, backgroundColor: 'gray', position: 'absolute', left: 0, right: 0, top: 0, opacity: 0.5 }} />
        <DayView text={`${dayNames[0]}`} inActive={true} />
        <DayView text={`${dayNames[1]}`} />
        <DayView text={`${dayNames[2]}`} />
        <DayView text={`${dayNames[3]}`} />
        <DayView text={`${dayNames[4]}`} />
        <DayView text={`${dayNames[5]}`} />
        <DayView text={`${dayNames[6]}`} inActive={true} />
      </View>
    )
  }
}
