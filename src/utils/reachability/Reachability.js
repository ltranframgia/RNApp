import { NetInfo } from 'react-native';

let isConnected = false;

const listen = () => {
  // listen
  NetInfo.addEventListener('connectionChange', this.handleConnectionChange);
}

const removeListener = () => {
  // removeListener
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

    const { dispatchAction } = require('../../store/store')
    dispatchAction(action())
  });

};

export default { listen, removeListener, isConnected }