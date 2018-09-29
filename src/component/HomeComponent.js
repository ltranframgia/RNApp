import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Platform, StyleSheet, SafeAreaView, Text, View, Button } from 'react-native';
import { ReachabilityView } from '../utils'

import { pushProfile } from '../navigation/profile';
import Colors from '../config/colors';

const loadingText = Platform.select({
  ios: 'Home',
  android: 'Home',
});

export default class HomeComponent extends Component {

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    // console.log('componentDidAppear')
    // console.log(this.props.componentId)
  }

  touchOnProfileDetailButtonAction = () => {
    pushProfile(this.props.componentId)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ReachabilityView/>
        <Text style={styles.instructions}>{loadingText}</Text>
        <Button
          title='Detail'
          onPress={this.touchOnProfileDetailButtonAction}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1370D2',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
