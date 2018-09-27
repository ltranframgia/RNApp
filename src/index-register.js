import React, { PureComponent, createRef } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Screen from './containers/screens'

// register screens
export function registerScreensWithStore(store) {
  const screens = Screen.allScreens
  for (var key in screens) {
    if (screens.hasOwnProperty(key)) {
      const screen = screens[key]
      Navigation.registerComponent(screen.name, () => wrapComponentWithStore(screen.container, store));
    }
  }
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