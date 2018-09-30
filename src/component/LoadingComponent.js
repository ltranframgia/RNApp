import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Image, Dimensions, ActivityIndicator } from 'react-native';
// import images from '../constants/images'
// import colors from '../constants/colors'

export default class LoadingComponent extends Component {

  // static options(passProps) {
  //   return {
  //     topBar: {
  //       drawBehind: true,
  //       visible: false,
  //     }
  //   };
  // }

  touchOnSiginButtonAction = () => {
    setRootToHomeScreen()
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={styles.overlayBg} opacity={0.35} />
        <View style={styles.viewIndicator}>
          <ActivityIndicator style={styles.activityIndicator} size="large" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // marginBottom: 100
  },
  overlayBg: {
    position: 'absolute',
    alignSelf: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'gray',
  },
  viewIndicator: {
    // paddingVertical: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 100,
    width: 100,
    justifyContent: 'center',
    borderRadius: 8
  },
  activityIndicator: {
    // marginTop: 100
  },

});
