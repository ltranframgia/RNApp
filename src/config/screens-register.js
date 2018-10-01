import { Navigation } from 'react-native-navigation';

// ScreenName
import ScreenName from './screens-name'

// Container
import LaunchContainer from '../containers/LaunchContainer'
import LoginContainer from '../containers/LoginContainer'
import DashboardContainer from '../containers/DashboardContainer'
import ProfileContainer from '../containers/ProfileContainer'
import { LoadingView } from '../utils'

// register screens
export function registerScreensWithStore(provider, store) {

  // register Component
  Navigation.registerComponent(ScreenName.loadingHud, () => LoadingView)

  // register with Redux
  Navigation.registerComponentWithRedux(ScreenName.launch, () => LaunchContainer, provider, store)
  Navigation.registerComponentWithRedux(ScreenName.login, () => LoginContainer, provider, store)
  Navigation.registerComponentWithRedux(ScreenName.dashboard, () => DashboardContainer, provider, store)
  Navigation.registerComponentWithRedux(ScreenName.profile, () => ProfileContainer, provider, store)


}

export default { registerScreensWithStore }
