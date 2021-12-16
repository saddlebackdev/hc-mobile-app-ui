// Modules
import Styled from 'styled-components/native';

// Types
import {IProps} from './text.types';

// Component
const Text = Styled.Text<IProps>`
  color: ${({theme, inversed, muted, caption}) => {
    if (caption || muted) {
      return theme.colors.grayFour;
    }

    if (inversed) {
      return theme.colors.white;
    }

    return theme.colors.graySix;
  }};

  font-size: ${({theme, caption, subtitle}): string | undefined => {
    if (caption || subtitle) {
      return `${theme.typography.sizes.small}px`;
    }

    return `${theme.typography.sizes.regular}px`;
  }};

  font-family: ${({theme, font = 'primary'}) => {
    return theme.typography.faces[font];
  }};

  font-weight: ${({weight = '400'}) => weight};

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
