// npx jest ./source/modules/checkbox/__tests__/checkbox.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Checkbox from '../checkbox';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('Checkbox', () => {
  let onChangeMock: any;

  beforeEach(() => {
    onChangeMock = jest.fn();
  });

  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Checkbox isChecked={false} onPress={onChangeMock} />
        </ThemeProvider>,
      );

      const checkbox = wrapper.getByTestId('checkbox');

      expect(checkbox).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('should render label when passed', () => {
      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Checkbox isChecked={false} onPress={onChangeMock} label="A Label" />
        </ThemeProvider>,
      );

      const label = getByTestId('checkbox-label');

      expect(label).toBeDefined();

      expect(label.children).toEqual(['A Label']);
    });

    it('should render hint when passed', () => {
      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Checkbox isChecked={false} onPress={onChangeMock} hint="A Hint" />
        </ThemeProvider>,
      );

      const hint = getByTestId('checkbox-hint');

      expect(hint).toBeDefined();

      expect(hint.children).toEqual(['A Hint']);
    });
  });

  describe('Interactions', () => {
    it('should call onPress function on click', () => {
      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Checkbox isChecked={false} onPress={onChangeMock} />
        </ThemeProvider>,
      );

      const checkbox = getByTestId('checkbox');

      fireEvent.press(checkbox);

      expect(onChangeMock).toHaveBeenCalledTimes(1);
    });

    it('should not call onPress function on click when disabled', () => {
      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Checkbox isChecked={false} onPress={onChangeMock} disabled />
        </ThemeProvider>,
      );

      const checkbox = getByTestId('checkbox');

      fireEvent.press(checkbox);

      expect(onChangeMock).not.toHaveBeenCalled();
    });
  });
});
