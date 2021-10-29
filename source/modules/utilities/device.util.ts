// Modules
import {Platform} from 'react-native';

// OS
const isAndroid: Function = (): boolean => {
  return Platform.OS === 'android';
};
const isIos: Function = (): boolean => {
  return Platform.OS === 'ios';
};

// Exports
export default {
  /** Returns true if the current OS is Android */
  isAndroid,

  /** Returns true if the current OS is iOS */
  isIos,
};
