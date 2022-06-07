// npx jest ./src/modules/circular-progress/__tests__/circular-progress.test.ts

import * as React from 'react';
import {render} from '@testing-library/react-native';

import CircularProgress from '../circular-progress';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

const progressValues = [
  {
    value: 20,
    strokeColor: 'red',
    clockwise: false,
  },
  {
    value: 40,
    strokeColor: 'pink',
    clockwise: true,
  },
];

describe('CircularProgress', () => {
  describe('Rendering', () => {
    it('renders correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <CircularProgress
            radius={20}
            inActiveStrokeWidth={12}
            activeStrokeWidth={12}
            inActiveStrokeColor={'#DBE0E3'}
            progressValues={progressValues}
          />
        </ThemeProvider>,
      );

      const defaultCircle = wrapper.getByTestId('empty-circle');

      expect(defaultCircle).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
