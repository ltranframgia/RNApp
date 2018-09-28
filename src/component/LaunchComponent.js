import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { setRootToHomeScreen, setRootToLoginScreen } from '../navigation/root';
import images from '../config/images'
import colors from '../config/colors'

export default class LaunchComponent extends Component {

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidAppear() {
    // let cancel
    this.props.getAppInfo()
    // this.props.getAppInfo()
    // this.props.login({ username: 'ltranframgia', password: '12345678' })
    // this.props.login({ username: 'ltranframgia', password: '12345678' })
    // this.props.getAppInfo()
    // this.props.getAppInfo()
    // source.cancel('')
    // this.props.cancelAppInfo()
    // }, 3000);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    // console.log(Store.getState())
    console.log(this.props)
    console.log(nextProps)
    if (nextProps.appInfo !== this.props.appInfo) {
      console.log('getMyInfo')
      this.props.getMyInfo()
      return
    }
    if (nextProps.user !== this.props.user) {
      console.log('user ', nextProps.user)
      setRootToLoginScreen()
    }
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Image
          style={styles.image_bg}
          source={images.splash_bg}
          resizeMode='stretch'
        />
        <Image
          style={styles.logo_text}
          resizeMode='center'
          source={images.logo_text}
        />
        <ActivityIndicator style={styles.activityIndicator} size="small" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image_bg: {
    flex: 1,
    position: 'absolute',
  },
  logo_text: {
    position: 'absolute',
    alignSelf: 'center',
  },
  activityIndicator: {
    marginTop: 100
  },
})
