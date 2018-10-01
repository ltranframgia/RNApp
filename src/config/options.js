import Images from '../assets/images'
import Colors from '../constants/colors'
import ScreenName from '../config/screens-name'

export const defautOptions = {
  topBar: {
    elevation: 0,
    animate: false,
    backButton: {
      icon: Images.back,
      visible: true,
      color: '#1D1E2C'
    },
    title: {
      component: {
        name: ScreenName.topBarTitle,
        alignment: 'center'
      }
    }
  },
  bottomTabs: {
    titleDisplayMode: 'alwaysShow',
  },
  bottomTab: {
    selectedTextColor: Colors.blue,
    fontSize: 10
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
