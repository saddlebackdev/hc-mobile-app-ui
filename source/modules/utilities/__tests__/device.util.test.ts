// npx jest ./source/modules/utilities/__tests__/device.util.test.js

import {Platform} from 'react-native';

import {isAndroid, isIos} from '../device.util';

describe('DeviceUtils', () => {
  describe('isAndroid()', () => {
    it('should return true when device is Android', () => {
      Platform.OS = 'android';

      expect(isAndroid()).toBeTruthy();
    });
    it('should return false when device is not Android', () => {
      Platform.OS = 'macos';

      expect(isAndroid()).toBeFalsy();
    });
  });

  describe('isIos()', () => {
    it('should return true when device is iOS', () => {
      Platform.OS = 'ios';

      expect(isIos()).toBeTruthy();
    });
    it('should return false when device is not iOS', () => {
      Platform.OS = 'macos';

      expect(isIos()).toBeFalsy();
    });
  });
});
