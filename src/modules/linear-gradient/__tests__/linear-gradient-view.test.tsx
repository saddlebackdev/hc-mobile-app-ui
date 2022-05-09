// npx jest ./src/modules/linear-gradient/__tests__/linear-gradient-view.test.tsx

import * as React from 'react';
import { render } from '@testing-library/react-native';
import LinearGradientView from '../linear-gradient-view';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';
import Text from '../../text/text';

const gradientColors = [
  {offset: 0, color: '#E4DE74'},
  {offset: 1, color: '#96B660'},
]

describe('LinearGradientView', () => {

  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <LinearGradientView gradientColors={gradientColors}>
            <Text>Test</Text>
          </LinearGradientView>
        </ThemeProvider>,
      );

      const cardItem = wrapper.getByTestId('linear-gradient');

      expect(cardItem).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });
  });

});