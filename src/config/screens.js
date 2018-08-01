import { Navigation } from 'react-native-navigation';

// Screens
import LaunchScreen from '../component/LaunchComponent'
import HomeScreen from '../component/HomeComponent'
import ProfileScreen from '../component/ProfileComponent'
import LoginScreen from '../component/LoginComponent'

// register screens
export function registerScreens() {
  Navigation.registerComponent('LaunchScreen', () => LaunchScreen);
  Navigation.registerComponent('LoginScreen', () => LoginScreen);
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
  Navigation.registerComponent('ProfileScreen', () => ProfileScreen);
}

// goto screen functions
export const goToLaunchScreen = () => Navigation.setRoot({
  root: {
    component: {
      name: 'LaunchScreen'
    }
  },
})

export const goToHomeScreen = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          stack: {
            children: [{
              component: {
                name: 'HomeScreen',
                passProps: {
                  text: ''
                },
              }
            }],
            options: {
              bottomTab: {
                text: 'Home',
                fontSize: 12,
                icon: require('../resource/img/signin.png')
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: 'ProfileScreen',
                passProps: {
                  text: 'stack with one child'
                },
              }
            }],
            options: {
              bottomTab: {
                text: 'Setting',
                fontSize: 12,
                icon: require('../resource/img/signup.png')
              }
            }
          }
        }
      ],
    }
  }
});

export const goToLoginScreen = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'LoginScreen',
      children: [
        {
          component: {
            name: 'LoginScreen',
          }
        }
      ],
    }
  }
})
