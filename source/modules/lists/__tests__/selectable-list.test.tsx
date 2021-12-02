// npx jest ./source/modules/lists/__tests__/selectable-list.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {SelectableList, SelectableListItem} from '../selectable-list';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

const onPressMock = jest.fn();

const selectableListItems = [
  {
    label: 'List Item 1',
    onPress: onPressMock,
    id: 'app-list-item-1',
  },
  {
    label: 'List Item 2',
    onPress: onPressMock,
    id: 'app-list-item-2',
  },
  {
    label: 'List Item 3',
    onPress: onPressMock,
    id: 'app-list-item-3',
  },
];

describe('SelectableList', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <SelectableList
            selected="app-list-item-1"
            items={selectableListItems}
          />
        </ThemeProvider>,
      );

      const list = wrapper.getByTestId('list');

      expect(list).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe('SelectableListItem', () => {
  const [item] = selectableListItems;

  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <SelectableListItem {...item} isSelected={false} />
        </ThemeProvider>,
      );

      const listItem = wrapper.getByTestId('item');

      expect(listItem).toBeDefined();

      const itemLabel = wrapper.getByTestId('item-label');

      expect(itemLabel.children).toEqual([item.label]);

      expect(wrapper).toMatchSnapshot();
    });

    it('renders tick icon when selected', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <SelectableListItem {...item} isSelected={true} />
        </ThemeProvider>,
      );

      const listItem = wrapper.getByTestId('item');

      expect(listItem).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call onPress when pressed', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <SelectableListItem {...item} isSelected={false} />
        </ThemeProvider>,
      );

      const listItem = wrapper.getByTestId('item');

      fireEvent.press(listItem);

      expect(onPressMock).toHaveBeenCalledTimes(1);
    });
  });
});
