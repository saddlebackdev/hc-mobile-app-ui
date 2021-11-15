// Modules
import * as React from 'react';;
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
    chevronDown: require('../../images/chevron-down-black.png'),
    calendar: require('../../images/calendar-black.png'),
    date: require('../../images/calendar-black.png'),
    success: require('../../images/success-black.png'),
    tick: require('../../images/success-black.png'),
    user: require('../../images/user-black.png'),
  },
  muted: {
    chevronDown: require('../../images/chevron-down-muted.png'),
    calendar: require('../../images/calendar-muted.png'),
    date: require('../../images/calendar-muted.png'),
    success: require('../../images/success-muted.png'),
    tick: require('../../images/success-muted.png'),
    user: require('../../images/user-muted.png'),
  },
  white: {
    chevronDown: require('../../images/chevron-down-white.png'),
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
