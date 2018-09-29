// ScreenName
import ScreenName from './screens-name'

// Component
import LaunchContainer from './LaunchContainer'
import LoginContainer from './LoginContainer'
import DashboardComponent from '../component/DashboardComponent'
import ProfileComponent from '../component/ProfileComponent'

// Screens
let allScreens = {
  Launch: {
    name: ScreenName.launch,
    container: LaunchContainer,
  },
  Login: {
    name: ScreenName.login,
    container: LoginContainer,
  },
  Dashboard: {
    name: ScreenName.dashboard,
    container: DashboardComponent,
  },
  Profile: {
    name: ScreenName.profile,
    container: ProfileComponent,
  },
}

function reset() {
  allScreens = null
}

export default { allScreens, reset }
