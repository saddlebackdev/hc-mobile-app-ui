import * as React from 'react';
import Swipeable from 'react-native-swipeable';
import {IProps} from './people-list-item.types';
import Styled from 'styled-components/native';

import {majorScale, minorScale} from '../scales';
import Text from '../text/text';
import Avatar from '../avatar/avatar';
import Checkbox from '../checkbox/checkbox';
import Heading from '../heading/heading';

// Wrapper
const StyledWrapper = Styled.View`
  flex-direction: row;
  padding-vertical: ${majorScale(1)}px;
  background-color: ${({theme}) => theme.colors.white};
  padding-left: ${majorScale(2)}px;
  padding-right: ${majorScale(1)}px;
`;

const StyledProfilePicCheckboxWrapper = Styled.View`
  flex-direction: row; 
  justify-content: center;
`;

const StyledCheckboxWrapper = Styled.View`
  margin-top: ${minorScale(2)}px;
  margin-right: ${majorScale(1)}px;
`;

const StyledUserDetailsWrapper = Styled.View`
  padding-left: ${majorScale(1)}px;
  flex : 1;
`;

const StyledUserNameIdWrapper = Styled.View`
  flex-direction: row; 
  justify-content: space-between;
`;

const StyledHeadingUserNameWrapper = Styled(Heading)`
`;

const StyledUserIdTextWrapper = Styled(Text)`
  flex : 1;
`;

const StyledLinkWrapper = Styled.TouchableOpacity`
  align-self: center;
  width: 100%;
`;

const StyledRedDotWrapper = Styled.View`
  background-color: red;
  width: ${minorScale(2)}px;
  height: ${minorScale(2)}px;
  border-radius: ${minorScale(1)}px;
  margin-top: ${minorScale(1)}px;
  margin-left: ${minorScale(1)}px;
`;

const StyledNameMarkerWrapper = Styled.View`
  flex-direction: row;
  flex : 1;
`;

export const PeopleListItem: React.FC<IProps> = ({
  onPress,
  name,
  profilePic,
  userId,
  footerElement,
  isShowCheckbox,
  onCheckboxPress,
  isChecked,
  leftButtons,
  rightButtons,
  redMarker,
  middleElement,
  onRef,
  showIdPrefix = true,
  onSwipeStart,
}): React.ReactElement => {
  const getUserNameFirstLastCharacter = () => {
    const arrName = name?.split(' ');
    if (arrName?.length === 2) {
      return `${arrName[0].charAt(0)}${arrName[1].charAt(0)}`;
    }
    return `${arrName![0].charAt(0)}${arrName![0].charAt(1)}`;
  };

  return (
    <Swipeable
      onSwipeStart={onSwipeStart}
      onRef={onRef}
      leftButtonWidth={minorScale(17)}
      leftButtons={leftButtons}
      rightButtonWidth={minorScale(17)}
      rightButtons={rightButtons}
      leftActionActivationDistance={0}>
      <StyledLinkWrapper testID="link-wrapper" onPress={onPress}>
        <StyledWrapper testID="main-wrapper">
          <StyledProfilePicCheckboxWrapper>
            {isShowCheckbox && (
              <StyledCheckboxWrapper>
                <Checkbox onPress={onCheckboxPress} isChecked={isChecked!} />
              </StyledCheckboxWrapper>
            )}
            <Avatar
              uri={profilePic!}
              initials={getUserNameFirstLastCharacter()}
              size={40}
              radius="small"
            />
          </StyledProfilePicCheckboxWrapper>
          <StyledUserDetailsWrapper>
            <StyledUserNameIdWrapper>
              <StyledNameMarkerWrapper>
                <StyledHeadingUserNameWrapper variant="h4">{`${name}`}</StyledHeadingUserNameWrapper>
                {redMarker === true && <StyledRedDotWrapper />}
              </StyledNameMarkerWrapper>
              {userId !== undefined && userId.toString().length > 0 && (
                <StyledUserIdTextWrapper
                  variant="subtitle2"
                  muted
                  alignment="right"
                  testID="user-id">
                  {showIdPrefix ? `ID:${userId}` : userId}
                </StyledUserIdTextWrapper>
              )}
            </StyledUserNameIdWrapper>
            {middleElement}
            {footerElement}
          </StyledUserDetailsWrapper>
        </StyledWrapper>
      </StyledLinkWrapper>
    </Swipeable>
  );
};

export default PeopleListItem;
