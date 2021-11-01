// npx jest ./source/modules/avatar/__tests__/avatar.test.ts

import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Avatar from '../avatar';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('Avatar', () => {
  describe('Rendering', () => {
    it('renders correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Avatar uri="https://example.com/baby.jpg" />
        </ThemeProvider>,
      );

      const image = wrapper.getByTestId('avatar-image');

      expect(image).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call the onPress function on click', () => {
      const onPressMock = jest.fn();

      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Avatar uri="https://example.com/baby.jpg" onPress={onPressMock} />
        </ThemeProvider>,
      );

      const button = getByTestId('avatar-button');

      expect(button).toBeDefined();

      fireEvent.press(button);

      expect(onPressMock).toHaveBeenCalledTimes(1);
    });
  });
});
