import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { getStore } from './store/store';
import { defautOptions } from './config/options';
import { registerScreensWithStore } from './config/screens-register';
import { setRootToLaunchScreen } from './navigation/root';
import { Reachability } from './utils'
import SocketManager from './modules/SocketManager'

registerScreensWithStore(Provider, getStore());

Navigation.events().registerAppLaunchedListener(() => {

  // setroot
  setRootToLaunchScreen()

  // listen
  Reachability.listen()

  // options
  Navigation.setDefaultOptions(defautOptions);

  // socket
  SocketManager.connect()

});

Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
  console.log('registerComponentDidAppearListener: ' + componentId + " " + componentName)
  // console.log(store.getState())
});

Navigation.events().registerComponentDidDisappearListener(({ componentId, componentName }) => {
  // console.log('registerComponentDidAppearListener: ' + componentId + " " + componentName)
});
