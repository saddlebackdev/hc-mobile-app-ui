// Modules
import {Platform} from 'react-native';

// OS
export const isAndroid = () => Platform.OS === 'android';
export const isIos = () => Platform.OS === 'ios';

// Exports
export default {
  isAndroid,
  isIos,
};
