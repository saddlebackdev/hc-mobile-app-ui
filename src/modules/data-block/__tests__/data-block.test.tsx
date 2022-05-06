// npx jest ./src/modules/data-block/__tests__/data-block.test.ts

import * as React from 'react';
import {render} from '@testing-library/react-native';

import DataBlock from '../data-block';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

const dummyItems = [
  {
    value: 'Value One',
    label: 'Label One',
  },
  {
    value: 'Value Two',
    label: 'Label Two',
  },
];

describe('DataBlock', () => {
  describe('Rendering', () => {
    it('should render properly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <DataBlock items={dummyItems} />
        </ThemeProvider>,
      );

      const labelOne = wrapper.getByText(dummyItems[0].label);
      const labelTwo = wrapper.getByText(dummyItems[1].label);
      const valueOne = wrapper.getByText(dummyItems[0].value);
      const valueTwo = wrapper.getByText(dummyItems[1].value);

      expect(labelOne).toBeDefined();
      expect(labelTwo).toBeDefined();
      expect(valueOne).toBeDefined();
      expect(valueTwo).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('should render null when items are not passed', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <DataBlock />
        </ThemeProvider>,
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
