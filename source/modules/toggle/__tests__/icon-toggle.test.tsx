// npx jest ./source/modules/toggle/__tests__/icon-toggle.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Text} from 'react-native';

import IconToggle from '../icon-toggle';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

let options;

describe('IconToggle', () => {
  beforeEach(() => {
    options = [
      {
        label: 'Laughing',
        onPress: jest.fn(),
        content: selected => {
          return selected ? (
            <Text>😂</Text>
          ) : (
            <Text style={{opacity: 0.5}}>😂</Text>
          );
        },
        value: 1,
      },
      {
        label: 'Crying',
        onPress: jest.fn(),
        content: selected => {
          return selected ? (
            <Text>😭</Text>
          ) : (
            <Text style={{opacity: 0.5}}>😭</Text>
          );
        },
        value: 2,
      },
    ];
  });

  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <IconToggle selected={1} options={options} />
        </ThemeProvider>,
      );

      const iconToggle = wrapper.getByTestId('icon-toggle');

      expect(iconToggle.children).toHaveLength(options.length);

      expect(iconToggle).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders the children correctly', () => {
      const {getByText, queryAllByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <IconToggle selected={1} options={options} />
        </ThemeProvider>,
      );

      const toggleButtons = queryAllByTestId('icon-toggle-button');

      expect(toggleButtons).toHaveLength(options.length);

      const option1 = getByText(options[0].label);
      const option2 = getByText(options[1].label);

      expect(option1).toBeDefined();
      expect(option2).toBeDefined();
    });
  });

  describe('Interactions', () => {
    it('should call onPress function on click of icon button', () => {
      const {getAllByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <IconToggle selected={1} options={options} />
        </ThemeProvider>,
      );

      const buttons = getAllByTestId('icon-toggle-button');

      const [button1] = buttons;

      fireEvent.press(button1);

      expect(options[0].onPress).toHaveBeenCalledTimes(1);
    });
  });
});
