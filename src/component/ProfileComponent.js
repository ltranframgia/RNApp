import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import { goToLoginScreen } from '../navigation/root';
import { pushProfile, showModalProfile } from '../navigation/profile';

const loadingText = Platform.select({
  ios: 'Profile',
  android: 'Profile',
});

export default class ProfileComponent extends Component{

  touchOnSigoutButtonAction = () => {
    goToLoginScreen()
  }

  touchOnProfileDetailButtonAction = () => {
    pushProfile(this.props.componentId)
  }

  touchOnProfileEditButtonAction = () => {
    showModalProfile()    
  }

  touchOnDismissButtonAction = () => {
    Navigation.dismissModal(this.props.componentId);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>{loadingText}</Text>
        <Button
          title='Signout'
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
