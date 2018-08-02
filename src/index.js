import { Navigation } from 'react-native-navigation';
import { registerScreens } from './config/screens';
import { goToLaunchScreen } from './navigation/root';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  goToLaunchScreen()
});