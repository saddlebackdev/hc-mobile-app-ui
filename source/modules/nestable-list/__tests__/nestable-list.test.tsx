// npx jest ./source/modules/lists/__tests__/nestable-list.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {
  NestableList,
  NestableListParentItem,
  NestableListChildItem,
} from '../nestable-list';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

const onPressParentMock = jest.fn();
const onPressChildMock = jest.fn();

const nestableListItems = [
  {
    label: 'Campus',
    onPress: onPressParentMock,
    id: 'app-list-item-campus',
    children: [
      {
        label: 'Lake Forest',
        id: 'app-list-item-child-lake-forest',
        onPress: onPressChildMock,
      },
      {
        label: 'Laguna Woods',
        id: 'app-list-item-child-laguna-woods',
        onPress: onPressChildMock,
      },
      {
        label: 'San Diego',
        id: 'app-list-item-child-san-diego',
        onPress: onPressChildMock,
      },
    ],
  },
  {
    label: 'Category',
    onPress: onPressParentMock,
    id: 'app-list-item-category',
  },
  {
    label: 'Tags',
    onPress: onPressParentMock,
    id: 'app-list-item-tags',
  },
];

describe('NestableList', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <NestableList items={nestableListItems} />
        </ThemeProvider>,
      );

      const list = wrapper.getByTestId('list');

      expect(list).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders the parent items correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <NestableList items={nestableListItems} />
        </ThemeProvider>,
      );

      const parentItems = wrapper.getAllByTestId('parent');

      expect(parentItems).toHaveLength(nestableListItems.length);

      const labels = parentItems.map(item => {
        const label = item.findByProps({testID: 'parent-label'});

        return label.props.children;
      });

      labels.forEach((label, ndx) => {
        expect(label).toEqual(nestableListItems[ndx].label);
      });
    });
  });
});

describe('NestableListParentItem', () => {
  const [item] = nestableListItems;

  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <NestableListParentItem {...item} />
        </ThemeProvider>,
      );

      const parentItem = wrapper.getByTestId('parent');

      expect(parentItem).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call onPress method when pressed', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <NestableListParentItem {...item} />
        </ThemeProvider>,
      );

      const parentItem = wrapper.getByTestId('parent');

      expect(parentItem).toBeDefined();

      fireEvent.press(parentItem);

      expect(onPressParentMock).toHaveBeenCalledTimes(1);
    });
  });
});

describe('NestableListChildItem', () => {
  const [item] = nestableListItems;
  const [child] = item.children;

  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <NestableListChildItem {...child} />
        </ThemeProvider>,
      );

      const childItem = wrapper.getByTestId('child');

      expect(childItem).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call onPress method when pressed', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <NestableListChildItem {...child} />
        </ThemeProvider>,
      );

      const childItem = wrapper.getByTestId('child');

      expect(childItem).toBeDefined();

      fireEvent.press(childItem);

      expect(onPressChildMock).toHaveBeenCalledTimes(1);
    });
  });
});
