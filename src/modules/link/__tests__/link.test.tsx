// npx jest ./src/modules/link/__tests__/link.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Text} from 'react-native';

import Link from '../link';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

const onLinkPressMock = jest.fn();

describe('Link', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Link label="Go To Link" to="https://saddleback.com" />
        </ThemeProvider>,
      );

      const link = wrapper.getByTestId('link');

      expect(link).toBeDefined();

      const label = wrapper.getByTestId('link-label');

      expect(label).toBeDefined();

      expect(label.children).toEqual(['Go To Link']);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders the child instead of label correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Link to="https://saddleback.com">
            <Text testID="link-children">Custom Label</Text>
          </Link>
        </ThemeProvider>,
      );

      const customLabel = wrapper.getByTestId('link-children');

      expect(customLabel).toBeDefined();
      expect(customLabel.children).toEqual(['Custom Label']);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call the onPress method when it is passed', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Link label="Go To Link" to="home" onPress={onLinkPressMock} />
        </ThemeProvider>,
      );

      const link = wrapper.getByTestId('link');

      fireEvent.press(link);

      expect(onLinkPressMock).toHaveBeenCalledTimes(1);
    });
  });
});
