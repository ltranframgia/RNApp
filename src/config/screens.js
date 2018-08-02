import { Navigation } from 'react-native-navigation';

// Component
import LaunchComponent from '../component/LaunchComponent'
import HomeComponent from '../component/HomeComponent'
import ProfileComponent from '../component/ProfileComponent'
import LoginComponent from '../component/LoginComponent'

// Screens
export const Screen = {
  Launch: {
    name: 'LaunchScreen',
    component: LaunchComponent,
  },
  Home: {
    name: 'HomeScreen',
    component: HomeComponent,
  },
  Profile: {
    name: 'ProfileScreen',
    component: ProfileComponent,
  },
  Login: {
    name: 'LoginScreen',
    component: LoginComponent,
  },
};

// register screens
export function registerScreens() {
  Navigation.registerComponent(Screen.Launch.name, () => Screen.Launch.component);
  Navigation.registerComponent(Screen.Login.name, () => Screen.Login.component);
  Navigation.registerComponent(Screen.Home.name, () => Screen.Home.component);
  Navigation.registerComponent(Screen.Profile.name, () => Screen.Profile.component);
}
