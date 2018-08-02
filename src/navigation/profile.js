import { Navigation } from 'react-native-navigation';
import { Screen } from '../config/screens';

// register screens
export function pushProfile(componentId) {

    Navigation.push(componentId, {
        component: {
            name: Screen.Profile.name,
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
              name: Screen.Profile.name,
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
