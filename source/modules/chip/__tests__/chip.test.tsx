// npx jest ./source/modules/chip/__tests__/chip.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Chip from '../chip';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('Chip', () => {
  describe('Rendering', () => {
    it('renders correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Chip label="Care" onPress={jest.fn()} />
        </ThemeProvider>,
      );

      const label = wrapper.getByTestId('chip-label');

      expect(label).toBeDefined();

      expect(label.children).toEqual(['Care']);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call the onPress function on click of "x" button', () => {
      const onPressMock = jest.fn();

      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Chip label="Care" onPress={onPressMock} />
        </ThemeProvider>,
      );

      const button = getByTestId('chip-close-button');

      expect(button).toBeDefined();

      fireEvent.press(button);

      expect(onPressMock).toHaveBeenCalledTimes(1);
    });
  });
});
