// npx jest ./src/modules/button/__tests__/button-group.test.ts

import * as React from 'react';
import {render} from '@testing-library/react-native';

import Button from '../../button/button';
import ButtonGroup from '../button-group';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('ButtonGroup', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ButtonGroup>
            <Button>Simple Button 1</Button>
            <Button>Simple Button 2</Button>
          </ButtonGroup>
        </ThemeProvider>,
      );

      const buttonGroup = wrapper.getByTestId('button-group');

      expect(buttonGroup).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders its children correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ButtonGroup>
            <Button testID={'button-1'}>Simple Button 1</Button>
            <Button testID={'button-2'}>Simple Button 2</Button>
          </ButtonGroup>
        </ThemeProvider>,
      );

      const button1 = wrapper.getByTestId('button-1');
      const button2 = wrapper.getByTestId('button-2');

      expect(button1).toBeDefined();
      expect(button2).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
