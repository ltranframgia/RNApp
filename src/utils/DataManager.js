import { AsyncStorage } from 'react-native';

async function getValueFromKey(key) {
  let value = '';
  try {
    value = await AsyncStorage.getItem(key);
  } catch (error) {
  }
  return value;
}

async function saveValueWithKey(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error save value
    console.log(error.message);
  }
}

export default { getValueFromKey, saveValueWithKey }