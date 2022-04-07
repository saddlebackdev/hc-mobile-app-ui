// Modules
import Styled from 'styled-components/native';

// Types
import {IProps} from './text.types';

// Component
const Text = Styled.Text<IProps>`
  color: ${({theme, color = 'graySix', inversed, muted}): string => {
    if (muted) {
      return theme.colors.grayFour;
    }

    if (inversed) {
      return theme.colors.white;
    }

    return theme.colors?.[color];
  }};

  font-size: ${({theme, small, variant}): string => {
    if (small) {
      return `${theme.typography.sizes.small}px`;
    }

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

  font-weight: ${({weight = 'regular'}): string => {
    switch (weight) {
      case 'light': {
        return '300';
      }
      case 'regular': {
        return '400';
      }
      case 'semiBold': {
        return '600';
      }
      case 'bold': {
        return '700';
      }
      default: {
        return '400';
      }
    }
  }};

  font-family: ${({theme, weight, font = 'primary'}): string => {
    if (!weight) {
      return theme.typography.faces[`${font}Regular`];
    }

    switch (weight) {
      case 'light': {
        return theme.typography.faces[`${font}Light`];
      }
      case 'regular': {
        return theme.typography.faces[`${font}Regular`];
      }
      case 'semiBold': {
        return theme.typography.faces[`${font}SemiBold`];
      }
      case 'bold': {
        return theme.typography.faces[`${font}Bold`];
      }
      default: {
        return theme.typography.faces[`${font}Regular`];
      }
    }
  }};

  font-style: ${({italic}) => {
    return italic ? 'italic' : 'normal';
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
