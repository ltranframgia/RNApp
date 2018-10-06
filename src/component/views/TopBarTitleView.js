import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View } from 'react-native';

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
    color: '#333333',
    // marginBottom: 5,
    fontSize: 24
  },
  subText: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 2,
    fontSize: 12
  },
});
