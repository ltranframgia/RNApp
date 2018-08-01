import { Navigation } from 'react-native-navigation';
import AppScreen from './component/App'

export function registerScreens() {
  Navigation.registerComponent('Launch', () => AppScreen);
}