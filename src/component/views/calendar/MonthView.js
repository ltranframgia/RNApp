
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, Text, View } from 'react-native';
import WeekView from './WeekView'

export default class CalendarMonthView extends React.PureComponent {

  constructor(props) {
    super(props);

  }

  // shouldComponentUpdate(nextProps) {
  //   return (nextProps.monthData.info !== this.props.monthData.info)
  // }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { year, month, firstDayIndex, numberOfDay } = this.props.monthData.info

    return ((<View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
      <WeekView key={`${year}_${month}_1`} week={{ startDayIndex: firstDayIndex, startDay: 1, month, year }} />
      <WeekView key={`${year}_${month}_${8 - firstDayIndex}`} week={{ startDayIndex: 0, startDay: (8 - firstDayIndex), numberOfDay, month, year }} />
      <WeekView key={`${year}_${month}_${15 - firstDayIndex}`} week={{ startDayIndex: 0, startDay: (15 - firstDayIndex), numberOfDay, month, year }} />
      <WeekView key={`${year}_${month}_${22 - firstDayIndex}`} week={{ startDayIndex: 0, startDay: (22 - firstDayIndex), numberOfDay, month, year }} />
      {

        [4, 5].map(value => {

          let startDay = (1 + value * 7) - firstDayIndex

          if (startDay > numberOfDay) {
            return null
          }

          return (<WeekView key={`${year}_${month}_${startDay}`} week={{ startDayIndex: 0, startDay, numberOfDay, month, year }} />)
        })
      }
    </View>)
    )
  }
}
