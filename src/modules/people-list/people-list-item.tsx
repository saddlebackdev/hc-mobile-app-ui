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
const StyleWrapper = Styled.View`
  flex-direction: row;
  padding-bottom: ${minorScale(4)}px;
  padding-top: ${minorScale(4)}px;
  background-color: ${({theme}) => {
    return theme.colors.white;
  }};
`;

const StyleProfilePicCheckboxWrapper = Styled.View`
  flex-direction: row; 
  justify-content: center
`;

const StyleCheckboxWrapper = Styled.View`
  margin-top: ${minorScale(2)}px;
  margin-right: ${minorScale(2)}px;
`;

const StyleUserDetailsWrapper = Styled.View<IProps>`
  padding-left: ${minorScale(2)}px;
  width: ${props => (props.isShowCheckbox === true ? '69%' : '82%')}};

`;

const StyleUserNameIdWrapper = Styled.View`
  flex-direction: row; 
  justify-content: space-between
`;

const StyleOtherDetailWrapper = Styled.View`
  width:100%
`;

const StyleHeadingUserNameWrapper = Styled(Heading)`
  font-size: ${minorScale(3.6)}px;
  width: 80%;
`;

const StyleUserIdTextWrapper = Styled(Text)`
  font-size: ${minorScale(2.8)}px;
  color: ${({theme}) => {
    return theme.colors.grayFour;
  }};
  text-align:right
`;

const StyleUserDescriptionWrapper = Styled(Text)`
  font-size: ${minorScale(2.8)}px;
  color: ${({theme}) => {
    return theme.colors.grayFour;
  }};
  margin-top: ${minorScale(1)}px;
  margin-bottom: ${minorScale(1)}px;
`;

const StyleUserProfilePicWrapper = Styled(Avatar)`
  testID:profile-pic`;

const StyleLinkWrapper = Styled.TouchableOpacity``;

export const PeopleListItem: React.FC<IProps> = ({
  onUserClicked,
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
    const churchEntName: string | undefined =
      churchEntityName !== null ? churchEntityName : '';

    //maritalStatus
    const marStatus: string | undefined =
      maritalStatus !== null ? maritalStatus : '';

    //gender
    const strGender: string | undefined =
      gender === null
        ? ''
        : String(gender).toLowerCase() === 'f'
        ? 'Female'
        : 'Male';

    if (strGender !== undefined && strGender.length > 0) {
      arrOtherDet.push(strGender);
    }

    if (marStatus !== undefined && marStatus.length > 0) {
      arrOtherDet.push(marStatus);
    }

    if (churchEntName !== undefined && churchEntName.length > 0) {
      arrOtherDet.push(churchEntName);
    }

    return arrOtherDet;
  };

  const renderUserPic = () => {
    return (
      <StyleUserProfilePicWrapper
        uri={profilePic!}
        initials={getUserNameFirstLastCharacter()}
        size={40}
        radius="small"
        // testID="profile-pic"
      />
    );
  };

  const getUserNameFirstLastCharacter = () => {
    const arrName = name?.split(' ');
    if (arrName?.length === 2) {
      return `${arrName[0].charAt(0)}${arrName[1].charAt(0)}`;
    }
    return `${arrName![0].charAt(0)}${arrName![0].charAt(1)}`;
  };

  const renderCheckBoxOrPic = () => {
    if (isShowCheckbox && isShowCheckbox === true) {
      return (
        <StyleProfilePicCheckboxWrapper>
          <StyleCheckboxWrapper>
            <Checkbox onPress={onCheckboxPress} isChecked={isChecked!} />
          </StyleCheckboxWrapper>
          {renderUserPic()}
        </StyleProfilePicCheckboxWrapper>
      );
    }
    return renderUserPic();
  };

  return (
    <Swipeable
      leftButtonWidth={minorScale(17)}
      leftButtons={leftButtons}
      rightButtonWidth={minorScale(17)}
      rightButtons={rightButtons}
      leftActionActivationDistance={0}>
      <StyleLinkWrapper testID="link-wrapper" onPress={() => onUserClicked?.()}>
        <StyleWrapper testID="main-wrapper">
          {/* User Profile Image and checkbox */}
          {renderCheckBoxOrPic()}
          {/* End User Profile Image and checkbox */}
          {/* user details View */}
          <StyleUserDetailsWrapper isShowCheckbox={isShowCheckbox}>
            {/* user name and User id */}
            <StyleUserNameIdWrapper>
              {/* user name */}
              <StyleHeadingUserNameWrapper variant="h3">{`${name}`}</StyleHeadingUserNameWrapper>
              {/* User Id */}
              <StyleUserIdTextWrapper testID="user-id">
                ID:{`${userId}`}
              </StyleUserIdTextWrapper>
            </StyleUserNameIdWrapper>
            {/* End user name and User id */}

            {/* footer element and other user details */}
            <StyleOtherDetailWrapper>
              {/* user other information like gender,maritalStatus and churchEntityName */}
              <StyleUserDescriptionWrapper>
                {`${getOtherDetailsString().join(' | ')}`}
              </StyleUserDescriptionWrapper>
              {/* footer element */}
              {footerElement}
            </StyleOtherDetailWrapper>
            {/* End footer element and other user details */}
          </StyleUserDetailsWrapper>
        </StyleWrapper>
      </StyleLinkWrapper>
    </Swipeable>
  );
};

export default PeopleListItem;
