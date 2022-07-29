// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {IStyledImage, IProps} from './icon.types';

const StyledImage = Styled.Image<IStyledImage>`
  width: ${({$width}) => $width}px;
  height: ${({$height}) => $height}px;
`;

// Icon Files
const IconFiles = {
  black: {
    expand: require('../../images/expand-black.png'),
    shrink: require('../../images/shrink-black.png'),
    chevronUp: require('../../images/chevron-up-black.png'),
    chevronLeft: require('../../images/chevron-left-black.png'),
    chevronRight: require('../../images/chevron-right-black.png'),
    chevronDown: require('../../images/chevron-down-black.png'),
    closeCircle: require('../../images/close-x-complex-black.png'),
    close: require('../../images/close-light-black.png'),
    calendar: require('../../images/calendar-black.png'),
    date: require('../../images/calendar-black.png'),
    success: require('../../images/success-black.png'),
    tick: require('../../images/success-black.png'),
    user: require('../../images/user-black.png'),
  },
  muted: {
    expand: require('../../images/expand-muted.png'),
    shrink: require('../../images/shrink-muted.png'),
    chevronUp: require('../../images/chevron-up-muted.png'),
    chevronLeft: require('../../images/chevron-left-muted.png'),
    chevronRight: require('../../images/chevron-right-muted.png'),
    chevronDown: require('../../images/chevron-down-muted.png'),
    closeCircle: require('../../images/close-x-complex-muted.png'),
    close: require('../../images/close-light-muted.png'),
    calendar: require('../../images/calendar-muted.png'),
    date: require('../../images/calendar-muted.png'),
    success: require('../../images/success-muted.png'),
    tick: require('../../images/success-muted.png'),
    user: require('../../images/user-muted.png'),
  },
  white: {
    expand: require('../../images/expand-white.png'),
    shrink: require('../../images/shrink-white.png'),
    chevronUp: require('../../images/chevron-up-white.png'),
    chevronLeft: require('../../images/chevron-left-white.png'),
    chevronRight: require('../../images/chevron-right-white.png'),
    chevronDown: require('../../images/chevron-down-white.png'),
    closeCircle: require('../../images/close-x-complex-white.png'),
    close: require('../../images/close-light-white.png'),
    calendar: require('../../images/calendar-white.png'),
    date: require('../../images/calendar-white.png'),
    success: require('../../images/success-white.png'),
    tick: require('../../images/success-white.png'),
    user: require('../../images/user-white.png'),
  },
};

// Component
export const Icon: React.FC<IProps> = React.memo(
  ({color = 'black', size = 24, type}): React.ReactElement => {
    return (
      <StyledImage
        source={IconFiles[color][type]}
        $width={size}
        $height={size}
      />
    );
  },
);

// Properties
Icon.displayName = 'Icon';

// Exports
export default Icon;
