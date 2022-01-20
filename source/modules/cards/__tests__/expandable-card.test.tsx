// npx jest ./source/modules/cards/__tests__/expandable-card.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {View, Text} from 'react-native';

import ExpandableCard from '../expandable-card';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('ExpandableCard', () => {
  describe('Rendering: Tile', () => {
    it('tile renders correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ExpandableCard
            title="Title"
            tileContent={<View />}
            onPress={jest.fn()}
            isOpen={false}
          />
        </ThemeProvider>,
      );

      const tile = wrapper.getByTestId('tile');

      expect(tile).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders title properly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ExpandableCard
            title="Some Title"
            tileContent={<View />}
            onPress={jest.fn()}
            isOpen={false}
          />
        </ThemeProvider>,
      );

      const title = wrapper.getByTestId('tile-title');

      expect(title).toBeDefined();

      expect(title.children).toEqual(['Some Title']);
    });

    it('renders subtitle properly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ExpandableCard
            title="Some Title"
            subTitle="Some Subtitle"
            tileContent={<View />}
            onPress={jest.fn()}
            isOpen={false}
          />
        </ThemeProvider>,
      );

      const subtitle = wrapper.getByTestId('tile-subtitle');

      expect(subtitle).toBeDefined();

      expect(subtitle.children).toEqual(['Some Subtitle']);
    });

    it('should set tile color to passed tileColor value', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ExpandableCard
            title="Some Title"
            subTitle="Some Subtitle"
            tileColor="infoLight"
            tileContent={<View />}
            onPress={jest.fn()}
            isOpen={false}
          />
        </ThemeProvider>,
      );

      const tileContent = wrapper.getByTestId('tile-content');

      expect(tileContent).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders title marker properly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ExpandableCard
            title="Some Title"
            titleMarker={<Text>O</Text>}
            subTitle="Some Subtitle"
            tileContent={<View />}
            onPress={jest.fn()}
            isOpen={false}
          />
        </ThemeProvider>,
      );

      const marker = wrapper.getByTestId('title-marker');

      expect(marker).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders subTitle Marker properly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ExpandableCard
            title="Some Title"
            subTitle="Some Subtitle"
            subTitleMarker={<Text>O</Text>}
            tileContent={<View />}
            onPress={jest.fn()}
            isOpen={false}
          />
        </ThemeProvider>,
      );

      const marker = wrapper.getByTestId('subtitle-marker');

      expect(marker).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Rendering: Card', () => {
    it('card renders correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ExpandableCard
            title="Title"
            tileContent={<View />}
            onPress={jest.fn()}
            isOpen={true}
          />
        </ThemeProvider>,
      );

      const card = wrapper.getByTestId('card');

      expect(card).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders title properly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ExpandableCard
            title="Some Title"
            tileContent={<View />}
            onPress={jest.fn()}
            isOpen={true}
          />
        </ThemeProvider>,
      );

      const title = wrapper.getByTestId('card-title');

      expect(title).toBeDefined();

      expect(title.children).toEqual(['Some Title']);
    });
  });

  describe('Tile: Interactions', () => {
    it('should call passed onPress function when pressed', () => {
      const onPressMock = jest.fn();

      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ExpandableCard
            title="Some Title"
            tileContent={<View />}
            onPress={onPressMock}
            isOpen={false}
          />
        </ThemeProvider>,
      );

      const tile = wrapper.getByTestId('tile');

      fireEvent.press(tile);

      expect(onPressMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Card: Interactions', () => {
    it('should call passed onPress function when pressed', () => {
      const onPressMock = jest.fn();

      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <ExpandableCard
            title="Some Title"
            tileContent={<View />}
            onPress={onPressMock}
            isOpen={true}
          />
        </ThemeProvider>,
      );

      const closeButton = wrapper.getByTestId('card-close-button');

      fireEvent.press(closeButton);

      expect(onPressMock).toHaveBeenCalledTimes(1);
    });
  });
});
