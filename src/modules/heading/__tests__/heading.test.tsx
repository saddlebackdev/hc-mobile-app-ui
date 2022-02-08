// npx jest ./src/modules/heading/__tests__/heading.test.ts

import * as React from 'react';
import {render} from '@testing-library/react-native';

import Heading from '../heading';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('Heading', () => {
  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Heading>This is a heading</Heading>
        </ThemeProvider>,
      );

      const heading = wrapper.getByTestId('heading');

      expect(heading).toBeDefined();
      expect(heading.children).toEqual(['This is a heading']);

      expect(wrapper).toMatchSnapshot();
    });

    describe('Variants', () => {
      it('h1: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Heading variant="h1">This is a heading</Heading>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('h2: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Heading variant="h2">This is a heading</Heading>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('h3: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Heading variant="h3">This is a heading</Heading>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('h4: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Heading variant="h4">This is a heading</Heading>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('h5: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Heading variant="h5">This is a heading</Heading>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('h6: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Heading variant="h6">This is a heading</Heading>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('inversed: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Heading inversed>This is a heading</Heading>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('alignment-left: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Heading alignment="left">This is a heading</Heading>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('alignment-center: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Heading alignment="center">This is a heading</Heading>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });

      it('alignment-right: should match snapshot', () => {
        const wrapper = render(
          <ThemeProvider theme={defaultTheme}>
            <Heading alignment="right">This is a heading</Heading>
          </ThemeProvider>,
        );

        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
