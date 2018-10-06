import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View } from 'react-native';
import fonts from '../../constants/fonts'

export default class TopBarTitleView extends Component {

  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.text}>{this.props.text}</Text>
        {
          (this.props.subText) ? <Text style={styles.subText}>{this.props.subText}</Text> : null
        }

      </ View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 2,
    fontSize: 16,
    color:'#1D1E2C',
    fontFamily: fonts.hiraKakuProW6
  },
  subText: {
    textAlign: 'center',
    color:'#1D1E2C',
    // marginBottom: 4,
    fontFamily: fonts.hiraKakuProW3,
    fontSize: 14
  },
});
