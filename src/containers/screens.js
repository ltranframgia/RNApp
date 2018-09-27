// ScreenName
import ScreenName from './screens-name'

// Component
import LaunchContainer from './LaunchContainer'
import HomeComponent from '../component/HomeComponent'
import ProfileComponent from '../component/ProfileComponent'
import LoginComponent from '../component/LoginComponent'

// Screens
const allScreens = {
  Launch: {
    name: ScreenName.launch,
    container: LaunchContainer,
  },
  Home: {
    name: ScreenName.home,
    container: HomeComponent,
  },
  Profile: {
    name: ScreenName.profile,
    container: ProfileComponent,
  },
  Login: {
    name: ScreenName.login,
    container: LoginComponent,
  }
}

export default { allScreens }
