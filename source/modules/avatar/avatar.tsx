// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {IProps, IStyledImage, IStyledWrapper} from './avatar.types';

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

// Component
export const Avatar: React.FC<IProps> = ({
  uri,
  onPress,
}): React.ReactElement => {
  return (
    <StyledWrapper activeOpacity={1} onPress={onPress} testID="avatar-button">
      {uri ? (
        <StyledImage source={{uri}} testID="avatar-image" />
      ) : (
        <Icon type="user" color="white" size={24} />
      )}
    </StyledWrapper>
  );
};

// Exports
export default Avatar;
