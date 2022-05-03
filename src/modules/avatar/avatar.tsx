// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {
  IProps,
  IStyledImage,
  IStyledInitialsWrapper,
  IStyledInitialsText,
  IStyledWrapper,
  IStyledMarker,
} from './avatar.types';

// Shared
import Icon from '../icon/icon';
import Text from '../text/text';

// Styles
const StyledWrapper = Styled.TouchableOpacity<IStyledWrapper>`
  overflow: hidden;
  width: ${({$size}) => $size}px;
  height: ${({$size}) => $size}px;
  justify-content: center;
  align-items: center;
`;
const StyledImage = Styled.Image<IStyledImage>`
  width: 100%; height: 100%;
  border-color: ${({theme}) => theme.colors.white};
  border-radius: ${({$borderRadius}) => $borderRadius}px;
  border-width: 1px;
`;
const StyledMarker = Styled.View<IStyledMarker>`
  position: absolute;
  bottom: ${({$offsetBottom}) => $offsetBottom}px;
  right: ${({$offsetRight}) => $offsetRight}px;
  border-radius: 12px;
  overflow: hidden;
`;
const StyledInitialsWrapper = Styled.View<IStyledInitialsWrapper>`
  align-items: center;
  justify-content: center;
  width: 100%; height: 100%;

  background: ${({theme}) => theme.colors.grayTwo};
  border-color: ${({theme}) => theme.colors.grayThree};
  border-radius: ${({$borderRadius}) => $borderRadius}px;
  border-width: 1px;
`;
const StyledInitialsText = Styled(Text)<IStyledInitialsText>`
  font-size: ${({$size}) => $size}px;
  opacity: 0.75;
`;

// Component
export const Avatar: React.FC<IProps> = ({
  uri,
  onPress,
  markerOffsetRight = 0,
  markerOffsetBottom = 0,
  inversed = false,
  size = 32,
  radius = 'full',
  initials,
  marker,
}): React.ReactElement => {
  let initialsFontSize = 12;

  if (size === 'tile') {
    size = 36;
    initialsFontSize = 14;
  }

  if (size === 'profile') {
    size = 100;
    initialsFontSize = 26;
  }

  let borderRadius = 0;

  if (radius === 'full') {
    borderRadius = size;
  }

  if (radius === 'small') {
    borderRadius = 10;
  }

  // Render Marker
  const renderMarker = () => {
    if (!marker) {
      return null;
    }

    return (
      <StyledMarker
        $offsetRight={markerOffsetRight}
        $offsetBottom={markerOffsetBottom}
        testID="avatar-marker">
        {marker}
      </StyledMarker>
    );
  };

  const wrapperProps = {
    $size: size,
    activeOpacity: 0.75,
    testID: 'avatar-button',
    onPress,
  };

  // Placeholder with Icon
  if (!initials && !uri) {
    return (
      <StyledWrapper {...wrapperProps}>
        <Icon type="user" color={inversed ? 'white' : 'black'} size={size} />

        {renderMarker()}
      </StyledWrapper>
    );
  }

  // Placeholder with Initials
  if (initials && !uri) {
    return (
      <StyledWrapper {...wrapperProps}>
        <StyledInitialsWrapper $borderRadius={borderRadius}>
          <StyledInitialsText $size={initialsFontSize}>
            {initials.toUpperCase()}
          </StyledInitialsText>
        </StyledInitialsWrapper>

        {renderMarker()}
      </StyledWrapper>
    );
  }

  // Avatar with Image
  return (
    <StyledWrapper {...wrapperProps}>
      <StyledImage
        $borderRadius={borderRadius}
        testID="avatar-image"
        source={{uri}}
      />

      {renderMarker()}
    </StyledWrapper>
  );
};

// Exports
export default Avatar;
