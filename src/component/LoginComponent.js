import React, { Component } from 'react';
import ReachabilityContainer from '../utils/reachability/ReachabilityContainer'
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { setRootToHomeScreen } from '../navigation/root';
import images from '../config/images'
import colors from '../config/colors'

export default class LoginComponent extends Component {

  touchOnSiginButtonAction = () => {
    setRootToHomeScreen()
  }

  touchOnRegisterButtonAction = () => {

  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <ReachabilityContainer />
          <Image
            style={styles.logo_text}
            resizeMode='center'
            source={images.logo_text_blue}
          />

          <View style={{
            paddingVertical: 20,
            alignSelf: 'stretch',
            // marginBottom : 50
          }}>
            <Text style={{
              marginTop: 15,
              marginHorizontal: 40,
            }}>ID</Text>
            <TextInput style={styles.textinput}
              placeholder="Username"
            />
            <Text style={{
              marginTop: 15,
              marginHorizontal: 40,
            }}>Password</Text>
            <TextInput style={styles.textinput}
              placeholder="Password"
              secureTextEntry
            />

            <TouchableOpacity
              style={styles.login_button}
              onPress={this.touchOnSiginButtonAction}>
              <Text style={styles.login_text}>Login</Text>
            </TouchableOpacity>
          </View>


        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  logo_text: {
    // position: 'absolute',
    marginTop: 80,
    // marginBottom: 100,
    alignSelf: 'center'
  },
  textinput: {
    marginHorizontal: 40,
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  login_button: {
    marginTop: 20,
    marginHorizontal: 40,
    height: 40,
    backgroundColor: colors.blue,
    justifyContent: 'center',
  },
  login_text: {
    color: 'white',
    alignSelf: 'center'
  },

});
