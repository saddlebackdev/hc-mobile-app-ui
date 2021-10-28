// npx jest ./source/modules/button/__tests__/button-group.test.ts

import React from 'react';
import {render} from '@testing-library/react-native';

import Button from '../button';
import ButtonGroup from '../button-group';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('ButtonGroup', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ButtonGroup testID="myButtonGroup">
            <Button>Simple Button 1</Button>
            <Button>Simple Button 2</Button>
          </ButtonGroup>
        </ThemeProvider>,
      );

      const buttonGroupElement = wrapper.getByTestId('myButtonGroup');

      expect(buttonGroupElement).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders its children correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ButtonGroup>
            <Button testID="simpleButton1">Simple Button 1</Button>
            <Button testID="simpleButton2">Simple Button 2</Button>
          </ButtonGroup>
        </ThemeProvider>,
      );

      const buttonElement1 = wrapper.getByTestId('simpleButton1');
      const buttonElement2 = wrapper.getByTestId('simpleButton2');

      expect(buttonElement1).toBeDefined();
      expect(buttonElement2).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
