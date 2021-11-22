// npx jest ./source/modules/radio/__tests__/radio.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Radio from '../radio';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('Radio', () => {
  let onChangeMock: any, options: any;

  beforeEach(() => {
    onChangeMock = jest.fn();

    options = [
      {label: 'Option 1', value: 1},
      {label: 'Option 2', value: 2, disabled: true},
      {label: 'Option 3', value: 3},
    ];
  });

  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Radio selected={1} options={options} onChange={onChangeMock} />
        </ThemeProvider>,
      );

      const radio = wrapper.getByTestId('radio');

      expect(radio.children).toHaveLength(options.length);

      expect(radio).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders the children correctly', () => {
      const {getByText} = render(
        <ThemeProvider theme={defaultTheme}>
          <Radio selected={1} options={options} onChange={onChangeMock} />
        </ThemeProvider>,
      );

      const option1 = getByText(options[0].label);
      const option2 = getByText(options[1].label);
      const option3 = getByText(options[2].label);

      expect(option1).toBeDefined();
      expect(option2).toBeDefined();
      expect(option3).toBeDefined();
    });

    describe('Variants', () => {
      it('vertical: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Radio
              selected={1}
              options={options}
              onChange={onChangeMock}
              direction="vertical"
            />
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('horizontal: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Radio
              selected={1}
              options={options}
              onChange={onChangeMock}
              direction="horizontal"
            />
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('Interactions', () => {
    it('should call onChange function on click of radio button', () => {
      const {getAllByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Radio selected={1} options={options} onChange={onChangeMock} />
        </ThemeProvider>,
      );

      const buttons = getAllByTestId('radio-button');

      fireEvent.press(buttons[0]);

      expect(onChangeMock).toHaveBeenCalledTimes(1);
    });

    it('should not call onChange function on click of radio button when option is disabled', () => {
      const {getAllByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Radio selected={1} options={options} onChange={onChangeMock} />
        </ThemeProvider>,
      );

      const buttons = getAllByTestId('radio-button');

      fireEvent.press(buttons[1]);

      expect(onChangeMock).not.toHaveBeenCalled();
    });

    it('should not call onChange function on click of radio button when radio itself is disabled', () => {
      const {getAllByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Radio
            selected={1}
            options={options}
            onChange={onChangeMock}
            disabled
          />
        </ThemeProvider>,
      );

      const buttons = getAllByTestId('radio-button');

      fireEvent.press(buttons[0]);
      fireEvent.press(buttons[1]);
      fireEvent.press(buttons[2]);

      expect(onChangeMock).not.toHaveBeenCalled();
    });
  });
});
