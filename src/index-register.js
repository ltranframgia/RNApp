import { Navigation } from 'react-native-navigation';
import Screen from './containers/screens'
import Images from './config/images'

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
  }
}