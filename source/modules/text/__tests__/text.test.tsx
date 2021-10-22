// npx jest ./source/modules/text/__tests__/text.test.ts

import React from 'react';
import {render} from '@testing-library/react-native';

import Text from '../text';
import defaultTheme from '../../theming/default-theme';

describe('Text', () => {
  it('renders itself correctly', () => {
    const {getByTestId} = render(
      <Text theme={defaultTheme} testID="simpleText">
        This is a text line
      </Text>,
    );

    const textElement = getByTestId('simpleText');

    expect(textElement).toBeDefined();
  });

  it('renders renders the text correctly', () => {
    const {getByText} = render(
      <Text theme={defaultTheme} testID="simpleText">
        This is a text line
      </Text>,
    );

    const textElement = getByText('This is a text line');

    expect(textElement).toBeDefined();
  });
});
