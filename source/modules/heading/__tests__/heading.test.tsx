// npx jest ./source/modules/heading/__tests__/heading.test.js

import React from 'react';
import {render} from '@testing-library/react-native';

import Heading from '../heading';
import defaultTheme from '../../theming/default-theme';

describe('Heading', () => {
  it('renders itself correctly', () => {
    const {getByTestId} = render(
      <Heading theme={defaultTheme} testID="simpleHeading">
        This is a heading
      </Heading>,
    );

    const textElement = getByTestId('simpleHeading');

    expect(textElement).toBeDefined();
  });

  it('renders renders the text correctly', () => {
    const {getByText} = render(
      <Heading theme={defaultTheme} testID="simpleHeading">
        This is a heading
      </Heading>,
    );

    const textElement = getByText('This is a heading');

    expect(textElement).toBeDefined();
  });
});
