// Modules
import {Platform} from 'react-native';

/**
 * @method isAndroid
 * Returns true if the current OS is Android
 * */
export const isAndroid: Function = (): boolean => {
  return Platform.OS === 'android';
};

/**
 * @method isIos
 * Returns true if the current OS is Ios
 * */
export const isIos: Function = (): boolean => {
  return Platform.OS === 'ios';
};

// Exports
export default {
  isAndroid,
  isIos,
};
