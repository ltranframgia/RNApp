import React, { PureComponent, createRef } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

// Component
import LaunchContainer from '../containers/LaunchContainer'
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
  Navigation.registerComponent(Screen.Launch.name, () => wrapComponentWithStore(Screen.Launch.container, store));
  Navigation.registerComponent(Screen.Login.name, () => wrapComponentWithStore(Screen.Login.component, store));
  Navigation.registerComponent(Screen.Home.name, () => wrapComponentWithStore(Screen.Home.component, store));
  Navigation.registerComponent(Screen.Profile.name, () => wrapComponentWithStore(Screen.Profile.component, store));
}

function wrapComponentWithStore(WrappedComponent, store) {

  return class App extends PureComponent {

    constructor(props) {
      super(props);

      this.componentRef = createRef();
    }

    // hasMethod(method) {
    //   return this.componentRef &&
    //     this.componentRef.current &&
    //     this.componentRef.current[method] &&
    //     this.componentRef.current[method].apply;
    // }

    // onNavigationButtonPressed(...args) {
    //   if (this.hasMethod('onNavigationButtonPressed')) {
    //     this.componentRef.current.onNavigationButtonPressed(...args);
    //   }
    // }

    render() {
      return (
        <Provider store={store}>
          <WrappedComponent ref={this.componentRef} {...this.props} />
        </Provider>
      );
    }
  }
};