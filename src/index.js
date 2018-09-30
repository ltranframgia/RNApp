import { Navigation } from 'react-native-navigation';
import store from './store/store';
import { Provider } from 'react-redux';
import { defautOptions } from './config/options';
import { registerScreensWithStore } from './containers/screens-register';
import { setRootToLaunchScreen } from './navigation/root';
import { Reachability } from './utils'

registerScreensWithStore(Provider, store);

Navigation.events().registerAppLaunchedListener(() => {

  // setroot
  setRootToLaunchScreen()

  // listen
  Reachability.listen()

  // option
  Navigation.setDefaultOptions(defautOptions);

});

Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
  // console.log('registerComponentDidAppearListener: ' + componentId + " " + componentName)
  // console.log(store.getState())
});

Navigation.events().registerComponentDidDisappearListener(({ componentId, componentName }) => {
  // console.log('registerComponentDidAppearListener: ' + componentId + " " + componentName)
});
