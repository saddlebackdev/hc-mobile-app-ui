// Modules
import Styled from 'styled-components/native';

// Types
import {IProps} from './text.types';

// Component
const Text = Styled.Text<IProps>`
  color: ${({theme, inversed, isMuted, isCaption}) => {
    if (isCaption || isMuted) {
      return theme.colors.grayFour;
    }

    if (inversed) {
      return theme.colors.white;
    }

    return theme.colors.graySix;
  }};

  font-size: ${({theme, isCaption, isSubtitle}): string | undefined => {
    if (isCaption || isSubtitle) {
      return `${theme.typography.sizes.small}px`;
    }

    return `${theme.typography.sizes.regular}px`;
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
