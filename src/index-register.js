import { Navigation } from 'react-native-navigation';
import Screen from './containers/screens'
import Images from './config/images'
import Colors from './config/colors'

// register screens
export function registerScreensWithStore(provider, store) {
  const allScreens = Screen.allScreens
  Screen.reset()
  for (var key in allScreens) {
    if (allScreens.hasOwnProperty(key)) {
      const screen = allScreens[key]
      Navigation.registerComponentWithRedux(screen.name, () => screen.container, provider, store)
    }
  }
}

export const defautOptions = {
  topBar: {
    backButton: {
      icon: Images.back,
      visible: true,
      color: '#1D1E2C'
    },
  },
  bottomTabs: {
    titleDisplayMode: 'alwaysShow',
  },
  bottomTab: {
    selectedTextColor: Colors.blue,
    fontSize: 10
  },
  _animations: {
    push: {
      waitForRender: false,
    }
  },
  animations: {
    push: { 
      enable: true,
      content: {
        x: {
          from: 1000,
          to: 0,
          duration: 300,
        },
        alpha: {
          from: 0.5,
          to: 1,
          duration: 300,
        }
      }
    },
    pop: { // Not working
      enable: true,
      content: {
        x: {
          from: 0,
          to: 1000,
          duration: 300,
        },
        alpha: {
          from: 1,
          to: 0.5,
          duration: 300,
        }
      }
    },
  }
}
