// npx jest ./src/modules/button/__tests__/button.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Button from '../button';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('Button', () => {
  describe('Rendering', () => {
    it('renders correctly', () => {
      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Button testID="button">Primary Button</Button>
        </ThemeProvider>,
      );

      const button = getByTestId('button');

      expect(button).toBeDefined();
    });

    it('renders the label correctly', () => {
      const {getByText} = render(
        <ThemeProvider theme={defaultTheme}>
          <Button testID="button-label">Primary Button</Button>
        </ThemeProvider>,
      );

      const button = getByText('Primary Button');

      expect(button).toBeDefined();
    });

    describe('Variants', () => {
      it('default: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Button>Button</Button>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('primary: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Button color="primary">Button</Button>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('secondary: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Button color="secondary">Button</Button>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('info: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Button color="info">Button</Button>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('success: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Button color="success">Button</Button>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('warning: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Button color="warning">Button</Button>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('danger: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Button color="danger">Button</Button>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('outline: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Button appearance="outline">Button</Button>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('small: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Button small>Button</Button>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe('Interactions', () => {
    it('should call the onPress function on click', () => {
      const onPressMock = jest.fn();

      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Button testID="button" onPress={onPressMock}>
            Primary Button
          </Button>
        </ThemeProvider>,
      );

      const button = getByTestId('button');

      fireEvent.press(button);

      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('should not call the onPress function on click when disabled', () => {
      const onPressMock = jest.fn();

      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Button testID="button" onPress={onPressMock} disabled>
            Primary Button
          </Button>
        </ThemeProvider>,
      );

      const button = getByTestId('button');

      fireEvent.press(button);

      expect(onPressMock).not.toHaveBeenCalled();
    });
  });
});
