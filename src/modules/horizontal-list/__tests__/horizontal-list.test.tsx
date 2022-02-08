// npx jest ./src/modules/lists/__tests__/horizontal-list.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Text} from 'react-native';

import HorizontalList from '../horizontal-list';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('HorizontalList', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <HorizontalList>
            <Text>A</Text>
          </HorizontalList>
        </ThemeProvider>,
      );

      const list = wrapper.getByTestId('list');

      expect(list).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('should render the title when passed', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <HorizontalList title="Categories">
            <Text>A</Text>
          </HorizontalList>
        </ThemeProvider>,
      );

      const title = wrapper.getByTestId('title');

      expect(title).toBeDefined();
      expect(title.children).toEqual(['Categories']);

      expect(wrapper).toMatchSnapshot();
    });

    it('should render the link', () => {
      const onLinkPressMock = jest.fn();

      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <HorizontalList linkLabel="View All" onLinkPress={onLinkPressMock}>
            <Text>A</Text>
          </HorizontalList>
        </ThemeProvider>,
      );

      const link = wrapper.getByTestId('link');

      expect(link).toBeDefined();

      const linkLabel = wrapper.getByTestId('link-label');

      expect(linkLabel).toBeDefined();
      expect(linkLabel.children).toEqual(['View All']);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call onLinkPress method when link is pressed', () => {
      const onLinkPressMock = jest.fn();

      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <HorizontalList linkLabel="View All" onLinkPress={onLinkPressMock}>
            <Text>A</Text>
          </HorizontalList>
        </ThemeProvider>,
      );

      const link = wrapper.getByTestId('link');

      expect(link).toBeDefined();

      fireEvent.press(link);

      expect(onLinkPressMock).toHaveBeenCalledTimes(1);
    });
  });
});
