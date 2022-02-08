// npx jest ./src/modules/accordion/__tests__/accordion.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Text} from 'react-native';

import Accordion from '../accordion';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('Accordion', () => {
  describe('Rendering', () => {
    it('renders correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Accordion title="Accordion 1">
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              obcaecati libero officiis quia et at vero ullam eos qui architecto
              aliquam, voluptas officia quas exercitationem sapiente similique
              aperiam nostrum amet.
            </Text>
          </Accordion>
        </ThemeProvider>,
      );

      const accordion = wrapper.getByTestId('accordion');

      expect(accordion).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders in "open" state correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Accordion title="Accordion 1" isOpen>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              obcaecati libero officiis quia et at vero ullam eos qui architecto
              aliquam, voluptas officia quas exercitationem sapiente similique
              aperiam nostrum amet.
            </Text>
          </Accordion>
        </ThemeProvider>,
      );

      const accordion = wrapper.getByTestId('accordion');

      expect(accordion).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders the title correctly', () => {
      const title = 'Some New Title';

      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Accordion title={title} />
        </ThemeProvider>,
      );

      const titleElem = wrapper.getByTestId('accordion-title');

      expect(titleElem).toBeDefined();

      expect(titleElem.children).toEqual([title]);
    });
  });

  describe('Interactions', () => {
    it('should open the accordion on click', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <Accordion title="Accordion 1" isOpen>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              obcaecati libero officiis quia et at vero ullam eos qui architecto
              aliquam, voluptas officia quas exercitationem sapiente similique
              aperiam nostrum amet.
            </Text>
          </Accordion>
        </ThemeProvider>,
      );

      const button = wrapper.getByTestId('accordion-toggle-btn');

      expect(button).toBeDefined();

      fireEvent.press(button);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
