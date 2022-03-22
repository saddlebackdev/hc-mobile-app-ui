// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {
  IProps,
  IStyledImage,
  IStyledWrapper,
  IStyledMarker,
} from './avatar.types';

// Shared
import Icon from '../icon/icon';

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

// Component
export const Avatar: React.FC<IProps> = ({
  uri,
  onPress,
  markerOffsetRight = 0,
  markerOffsetBottom = 0,
  inversed = false,
  size = 32,
  marker,
}): React.ReactElement => {
  return (
    <StyledWrapper
      $size={size}
      activeOpacity={0.75}
      onPress={onPress}
      testID="avatar-button">
      {uri ? (
        <React.Fragment>
          <StyledImage
            $borderRadius={size}
            testID="avatar-image"
            source={{uri}}
          />

          {marker ? (
            <StyledMarker
              $offsetRight={markerOffsetRight}
              $offsetBottom={markerOffsetBottom}
              testID="avatar-marker">
              {marker}
            </StyledMarker>
          ) : null}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Icon type="user" color={inversed ? 'white' : 'black'} size={size} />

          {marker ? (
            <StyledMarker
              $offsetRight={markerOffsetRight}
              $offsetBottom={markerOffsetBottom}
              testID="avatar-marker">
              {marker}
            </StyledMarker>
          ) : null}
        </React.Fragment>
      )}
    </StyledWrapper>
  );
};

// Exports
export default Avatar;