// npx jest ./src/modules/tiles/__tests__/tiles.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Text} from 'react-native';

import Tiles from '../tiles';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

let items;

describe('Tiles', () => {
  beforeEach(() => {
    items = [
      {
        disabled: true,
        onPress: jest.fn(),
        id: 'tile-group-tile-worship',
        tileColor: 'primaryLight',
        title: 'Worship',
      },
      {
        onPress: jest.fn(),
        id: 'tile-group-tile-baptism',
        tileContent: <Text>X</Text>,
        tileColor: 'secondaryLight',
        title: 'Baptism',
      },
      {
        onPress: jest.fn(),
        id: 'tile-group-tile-prayer1',
        tileContent: <Text>X</Text>,
        tileColor: 'successLight',
        title: 'Prayer',
      },
    ];
  });

  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Tiles items={items} />
        </ThemeProvider>,
      );

      const tiles = wrapper.getByTestId('tiles');

      expect(tiles.children).toHaveLength(items.length);

      expect(tiles).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders the children correctly', () => {
      const {getByText, queryAllByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Tiles items={items} />
        </ThemeProvider>,
      );

      const tileItems = queryAllByTestId('tile');

      expect(tileItems).toHaveLength(items.length);

      const option1 = getByText(items[0].title);
      const option2 = getByText(items[1].title);
      const option3 = getByText(items[2].title);

      expect(option1).toBeDefined();
      expect(option2).toBeDefined();
      expect(option3).toBeDefined();
    });
  });

  describe('Interactions', () => {
    it('should call item.onPress function when pressed', () => {
      const {queryAllByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Tiles items={items} />
        </ThemeProvider>,
      );

      const tileItems = queryAllByTestId('tile');

      expect(tileItems).toHaveLength(items.length);

      const [, option2] = tileItems;

      fireEvent.press(option2);

      expect(items[1].onPress).toHaveBeenCalledTimes(1);
    });

    it('should not call item.onPress function when pressed when item.disabled is true', () => {
      const {queryAllByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <Tiles items={items} />
        </ThemeProvider>,
      );

      const tileItems = queryAllByTestId('tile');

      expect(tileItems).toHaveLength(items.length);

      const [option1] = tileItems;

      fireEvent.press(option1);

      expect(items[0].onPress).not.toHaveBeenCalled();
    });
  });
});
