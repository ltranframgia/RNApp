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
        <Text style={styles.instructions}>{this.props.text}</Text>
      </ View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 24
  },
});
