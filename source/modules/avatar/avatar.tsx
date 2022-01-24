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
  width: 33px; height: 33px;
  justify-content: center;
  align-items: center;
`;
const StyledImage = Styled.Image<IStyledImage>`
  width: 100%; height: 100%;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.white};
  border-radius: 33px;
`;
const StyledMarker = Styled.View<IStyledMarker>`
  position: absolute;
  width: 12px; height: 12px;
  bottom: ${({$offsetBottom}) => $offsetBottom}px;
  right: ${({$offsetRight}) => $offsetRight}px;
  border-radius: 12px;
  overflow: hidden;
`;

// Component
export const Avatar: React.FC<IProps> = ({
  uri,
  onPress,
  markerOffsetRight,
  markerOffsetBottom,
  inversed,
  marker,
}): React.ReactElement => {
  return (
    <StyledWrapper activeOpacity={1} onPress={onPress} testID="avatar-button">
      {uri ? (
        <React.Fragment>
          <StyledImage source={{uri}} testID="avatar-image" />

          {marker ? (
            <StyledMarker
              $offsetRight={markerOffsetRight || -1}
              $offsetBottom={markerOffsetBottom || -1}
              testID="avatar-marker">
              {marker}
            </StyledMarker>
          ) : null}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Icon type="user" color={inversed ? 'white' : 'black'} size={24} />

          {marker ? (
            <StyledMarker
              $offsetRight={markerOffsetRight || 1.5}
              $offsetBottom={markerOffsetBottom || 1.5}
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
