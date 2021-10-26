// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {IProps} from './heading.types';

// Styles
const Heading = Styled.Text<IProps>`
  color: ${({theme, inversed}) => {
    if (inversed) {
      return theme.colors.white;
    }

    return theme.colors.graySix;
  }};

  font-size: ${({theme, variant = 'h1'}): string => {
    return `${theme.typography?.sizes?.headings[variant]}px`;
  }};

  font-weight: ${({variant}): string => {
    switch (variant) {
      case 'h1': {
        return '700';
      }
      case 'h2': {
        return '700';
      }
      case 'h3': {
        return '700';
      }
      case 'h4': {
        return '700';
      }
      case 'h5': {
        return '600';
      }
      case 'h6': {
        return '600';
      }
      default: {
        return '700';
      }
    }
  }};

  text-align: ${({alignment}): string => {
    if (alignment === 'right') {
      return 'right';
    }

    if (alignment === 'center') {
      return 'center';
    }

    return 'left';
  }};
`;

// Exports
export default React.memo(Heading);
