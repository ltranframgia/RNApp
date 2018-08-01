import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { goToLaunch } from './navigation'

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  goToLaunch()
});