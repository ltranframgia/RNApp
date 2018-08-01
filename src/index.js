import { Navigation } from 'react-native-navigation';
import { registerScreens, goToLaunchScreen } from './config/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  goToLaunchScreen()
});