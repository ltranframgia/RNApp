import { Navigation } from 'react-native-navigation';

// ScreenName
import ScreenName from './screens-name'

// Container
import LaunchContainer from './LaunchContainer'
import LoginContainer from './LoginContainer'
import DashboardContainer from './DashboardContainer'
import ProfileContainer from './ProfileContainer'

// register screens
export function registerScreensWithStore(provider, store) {
  // register with Redux
  Navigation.registerComponentWithRedux(ScreenName.launch, () => LaunchContainer, provider, store)
  Navigation.registerComponentWithRedux(ScreenName.login, () => LoginContainer, provider, store)
  Navigation.registerComponentWithRedux(ScreenName.dashboard, () => DashboardContainer, provider, store)
  Navigation.registerComponentWithRedux(ScreenName.profile, () => ProfileContainer, provider, store)
}

export default { registerScreensWithStore }
