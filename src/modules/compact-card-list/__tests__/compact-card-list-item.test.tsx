// npx jest ./src/modules/compact-card-list/__tests__/compact-card-list-item.test.tsx

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import CompactCardListItem from '../compact-card-list-item';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

import IconShapeHeart from './src/images/shape-heart.svg';

const gradientColors = [
  {offset: 0, color: '#E4DE74'},
  {offset: 1, color: '#96B660'},
];

const onPressMock = jest.fn();

describe('CompactCardListItem', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <CompactCardListItem
            title="TestCard"
            icon={IconShapeHeart}
            leftGradientViewStyle={{gradientColors}}
          />
        </ThemeProvider>,
      );

      const cardItem = wrapper.getByTestId('compact-card');

      expect(cardItem).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('hides icon when it is null', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <CompactCardListItem
            title="TestCard"
            icon={null}
            leftGradientViewStyle={{gradientColors}}
          />
        </ThemeProvider>,
      );

      const icon = wrapper.queryByTestId('icon');

      expect(icon).toBeNull();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call onPress method when pressed', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <CompactCardListItem
            title="TestCard"
            onPress={onPressMock}
            icon={IconShapeHeart}
            leftGradientViewStyle={{gradientColors}}
          />
        </ThemeProvider>,
      );

      const cardItem = wrapper.getByTestId('link');

      expect(cardItem).toBeDefined();

      fireEvent.press(cardItem);

      expect(onPressMock).toHaveBeenCalledTimes(1);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
