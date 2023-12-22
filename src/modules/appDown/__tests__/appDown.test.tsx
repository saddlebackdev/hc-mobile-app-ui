// npx jest ./src/modules/appDown/__tests__/appDown.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {AppDown} from '../appDown';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

const onPressMock = jest.fn();

describe('AppDown', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <AppDown onRestart={onPressMock} />
        </ThemeProvider>,
      );

      const list = wrapper.getByTestId('app-Down-main');
      expect(list).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call onPress method when pressed', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <AppDown onRestart={onPressMock} />
        </ThemeProvider>,
      );

      const moreItem = wrapper.getByTestId('link');
      expect(moreItem).toBeDefined();
      fireEvent.press(moreItem);
      expect(onPressMock).toHaveBeenCalledTimes(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
