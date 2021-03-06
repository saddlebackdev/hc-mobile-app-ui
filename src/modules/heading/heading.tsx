// Modules
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

  font-weight: ${({variant = 'h1'}): string => {
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

  font-family: ${({theme, variant, font = 'primary'}) => {
    if (!variant) {
      return theme.typography.faces[`${font}Bold`];
    }

    switch (variant) {
      case 'h1': {
        return theme.typography.faces[`${font}Bold`];
      }
      case 'h2': {
        return theme.typography.faces[`${font}Bold`];
      }
      case 'h3': {
        return theme.typography.faces[`${font}Bold`];
      }
      case 'h4': {
        return theme.typography.faces[`${font}Bold`];
      }
      case 'h5': {
        return theme.typography.faces[`${font}SemiBold`];
      }
      case 'h6': {
        return theme.typography.faces[`${font}SemiBold`];
      }
      default: {
        return theme.typography.faces[`${font}Bold`];
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

// Defaults
Heading.defaultProps = {
  testID: 'heading',
};

// Exports
export default Heading;
