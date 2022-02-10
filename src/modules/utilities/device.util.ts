// Modules
import {ColorSchemeName, Appearance, Platform} from 'react-native';

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

/**
 * @method getColorScheme
 * Returns the color scheme of the device.
 * */
export const getColorScheme = (): ColorSchemeName => {
  return Appearance.getColorScheme();
};

/**
 * @method isDarkModeActive
 * Returns true if the current color scheme is "dark".
 * */
export const isDarkModeActive = (): boolean => {
  return getColorScheme() === 'dark';
};

// Exports
export default {
  isAndroid,
  isIos,
};
