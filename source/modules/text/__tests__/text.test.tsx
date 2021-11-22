// npx jest ./source/modules/text/__tests__/text.test.ts

import * as React from 'react';
import {render} from '@testing-library/react-native';

import Text from '../text';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('Text', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Text>Paragraph goes here</Text>
        </ThemeProvider>,
      );

      const text = wrapper.getByTestId('text');

      expect(text).toBeDefined();
      expect(text.children).toEqual(['Paragraph goes here']);

      expect(wrapper).toMatchSnapshot();
    });

    describe('Variants', () => {
      it('isMuted: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Text isMuted>Paragraph goes here</Text>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('isCaption: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Text isCaption>Paragraph goes here</Text>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('isSubtitle: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Text isSubtitle>Paragraph goes here</Text>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('inversed: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Text inversed>Paragraph goes here</Text>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('alignment-left: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Text alignment="left">Paragraph goes here</Text>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('alignment-center: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Text alignment="center">Paragraph goes here</Text>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('alignment-right: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Text alignment="right">Paragraph goes here</Text>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
