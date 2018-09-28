import { Navigation } from 'react-native-navigation';
import ScreenName from '../containers/screens-name'

// register screens
export function pushProfile(componentId) {

  Navigation.push(componentId, {
    component: {
      name: ScreenName.profile,
      passProps: {
        text: 'Pushed screen'
      },
      options: {
        topBar: {
          title: {
            text: 'Profile',
          }
        }
      }
    }
  });
}

export function showModalProfile() {

  Navigation.showModal({
    stack: {
      children: [{
        component: {
          name: ScreenName.profile,
          passProps: {
            text: 'Modal screen'
          },
          options: {
            topBar: {
              title: {
                text: 'Modal Profile'
              }
            }
          }
        }
      }]
    }
  });
};
