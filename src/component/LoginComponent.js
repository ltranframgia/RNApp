import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { goToHomeScreen } from '../navigation/root';

const loadingText = Platform.select({
  ios: 'Login',
  android: 'Login',
});

export default class LoginComponent extends Component{

  touchOnSiginButtonAction = () => {
    goToHomeScreen()
  }

  touchOnRegisterButtonAction = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'LoginScreen',
        passProps: {
          text: 'Pushed screen'
        },
        options: {
          topBar: {
            title: {
              text: 'Pushed screen title'
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>{loadingText}</Text>
        <Button
          title='Sigin'
          onPress={this.touchOnSiginButtonAction}
        />

        <Button
          title='Register'
          onPress={this.touchOnRegisterButtonAction}
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
