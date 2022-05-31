// npx jest ./src/modules/filter-drawer/__tests__/filter-drawer.test.tsx

import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Text from '../../text/text';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

import {FilterDrawer} from '../filter-drawer.tsx';

// Required to allow Jest to exit tests properly
jest.useFakeTimers();

describe('FilterDrawer', () => {
  describe('Rendering', () => {
    it('should render properly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <FilterDrawer
            primaryChildren={<Text>Left Component</Text>}
            secondaryChildren={<Text>Right Component</Text>}
          />
        </ThemeProvider>,
      );

      const drawerWrapper = wrapper.getByTestId('drawer-wrapper');
      const primaryContent = wrapper.getByTestId('drawer-primary-content');
      const secondaryContent = wrapper.getByTestId('drawer-secondary-content');

      expect(drawerWrapper).toBeDefined();
      expect(primaryContent).toBeDefined();
      expect(secondaryContent).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('should render children properly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <FilterDrawer
            primaryChildren={<Text>Left Component</Text>}
            secondaryChildren={<Text>Right Component</Text>}
          />
        </ThemeProvider>,
      );

      const drawerWrapper = wrapper.getByTestId('drawer-wrapper');
      const primaryChild = wrapper.getByText('Left Component');
      const secondaryChild = wrapper.getByText('Right Component');

      expect(drawerWrapper).toBeDefined();
      expect(primaryChild).toBeDefined();
      expect(secondaryChild).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it("should render 'clear filters' action when in primary view", () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <FilterDrawer
            shouldShowSecondaryContent={false}
            primaryChildren={<Text>Left Component</Text>}
            secondaryChildren={<Text>Right Component</Text>}
          />
        </ThemeProvider>,
      );

      const clearFiltersAction = wrapper.getByTestId(
        'drawer-clear-filters-action',
      );

      expect(clearFiltersAction).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it("should render 'back' action when in secondary view", () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <FilterDrawer
            shouldShowSecondaryContent
            primaryChildren={<Text>Left Component</Text>}
            secondaryChildren={<Text>Right Component</Text>}
          />
        </ThemeProvider>,
      );

      const backAction = wrapper.getByTestId('drawer-back-action');

      expect(backAction).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    describe('onApplyFilters()', () => {
      it("should call the passed 'onApplyFilters' when apply filters button is pressed", () => {
        const dummyOnClose = jest.fn();

        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <FilterDrawer
              shouldShowSecondaryContent
              primaryChildren={<Text>Left Component</Text>}
              secondaryChildren={<Text>Right Component</Text>}
              onApplyFilters={dummyOnClose}
            />
          </ThemeProvider>,
        );

        const applyFiltersBtn = wrapper.getByTestId(
          'drawer-apply-filters-button',
        );

        expect(applyFiltersBtn).toBeDefined();

        fireEvent.press(applyFiltersBtn);

        expect(dummyOnClose).toHaveBeenCalledTimes(1);
      });
    });
  });
});
