import { Navigation } from 'react-native-navigation';
import ScreenName from '../containers/screens-name'
import images from '../config/images';

// goto screen functions
export const goToLaunchScreen = () => Navigation.setRoot({
  root: {
    component: {
      name: ScreenName.launch
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
                name: ScreenName.home,
                passProps: {
                  text: ''
                },
              }
            }],
            options: {
              bottomTab: {
                text: 'Home',
                fontSize: 12,
                icon: images.signin
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: ScreenName.profile,
                passProps: {
                  text: 'stack with one child'
                },
              }
            }],
            options: {
              bottomTab: {
                text: 'Setting',
                fontSize: 12,
                icon: images.signup
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
            name: ScreenName.login,
          }
        }
      ],
    }
  }
})
