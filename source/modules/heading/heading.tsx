// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {IProps} from './heading.types';

// Styles
const Heading = Styled.Text<IProps>`
  color: ${({theme}) => theme.colors.graySix};

  font-size: ${({theme, variant = 'h1'}): string => {
    return `${theme.typography?.sizes?.headings[variant]}px`;
  }};

  font-weight: ${({variant}): string => {
    switch (variant) {
      case 'h1': {
        return '400';
      }
      case 'h2': {
        return '400';
      }
      case 'h3': {
        return 'bold';
      }
      case 'h4': {
        return 'bold';
      }
      case 'h5': {
        return 'bold';
      }
      default: {
        return '400';
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
