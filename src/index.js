import { Navigation } from 'react-native-navigation';
import store from './store/store';
import { registerScreensWithStore } from './config/screens';
import { goToLaunchScreen } from './navigation/root';

registerScreensWithStore(store);

Navigation.events().registerAppLaunchedListener(() => {
  goToLaunchScreen()
});