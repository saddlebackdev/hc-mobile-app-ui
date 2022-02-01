// npx jest ./source/modules/lists/__tests__/card-list.test.ts

import * as React from 'react';
import {render} from '@testing-library/react-native';

import {CardList} from '../card-list';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

const onPressMock = jest.fn();
const cardListItems = [
  {
    id: 'card-list-item-1',
    title: 'A Title',
    subTitle: 'A Subtitle',
    photoUrl: 'https://images.com/abc.png',
    description: 'A Description',
    tags: ['Tag One', 'Tag Two'],
    onPress: onPressMock,
  },
  {
    id: 'card-list-item-2',
    title: 'A Title',
    subTitle: 'A Subtitle',
    photoUrl: 'https://images.com/abc.png',
    description: 'A Description',
    tags: null,
    onPress: onPressMock,
  },
];

describe('CardList', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <CardList items={cardListItems} />
        </ThemeProvider>,
      );

      const list = wrapper.getByTestId('list');

      expect(list).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
