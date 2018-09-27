import { Navigation } from 'react-native-navigation';
import store from './store/store';
import { registerScreensWithStore } from './index-register';
import { setRootToLaunchScreen } from './navigation/root';

registerScreensWithStore(store);

Navigation.events().registerAppLaunchedListener(() => {
  setRootToLaunchScreen()
});

Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
  // console.log('registerComponentDidAppearListener: ' + componentId + " " + componentName)
  // console.log(store.getState())
});

Navigation.events().registerComponentDidDisappearListener(({ componentId, componentName }) => {
  // console.log('registerComponentDidAppearListener: ' + componentId + " " + componentName)
});