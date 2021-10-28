// npx jest ./source/modules/button/__tests__/button.test.ts

import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Button from '../button';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('Button', () => {
  describe('Rendering', () => {
    it('renders correctly', () => {
      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Button testID="primaryButton">Primary Button</Button>
        </ThemeProvider>,
      );

      const primaryButtonElement = getByTestId('primaryButton');

      expect(primaryButtonElement).toBeDefined();
    });

    it('renders the label correctly', () => {
      const {getByText} = render(
        <ThemeProvider theme={defaultTheme}>
          <Button>Primary Button</Button>
        </ThemeProvider>,
      );

      const labelElement = getByText('Primary Button');

      expect(labelElement).toBeDefined();
    });

    describe('Variants', () => {
      it('default: should match snapshot', () => {
        const buttonElement = render(
          <ThemeProvider theme={defaultTheme}>
            <Button testID="button">Button</Button>
          </ThemeProvider>,
        );

        expect(buttonElement).toMatchSnapshot();
      });

      it('primary: should match snapshot', () => {
        const buttonElement = render(
          <ThemeProvider theme={defaultTheme}>
            <Button color="primary" testID="button">
              Button
            </Button>
          </ThemeProvider>,
        );

        expect(buttonElement).toMatchSnapshot();
      });

      it('secondary: should match snapshot', () => {
        const buttonElement = render(
          <ThemeProvider theme={defaultTheme}>
            <Button color="secondary" testID="button">
              Button
            </Button>
          </ThemeProvider>,
        );

        expect(buttonElement).toMatchSnapshot();
      });

      it('info: should match snapshot', () => {
        const buttonElement = render(
          <ThemeProvider theme={defaultTheme}>
            <Button color="info" testID="button">
              Button
            </Button>
          </ThemeProvider>,
        );

        expect(buttonElement).toMatchSnapshot();
      });

      it('success: should match snapshot', () => {
        const buttonElement = render(
          <ThemeProvider theme={defaultTheme}>
            <Button color="success" testID="button">
              Button
            </Button>
          </ThemeProvider>,
        );

        expect(buttonElement).toMatchSnapshot();
      });

      it('warning: should match snapshot', () => {
        const buttonElement = render(
          <ThemeProvider theme={defaultTheme}>
            <Button color="warning" testID="button">
              Button
            </Button>
          </ThemeProvider>,
        );

        expect(buttonElement).toMatchSnapshot();
      });

      it('danger: should match snapshot', () => {
        const buttonElement = render(
          <ThemeProvider theme={defaultTheme}>
            <Button color="danger" testID="button">
              Button
            </Button>
          </ThemeProvider>,
        );

        expect(buttonElement).toMatchSnapshot();
      });

      it('outline: should match snapshot', () => {
        const buttonElement = render(
          <ThemeProvider theme={defaultTheme}>
            <Button appearance="outline" testID="button">
              Button
            </Button>
          </ThemeProvider>,
        );

        expect(buttonElement).toMatchSnapshot();
      });

      it('small: should match snapshot', () => {
        const buttonElement = render(
          <ThemeProvider theme={defaultTheme}>
            <Button small testID="button">
              Button
            </Button>
          </ThemeProvider>,
        );

        expect(buttonElement).toMatchSnapshot();
      });
    });
  });

  describe('Interactions', () => {
    it('should call the onPress function on click', () => {
      const onPressMock = jest.fn();

      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Button testID="primaryButton" onPress={onPressMock}>
            Primary Button
          </Button>
        </ThemeProvider>,
      );

      const primaryButtonElement = getByTestId('primaryButton');

      fireEvent.press(primaryButtonElement);

      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('should not call the onPress function on click when disabled', () => {
      const onPressMock = jest.fn();

      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Button testID="primaryButton" onPress={onPressMock} disabled>
            Primary Button
          </Button>
        </ThemeProvider>,
      );

      const primaryButtonElement = getByTestId('primaryButton');

      fireEvent.press(primaryButtonElement);

      expect(onPressMock).not.toHaveBeenCalled();
    });
  });
});
