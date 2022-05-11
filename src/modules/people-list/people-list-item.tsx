import React from 'react';
import Swipeable from 'react-native-swipeable';
import {IProps} from './people-list-item.type';
import Styled from 'styled-components/native';

import {minorScale} from '../scales';
import Text from '../text/text';
import Avatar from '../avatar/avatar';
import Checkbox from '../checkbox/checkbox';
import Heading from '../heading/heading';

// Wrapper
const StyledWrapper = Styled.View`
  flex-direction: row;
  padding-bottom: ${minorScale(4)}px;
  padding-top: ${minorScale(4)}px;
  background-color: ${({theme}) => theme.colors.white};
`;

const StyledProfilePicCheckboxWrapper = Styled.View`
  flex-direction: row; 
  justify-content: center
`;

const StyledCheckboxWrapper = Styled.View`
  margin-top: ${minorScale(2)}px;
  margin-right: ${minorScale(2)}px;
`;

const StyledUserDetailsWrapper = Styled.View<IProps>`
  padding-left: ${minorScale(2)}px;
  width: ${props => (props.isShowCheckbox === true ? '69%' : '82%')}};

`;

const StyledUserNameIdWrapper = Styled.View`
  flex-direction: row; 
  justify-content: space-between
`;

const StyledOtherDetailWrapper = Styled.View`
  width:100%
`;

const StyledHeadingUserNameWrapper = Styled(Heading)`
  font-size: ${({theme, variant = 'h3'}): string =>
    `${theme.typography?.sizes?.headings[variant]}px`};
  width: 80%;
`;

const StyledUserIdTextWrapper = Styled(Text)`
  font-size: ${({theme, variant = 'subtitle2'}): string =>
    `${theme.typography?.sizes?.text[variant]}px`};
  color: ${({theme}) => theme.colors.grayFour};
  text-align:right
`;

const StyledUserDescriptionWrapper = Styled(Text)`
  font-size: ${({theme, variant = 'subtitle2'}): string =>
    `${theme.typography?.sizes?.text[variant]}px`};
  color: ${({theme}) => theme.colors.grayFour};
  margin-top: ${minorScale(1)}px;
  margin-bottom: ${minorScale(1)}px;
`;

const StyleLinkWrapper = Styled.TouchableOpacity``;

export const PeopleListItem: React.FC<IProps> = ({
  onPress,
  name,
  maritalStatus,
  gender,
  churchEntityName,
  profilePic,
  userId,
  footerElement,
  isShowCheckbox,
  onCheckboxPress,
  isChecked,
  leftButtons,
  rightButtons,
}): React.ReactElement => {
  /**
   * get other data like maritalStatus,gender,churchEntName
   * add data to array if data is not null and then create string using join
   * @returns
   */
  const getOtherDetailsString = () => {
    const arrOtherDet: string[] = [];
    //churchEntityName
    const churchEntName: string | undefined = churchEntityName || '';

    //maritalStatus
    const marStatus: string | undefined = maritalStatus || '';

    //gender
    const strGender: string | undefined =
      gender === null
        ? ''
        : String(gender).toLowerCase() === 'f'
        ? 'Female'
        : 'Male';

    if (strGender?.length > 0) {
      arrOtherDet.push(strGender);
    }

    if (marStatus?.length > 0) {
      arrOtherDet.push(marStatus);
    }

    if (churchEntName?.length > 0) {
      arrOtherDet.push(churchEntName);
    }

    return arrOtherDet;
  };

  const getUserNameFirstLastCharacter = () => {
    const arrName = name?.split(' ');
    if (arrName?.length === 2) {
      return `${arrName[0].charAt(0)}${arrName[1].charAt(0)}`;
    }
    return `${arrName![0].charAt(0)}${arrName![0].charAt(1)}`;
  };

  const renderCheckBoxAndPic = () => {
    if (isShowCheckbox && isShowCheckbox === true) {
      return (
        <StyledProfilePicCheckboxWrapper>
          <StyledCheckboxWrapper>
            <Checkbox onPress={onCheckboxPress} isChecked={isChecked!} />
          </StyledCheckboxWrapper>
          <Avatar
            uri={profilePic!}
            initials={getUserNameFirstLastCharacter()}
            size={40}
            radius="small"
          />
        </StyledProfilePicCheckboxWrapper>
      );
    }
  };

  const renderProfilePic = () => {
    if (isShowCheckbox === undefined || !isShowCheckbox) {
      return (
        <Avatar
          uri={profilePic!}
          initials={getUserNameFirstLastCharacter()}
          size={40}
          radius="small"
        />
      );
    }
  };

  return (
    <Swipeable
      leftButtonWidth={minorScale(17)}
      leftButtons={leftButtons}
      rightButtonWidth={minorScale(17)}
      rightButtons={rightButtons}
      leftActionActivationDistance={0}>
      <StyleLinkWrapper testID="link-wrapper" onPress={onPress}>
        <StyledWrapper testID="main-wrapper">
          {renderCheckBoxAndPic()}
          {renderProfilePic()}
          <StyledUserDetailsWrapper isShowCheckbox={isShowCheckbox}>
            <StyledUserNameIdWrapper>
              <StyledHeadingUserNameWrapper variant="h3">{`${name}`}</StyledHeadingUserNameWrapper>
              <StyledUserIdTextWrapper testID="user-id">
                ID:{`${userId}`}
              </StyledUserIdTextWrapper>
            </StyledUserNameIdWrapper>
            <StyledOtherDetailWrapper>
              <StyledUserDescriptionWrapper>
                {`${getOtherDetailsString().join(' | ')}`}
              </StyledUserDescriptionWrapper>
              {footerElement}
            </StyledOtherDetailWrapper>
          </StyledUserDetailsWrapper>
        </StyledWrapper>
      </StyleLinkWrapper>
    </Swipeable>
  );
};

export default PeopleListItem;
