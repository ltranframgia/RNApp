import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const loadingText = Platform.select({
  ios: 'ReachabilityComponent',
  android: 'ReachabilityComponent',
});

export default class ReachabilityCompenent extends Component {

  render() {
    if (this.props.netInfo.isConnected == true) {
      return null
    }

    return (
      <View style={styles.container} >
        <Text style={styles.instructions}>{loadingText}</Text>
      </ View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    right: 10,
    left: 10,
    justifyContent: 'center',
    backgroundColor: 'yellow',
    height: 50
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
