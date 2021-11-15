// npx jest ./source/modules/floater/__tests__/floater.test.ts

import * as React from 'react';;
import {render} from '@testing-library/react-native';

import Floater from '../floater';
import Button from '../../button/button';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('Floater', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Floater alignment="bottom">
            <Button>Primary Button</Button>
          </Floater>
        </ThemeProvider>,
      );

      const floater = wrapper.getByTestId('floater');

      expect(floater).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders its children correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Floater alignment="bottom">
            <Button>Primary Button</Button>
          </Floater>
        </ThemeProvider>,
      );

      const button = wrapper.getByTestId('button');

      expect(button).toBeDefined();
    });
  });
});
