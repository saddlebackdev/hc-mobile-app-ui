// npx jest ./source/modules/toggle/__tests__/pill-toggle.test.ts

import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import PillToggle from '../pill-toggle';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('PillToggle', () => {
  let onPressMock: any, options: any;

  beforeEach(() => {
    onPressMock = jest.fn();

    options = [
      {label: 'Selected', value: 1, onPress: onPressMock},
      {label: 'Unselected', value: 2, onPress: onPressMock},
      {label: 'Disabled', value: 3, onPress: onPressMock, disabled: true},
    ];
  });

  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <PillToggle selected={1} options={options} />
        </ThemeProvider>,
      );

      const pillToggle = wrapper.getByTestId('pill-toggle');

      expect(pillToggle.children).toHaveLength(options.length);

      expect(pillToggle).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders the children correctly', () => {
      const {getByText} = render(
        <ThemeProvider theme={defaultTheme}>
          <PillToggle selected={1} options={options} />
        </ThemeProvider>,
      );

      const option1 = getByText(options[0].label);
      const option2 = getByText(options[1].label);
      const option3 = getByText(options[2].label);

      expect(option1).toBeDefined();
      expect(option2).toBeDefined();
      expect(option3).toBeDefined();
    });
  });

  describe('Interactions', () => {
    it('should call onPress function on click of pill button', () => {
      const {getAllByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <PillToggle selected={1} options={options} />
        </ThemeProvider>,
      );

      const buttons = getAllByTestId('pill-toggle-button');

      fireEvent.press(buttons[0]);

      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('should not call onPress function on click of pill button when option is disabled', () => {
      const {getAllByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <PillToggle selected={1} options={options} />
        </ThemeProvider>,
      );

      const buttons = getAllByTestId('pill-toggle-button');

      fireEvent.press(buttons[2]);

      expect(onPressMock).not.toHaveBeenCalled();
    });

    it('should not call onPress function on click of pill button when toggle itself is disabled', () => {
      const {getAllByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <PillToggle selected={1} options={options} disabled />
        </ThemeProvider>,
      );

      const buttons = getAllByTestId('pill-toggle-button');

      fireEvent.press(buttons[0]);
      fireEvent.press(buttons[1]);
      fireEvent.press(buttons[2]);

      expect(onPressMock).not.toHaveBeenCalled();
    });
  });
});
