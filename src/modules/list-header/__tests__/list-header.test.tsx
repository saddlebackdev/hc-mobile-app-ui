// npx jest ./src/modules/list-header/__tests__/list-header.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import ListHeader from '../list-header';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('ListHeader', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ListHeader title="Categories" />
        </ThemeProvider>,
      );

      const title = wrapper.getByTestId('title');

      expect(title).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders link label correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ListHeader title="Categories" linkLabel="View All" />
        </ThemeProvider>,
      );

      const linkLabel = wrapper.getByText('View All');

      expect(linkLabel).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call the onLinkPress method when link is pressed', () => {
      const onLinkPress = jest.fn();

      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ListHeader
            title="Categories"
            onLinkPress={onLinkPress}
            linkLabel="View All"
          />
        </ThemeProvider>,
      );

      const link = wrapper.getByTestId('link');

      fireEvent.press(link);

      expect(onLinkPress).toHaveBeenCalledTimes(1);
    });
  });
});
