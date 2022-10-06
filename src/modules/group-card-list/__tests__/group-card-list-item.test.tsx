// npx jest ./src/modules/group-card-list/__tests__/group-card-list-item.test.tsx

import * as React from 'react';
import {render} from '@testing-library/react-native';
import GroupCardListItem from '../group-card-list-item';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

import IconShapeHeart from './src/images/shape-heart.svg';

describe('GroupCardListItem', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <GroupCardListItem
            title="TestCard"
            leftIcon={IconShapeHeart}
            leftText={'TestLeftText'}
            rightIcon={IconShapeHeart}
            rightText={'TestLeftText'}
            expandedElement={<></>}
          />
        </ThemeProvider>,
      );

      const cardItem = wrapper.getByTestId('group-card');

      expect(cardItem).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
