import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

import UserItem from '../people-list-item';

const onPressMock = jest.fn();

describe('UserItem', () => {
  describe('Rendering', () => {
    it('should render properly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <UserItem
            name={'Stephen John'}
            maritalStatus={'Married'}
            gender={'M'}
            churchEntityName={'Corona'}
            profilePic={'https://www.google.com'}
            userId={'512345'}
          />
        </ThemeProvider>,
      );

      const headerWrapper = wrapper.queryByTestId('main-wrapper');

      expect(headerWrapper).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('hides icon when it is null', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <UserItem
            name={'Stephen John'}
            maritalStatus={'Married'}
            gender={'M'}
            churchEntityName={'Corona'}
            profilePic={null}
            userId={'512345'}
          />
        </ThemeProvider>,
      );

      const icon = wrapper.queryByTestId('profile-pic');

      expect(icon).toBeNull();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call the onPress method when card is pressed', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <UserItem
            name={'Stephen John'}
            maritalStatus={'Married'}
            gender={'M'}
            churchEntityName={'Corona'}
            profilePic={null}
            userId={'512345'}
            onPress={onPressMock}
          />
        </ThemeProvider>,
      );

      const linkWrapper = wrapper.getByTestId('link-wrapper');

      expect(linkWrapper).toBeDefined();

      fireEvent.press(linkWrapper);

      expect(onPressMock).toHaveBeenCalledTimes(1);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
