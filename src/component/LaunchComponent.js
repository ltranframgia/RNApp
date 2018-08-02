import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { goToHomeScreen, goToLoginScreen } from '../navigation/root';

const loadingText = Platform.select({
  ios: 'Loading...',
  android: 'Loading...',
});

export default class LaunchComponent extends Component{

  touchOnHomeButtonAction = () => {
    goToHomeScreen()
  }

  touchOnLoginButtonAction = () => {
    goToLoginScreen()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>{loadingText}</Text>
        <Button
          title='Home'
          onPress={this.touchOnHomeButtonAction}
        />
         <Button
          title='Login'
          onPress={this.touchOnLoginButtonAction}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
