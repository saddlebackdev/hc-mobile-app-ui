// npx jest ./src/modules/tabs/__tests__/tabs.test.tsx

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Tabs from '../tabs';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';
import {ITab} from '../tabs.types';

describe('Tabs', () => {
  let tabItems: ITab[], onChangeMock: Function, onLinkPress: Function;

  beforeEach(() => {
    onChangeMock = jest.fn();
    onLinkPress = jest.fn();

    // Tab Items
    tabItems = [
      {label: 'Tab 1', value: 1},
      {label: 'Tab 2', value: 2},
      {label: 'Tab 3', value: 3},
    ];
  });

  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Tabs
            items={tabItems}
            selected={tabItems[0].value}
            onChange={onChangeMock}
          />
        </ThemeProvider>,
      );

      const tab1 = wrapper.getByTestId('tab-1');
      const tab2 = wrapper.getByTestId('tab-2');
      const tab3 = wrapper.getByTestId('tab-3');

      expect(tab1).toBeDefined();
      expect(tab2).toBeDefined();
      expect(tab3).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders the selected tab correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Tabs
            items={tabItems}
            selected={tabItems[2].value}
            onChange={onChangeMock}
          />
        </ThemeProvider>,
      );

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call onChange function on click of any tab', () => {
      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Tabs
            items={tabItems}
            selected={tabItems[0].value}
            onChange={onChangeMock}
          />
        </ThemeProvider>,
      );

      const tab2 = getByTestId('tab-2');

      fireEvent.press(tab2);

      expect(onChangeMock).toHaveBeenCalledTimes(1);
    });

    it('should call the onLinkPress method when link is pressed', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Tabs
            items={tabItems}
            selected={tabItems[0].value}
            onChange={onChangeMock}
            linkLabel={'View All'}
            onLinkPress={onLinkPress}
          />
        </ThemeProvider>,
      );

      const link = wrapper.getByTestId('link');

      fireEvent.press(link);

      expect(onLinkPress).toHaveBeenCalledTimes(1);
    });
  });
});
