import { Navigation } from 'react-native-navigation';

let isShowing = false

const showHud = () => {
  if (isShowing === true) {
    return
  }
  
  isShowing = true
  Navigation.showOverlay({
    component: {
      id: 'loadingHUDScreenId',
      name: 'LoadingHUDScreen',
      options: {
        overlay: {
          interceptTouchOutside: false
        }
      }
    }
  });
}

const hideHud = () => {
  isShowing = false
  Navigation.dismissOverlay('loadingHUDScreenId');
}

export default { showHud, hideHud, isShowing };