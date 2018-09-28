import { NetInfo } from 'react-native';

let isConnected = false;

const listen = () => {
  // listen
  NetInfo.addEventListener('connectionChange', this.handleConnectionChange);
}

const removeListener = () => {
  // listen
  NetInfo.removeEventListener('connectionChange', this.handleConnectionChange)
}

handleConnectionChange = (connectionChange) => {

  // fetch
  NetInfo.isConnected.fetch().then(connected => {
    isConnected = connected;

    let data = { ...connectionChange, isConnected: isConnected }
    const action = () => ({
      type: 'CONNECTION_CHANGE',
      payload: data
    })

    const store = require('../store/store').default
    store.dispatch(action())
  });

};

export default { listen, removeListener, isConnected }