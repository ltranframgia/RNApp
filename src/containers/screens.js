// ScreenName
import ScreenName from './screens-name'

// Component
import LaunchContainer from './LaunchContainer'
import LoginContainer from './LoginContainer'
import HomeComponent from '../component/HomeComponent'
import ProfileComponent from '../component/ProfileComponent'

// Screens
const allScreens = {
  Launch: {
    name: ScreenName.launch,
    container: LaunchContainer,
  },
  Login: {
    name: ScreenName.login,
    container: LoginContainer,
  },
  Home: {
    name: ScreenName.home,
    container: HomeComponent,
  },
  Profile: {
    name: ScreenName.profile,
    container: ProfileComponent,
  },
}

export default { allScreens }
