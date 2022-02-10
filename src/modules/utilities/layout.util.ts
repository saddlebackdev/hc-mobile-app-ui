// Modules
import {Dimensions} from 'react-native';

/**
 * @method addHitSlop
 * Returns an object to be used as a value for hitslop
 * */
export const addHitSlop: Function = (
  top: number,
  right: number = top,
  bottom: number = top,
  left: number = right,
) => {
  return {
    top,
    right,
    bottom,
    left,
  };
};

/**
 * @method getScreenHeight
 * Returns the height of the screen
 * See: https://reactnative.dev/docs/dimensions
 * */
export const getScreenHeight = (): number => {
  return Dimensions.get('screen').height;
};

/**
 * @method getScreenWidth
 * Returns the width of the screen
 * See: https://reactnative.dev/docs/dimensions
 * */
export const getScreenWidth = (): number => {
  return Dimensions.get('screen').width;
};

/**
 * @method getWindowHeight
 * Returns the height of the device
 * See: https://reactnative.dev/docs/dimensions
 * */
export const getWindowHeight = (): number => {
  return Dimensions.get('window').height;
};

/**
 * @method getWindowWidth
 * Returns the height of the device
 * See: https://reactnative.dev/docs/dimensions
 * */
export const getWindowWidth = (): number => {
  return Dimensions.get('window').width;
};

// Exports
export default {
  addHitSlop,
  getScreenHeight,
  getScreenWidth,
  getWindowHeight,
  getWindowWidth,
};
