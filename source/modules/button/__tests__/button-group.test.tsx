// npx jest ./source/modules/button/__tests__/button-group.test.ts

import * as React from 'react';
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
            <Button>Simple Button 1</Button>
            <Button>Simple Button 2</Button>
          </ButtonGroup>
        </ThemeProvider>,
      );

      const buttons = wrapper.getAllByTestId('button');

      expect(buttons[0]).toBeDefined();
      expect(buttons[1]).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
