// npx jest ./source/modules/divider/__tests__/divider.test.ts

import * as React from 'react';
import {render} from '@testing-library/react-native';

import Divider from '../divider';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('Divider', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Divider />
        </ThemeProvider>,
      );

      const divider = wrapper.getByTestId('divider');

      expect(divider).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
