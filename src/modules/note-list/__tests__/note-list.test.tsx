// npx jest ./src/modules/compact-card-list/__tests__/compact-card-list-item.test.tsx

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import NoteListItem from '../note-list';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

const onPressMock = jest.fn();

describe('NoteListItem', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <NoteListItem
            notedate="00/00/00"
            categoryName="For me"
            subject="Communication Attempt"
            description="I called and left a message and also texted! No response yet."
            createdByName="Author Name"
          />
        </ThemeProvider>,
      );

      const moreItem = wrapper.getByTestId('note-card');

      expect(moreItem).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call onPress method when pressed', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <NoteListItem
            notedate="00/00/00"
            categoryName="For me"
            subject="Communication Attempt"
            description="I called and left a message and also texted! No response yet."
            createdByName="Author Name"
            onDotMenuClicked={onPressMock}
          />
        </ThemeProvider>,
      );

      const moreItem = wrapper.getByTestId('link');

      expect(moreItem).toBeDefined();

      fireEvent.press(moreItem);

      expect(onPressMock).toHaveBeenCalledTimes(1);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
