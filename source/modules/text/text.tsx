// Modules
import Styled from 'styled-components/native';

// Types
import {IProps} from './text.types';

// Component
const Text = Styled.Text<IProps>`
  color: ${({theme, inversed, muted}): string => {
    if (muted) {
      return theme.colors.grayFour;
    }

    if (inversed) {
      return theme.colors.white;
    }

    return theme.colors.graySix;
  }};

  font-size: ${({theme, variant}): string => {
    switch (variant) {
      case 'body1': {
        return `${theme.typography.sizes.text.body1}px`;
      }
      case 'body2': {
        return `${theme.typography.sizes.text.body2}px`;
      }
      case 'caption': {
        return `${theme.typography.sizes.text.caption}px`;
      }
      case 'button': {
        return `${theme.typography.sizes.text.button}px`;
      }
      case 'subtitle1': {
        return `${theme.typography.sizes.text.subtitle1}px`;
      }
      case 'subtitle2': {
        return `${theme.typography.sizes.text.subtitle2}px`;
      }
      default: {
        return `${theme.typography.sizes.text.body1}px`;
      }
    }
  }};

  font-family: ${({theme, font = 'primary'}): string => {
    return theme.typography.faces[font];
  }};

  font-weight: ${({weight = 400}): number => {
    if (typeof weight === 'number') {
      return weight;
    }

    switch (weight) {
      case 'regular': {
        return 400;
      }
      case 'semiBold': {
        return 600;
      }
      case 'bold': {
        return 700;
      }
      default: {
        return 400;
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

// Default Props
Text.defaultProps = {
  testID: 'text',
};

// Exports
export default Text;
