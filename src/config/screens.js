import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

// Component
import LaunchContainer from '../containers/LauncherContrainer'
import HomeComponent from '../component/HomeComponent'
import ProfileComponent from '../component/ProfileComponent'
import LoginComponent from '../component/LoginComponent'

// Screens
export const Screen = {
  Launch: {
    name: 'LaunchScreen',
    container: LaunchContainer,
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
export function registerScreensWithStore(store) {
  Navigation.registerComponent(Screen.Launch.name, () => createComponentWithStore(Screen.Launch.container, store));
  Navigation.registerComponent(Screen.Login.name, () => createComponentWithStore(Screen.Login.component, store));
  Navigation.registerComponent(Screen.Home.name, () => createComponentWithStore(Screen.Home.component, store));
  Navigation.registerComponent(Screen.Profile.name, () => createComponentWithStore(Screen.Profile.component, store));
}

function createComponentWithStore(Container, store) {
  return class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <Container />
        </Provider>
      )
    }
  }
}