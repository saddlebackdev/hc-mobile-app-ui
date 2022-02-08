// npx jest ./src/modules/text-input/__tests__/text-input.test.ts

import * as React from 'react';
import {render} from '@testing-library/react-native';

import TextInput from '../text-input';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('TextInput', () => {
  let onChangeMock: any;

  beforeEach(() => {
    onChangeMock = jest.fn();
  });

  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <TextInput onChange={onChangeMock} />
        </ThemeProvider>,
      );

      const input = wrapper.getByTestId('input');

      expect(input).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('should render label when passed', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <TextInput onChange={onChangeMock} label="A Label" />
        </ThemeProvider>,
      );

      const label = wrapper.getByTestId('input-label');

      expect(label.children).toEqual(['A Label', ' ']);

      expect(wrapper).toMatchSnapshot();
    });

    it('should render label with an asterisk when "required"', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <TextInput onChange={onChangeMock} label="A Label" required />
        </ThemeProvider>,
      );

      const asterisk = wrapper.queryByTestId('input-label-asterisk');

      expect(asterisk).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
