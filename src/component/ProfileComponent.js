import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import { goToLoginScreen } from '../config/screens';

const loadingText = Platform.select({
  ios: 'Profile',
  android: 'Profile',
});

export default class ProfileComponent extends Component{

  touchOnSigoutButtonAction = () => {
    goToLoginScreen()
  }

  touchOnProfileDetailButtonAction = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'ProfileScreen',
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

  touchOnProfileEditButtonAction = () => {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'ProfileScreen',
            passProps: {
              text: 'stack with one child'
            },
            options: {
              topBar: {
                title: {
                  text: 'Modal'
                }
              }
            }
          }
        }]
      }
    });
    
  }

  touchOnDismissButtonAction = () => {
    Navigation.dismissModal(this.props.componentId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>{loadingText}</Text>
        <Button
          title='Sigout'
          onPress={this.touchOnSigoutButtonAction}
        />
         <Button
          title='Detail'
          onPress={this.touchOnProfileDetailButtonAction}
        />
        <Button
          title='Edit'
          onPress={this.touchOnProfileEditButtonAction}
        />

        <Button
          title='Dismiss'
          onPress={this.touchOnDismissButtonAction}
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
