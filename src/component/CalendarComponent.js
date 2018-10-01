import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { setRootToLoginScreen } from '../navigation/root';
import { pushProfile, showModalProfile } from '../navigation/profile';
import { Loading } from '../utils'

const loadingText = Platform.select({
  ios: 'Profile',
  android: 'Profile',
});

export default class CalendarComponent extends Component {

  static options(passProps) {
    return {
      topBar: {
        title: {
          component: {
            name: ScreenName.topBarTitle,
            alignment: 'center',
            passProps: {
              text: 'Calendar'
            }
          }
        }
      }
    }
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    // console.log('componentDidAppear')
    // console.log(this.props.componentId)
  }

  touchOnSigoutButtonAction = () => {
    setRootToLoginScreen()
  }

  touchOnProfileDetailButtonAction = () => {
    // pushProfile(this.props.componentId)
    Loading.showHud()
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
