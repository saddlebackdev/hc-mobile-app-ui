// npx jest ./src/modules/lists/__tests__/card-list-item.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {CardListItem} from '../card-list-item';
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

describe('CardListItem', () => {
  const [item] = cardListItems;

  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <CardListItem {...item} />
        </ThemeProvider>,
      );

      const listItem = wrapper.getByTestId('list-item');

      expect(listItem).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('hides tags when it is null', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <CardListItem {...item} tags={null} />
        </ThemeProvider>,
      );

      const itemTags = wrapper.queryByTestId('item-tags');

      expect(itemTags).toBeNull();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call onPress method when pressed', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <CardListItem {...item} />
        </ThemeProvider>,
      );

      const listItem = wrapper.getByTestId('list-item');

      expect(listItem).toBeDefined();

      fireEvent.press(listItem);

      expect(onPressMock).toHaveBeenCalledTimes(1);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
