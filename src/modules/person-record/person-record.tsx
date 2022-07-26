// Modules
import * as React from 'react';
import Styled from 'styled-components/native';
import Moment from 'moment';

// Types
import {ITab, IProps} from './person-record.types';

// Shared
import Text from '../text/text';
import Avatar from '../avatar/avatar';
import PeopleTabs from '../people-tabs/people-tabs';
import CoreMilestones from '../core-milestone/core-milestone';
import LinearGradient from '../linear-gradient/linear-gradient-view';
import {majorScale} from '../scales';

// Styles

const StyledScrollView = Styled.ScrollView`
  flex: 1;
`;
const StyledStripe = Styled.View`
  width: 100%;
  background: rgba(255, 255, 255, 0.25);
  padding-horizontal: ${majorScale(2)}px;
  padding-vertical: ${majorScale(1)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const StyledTimespan = {
  Wrapper: Styled.View``,
  Label: Styled(Text)`
    margin-bottom: -2px;
  `,
  Value: Styled(Text)``,
};
const StyledAvatarWrapper = Styled.View`
  align-items: center;
  justify-content: center;
  width: 108px; height: 108px;
  background: ${({theme}) => theme.colors.grayThree};
  border-color: ${({theme}) => theme.colors.white};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
  border-radius: 12px;
  border-width: 4px;
`;
const StyledPersonDetails = {
  Wrapper: Styled.View`
    width: 100%;
    flex-direction: row;
    padding: ${majorScale(2)}px;
  `,
  Left: Styled.View``,
  Right: Styled.View`
    padding-left: ${majorScale()}px;
    justify-content: space-between;
    flex-direction: column;
  `,
  Upper: Styled.View`
    flex: 1;
    justify-content: flex-start;
    flex-direction: column;
  `,
  Lower: Styled.View`
    flex: 1;
    justify-content: flex-end;
    flex-direction: column;
  `,
  Row: Styled.View``,
};
const StyledTabsWrapper = Styled.View`
  padding-top: ${majorScale(1)}px;
  padding-horizontal: ${majorScale(2)}px;
  padding-bottom: ${majorScale(2)}px;
`;
const StyledTabContentWrapper = Styled.View``;

// Component
export const PersonRecord: React.FC<IProps> = ({
  person,
  milestones,
  preSelectedTabValue,
  tabs = [],
}): React.ReactElement => {
  // State
  // prettier-ignore
  const [selectedTab, setSelectedTab] = React.useState<any>(null);

  // On Tab Change
  const onTabChange = (tab: ITab): void => {
    setSelectedTab(tab);
  };

  React.useEffect(() => {
    if (!tabs.length) {
      return;
    }

    const selectedTabValue = preSelectedTabValue
      ? tabs.find(tab => tab.value === preSelectedTabValue)
      : tabs[0];

    setSelectedTab(selectedTabValue);
  }, [tabs]);

  let backgroundGradient = ['#56C4C4', '#56C4C4'];
  if (person?.deceasedDate === null) {
    if (person.isAdult === true) {
      if (person.gender === 'M') {
        backgroundGradient = ['#3A8E5D', '#7EAC61'];
      }
      if (person.gender === 'F') {
        backgroundGradient = ['#0290B7', '#5CA9B5'];
      }
    } else if (person.isStudent === true) {
      backgroundGradient = ['#CB6342', '#F7D39E'];
    } else if (person.isChild === true) {
      backgroundGradient = ['#5AC9F5', '#1C93C4'];
    }
  }

  let bgGradientColors = ['#329594', '#32959490'];
  if (person.isAdult === true) {
    if (person.gender === 'M') {
      bgGradientColors = ['#7EAC61', '#7EAC6190'];
    }
    if (person.gender === 'F') {
      bgGradientColors = ['#5CA9B5', '#5CA9B590'];
    }
  } else if (person.isStudent === true) {
    bgGradientColors = ['#F7D39E', '#F7D39E90'];
  } else if (person.isChild === true) {
    bgGradientColors = ['#5AC9F5', '#5AC9F590'];
  }

  const humanizeDate = (date: string | null): string => {
    const year = Moment.duration(Moment(Moment.now()).diff(date)).years();
    const month = Moment.duration(Moment(Moment.now()).diff(date)).months();
    const day = Moment.duration(Moment(Moment.now()).diff(date)).days();
    const humanDate =
      year > 0
        ? `${year} ${year > 1 ? 'years' : 'year'}`
        : month > 0
        ? `${month} ${month > 1 ? 'months' : 'month'}`
        : `${day} ${day > 1 ? 'days' : 'day'}`;
    return humanDate || date || 'N/A';
  };
  const getUserNameFirstLastCharacter = () => {
    const arrName = person?.fullName?.split(' ');
    if (arrName?.length === 2) {
      return `${arrName[0].charAt(0)}${arrName[1].charAt(0)}`;
    }
    return `${arrName![0].charAt(0)}${arrName![0].charAt(1)}`;
  };
  const getPersonOtherDetails = () => {
    const arrOtherDet: any[] = [];
    const churchEntName = person.churchEntityName;
    const marStatus = person.maritalStatus !== null ? person.maritalStatus : '';
    const gender: string =
      person.gender === null
        ? ''
        : String(person.gender).toLowerCase() === 'f'
        ? 'Female'
        : 'Male';

    if (gender.length > 0) {
      arrOtherDet.push(gender);
    }

    if (marStatus.length > 0) {
      arrOtherDet.push(marStatus);
    }

    arrOtherDet.push(churchEntName === 'Unknown' ? '' : churchEntName);
    return arrOtherDet.join(' | ');
  };
  const renderPrefersContactDisplayTitle = () => {
    if (
      person.contactPreferences &&
      person.contactPreferences !== null &&
      person.contactPreferences.doNotContact
    ) {
      return '(Do Not Contact This Individual)';
    }

    if (
      person.contactPreferences &&
      person.contactPreferences !== null &&
      person.contactPreferences.preferredMethod &&
      person.contactPreferences.preferredMethod === 'phone'
    ) {
      return '(prefers phone)';
    }
    return '(prefers emails)';
  };
  const getPhoneNumber = () => {
    let strNumber = 'N/A';
    if (
      person?.phones &&
      Array.isArray(person.phones) &&
      person.phones.length > 0
    ) {
      const filterNumber = person.phones.filter(
        (item: any) => item.isPrimary === true,
      );
      if (filterNumber.length > 0) {
        strNumber =
          filterNumber[0].displayPhoneNumber &&
          filterNumber[0].displayPhoneNumber !== null
            ? filterNumber[0].displayPhoneNumber
            : 'N/A';
      }
    }
    return strNumber;
  };
  const renderPrefersContactDisplay = () => {
    if (
      person.contactPreferences &&
      person.contactPreferences !== null &&
      person.contactPreferences.doNotContact
    ) {
      return '';
    }

    if (
      person.contactPreferences &&
      person.contactPreferences !== null &&
      person.contactPreferences.preferredMethod &&
      person.contactPreferences.preferredMethod === 'phone'
    ) {
      return getPhoneNumber();
    }
    return person && Array.isArray(person.emails) && person.emails?.length > 0
      ? person.emails[0]?.email
      : '';
  };

  return (
    <>
      {/* Contact Options */}
      <StyledScrollView
        alwaysBounceVertical={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <LinearGradient
          radius={0}
          horizontal
          // eslint-disable-next-line react-native/no-inline-styles
          viewStyle={{width: '100%'}}
          gradientColors={[
            {offset: 0, color: bgGradientColors[0]},
            {offset: 1, color: bgGradientColors[1]},
          ]}>
          {/* Stripe */}
          <StyledStripe>
            {/* Milestones */}
            <CoreMilestones
              isWhite
              hasSignedMembershipAgreement={
                milestones?.hasSignedMembershipAgreement
              }
              hasAttendedClass101={milestones?.hasAttendedClass101}
              hasAttendedClass201={milestones?.hasAttendedClass201}
              hasAttendedClass301={milestones?.hasAttendedClass301}
              hasAttendedClass401={milestones?.hasAttendedClass401}
              hasSignedMaturityCovenant={milestones?.hasSignedMaturityCovenant}
              hasSignedMinistryCovenant={milestones?.hasSignedMinistryCovenant}
              hasSignedMissionCovenant={milestones?.hasSignedMissionCovenant}
              hasAcceptedChrist={milestones?.hasAcceptedChrist}
              isBaptised={milestones?.isBaptised}
              isInSmallGroup={milestones?.isInSmallGroup}
              isInMinistry={milestones?.isInMinistry}
              isActiveInMissions={milestones?.isActiveInMissions}
              isAdult={person?.isAdult}
              gender={person?.gender}
              isStudent={person?.isStudent}
              isChild={person?.isChild}
            />

            {/* Timespans */}
            <StyledTimespan.Wrapper>
              <StyledTimespan.Label inversed variant="caption">
                At Saddleback
              </StyledTimespan.Label>
              <StyledTimespan.Value inversed variant="caption" weight="bold">
                {milestones?.firstContactDate
                  ? humanizeDate(milestones?.firstContactDate)
                  : 'N/A'}
              </StyledTimespan.Value>
            </StyledTimespan.Wrapper>

            <StyledTimespan.Wrapper>
              <StyledTimespan.Label inversed variant="caption">
                Member for
              </StyledTimespan.Label>
              <StyledTimespan.Value inversed variant="caption" weight="bold">
                {milestones?.congregationDate
                  ? humanizeDate(milestones?.congregationDate)
                  : 'N/A'}
              </StyledTimespan.Value>
            </StyledTimespan.Wrapper>
          </StyledStripe>

          {/* Person Details */}
          <LinearGradient
            radius={0}
            horizontal
            // eslint-disable-next-line react-native/no-inline-styles
            viewStyle={{width: '100%'}}
            gradientColors={[
              {offset: 0, color: backgroundGradient[0]},
              {offset: 1, color: backgroundGradient[1]},
            ]}>
            <StyledPersonDetails.Wrapper>
              <StyledPersonDetails.Left>
                <StyledAvatarWrapper>
                  <Avatar
                    size="profile"
                    initials={getUserNameFirstLastCharacter()}
                    uri={person?.profilePhotoUrl || person?.profilePictureUrl}
                    radius="small"
                  />
                </StyledAvatarWrapper>
              </StyledPersonDetails.Left>

              <StyledPersonDetails.Right>
                <StyledPersonDetails.Upper>
                  {/* Name */}
                  <StyledPersonDetails.Row>
                    <Text weight="bold" inversed>
                      {person?.fullName}
                    </Text>
                  </StyledPersonDetails.Row>

                  {/* Metadata */}
                  <StyledPersonDetails.Row>
                    <Text variant="caption" inversed>
                      {getPersonOtherDetails()}
                    </Text>
                  </StyledPersonDetails.Row>
                </StyledPersonDetails.Upper>

                <StyledPersonDetails.Lower>
                  {/* Contact Preference */}
                  <StyledPersonDetails.Row>
                    <Text variant="caption" inversed>
                      {renderPrefersContactDisplayTitle()}
                    </Text>
                  </StyledPersonDetails.Row>

                  {/* Email */}
                  <StyledPersonDetails.Row>
                    <Text variant="caption" weight="bold" inversed>
                      {renderPrefersContactDisplay()}
                    </Text>
                  </StyledPersonDetails.Row>
                </StyledPersonDetails.Lower>
              </StyledPersonDetails.Right>
            </StyledPersonDetails.Wrapper>

            {/* Tab Buttons */}
            <StyledTabsWrapper>
              <PeopleTabs
                items={tabs}
                selected={selectedTab?.value}
                onChange={onTabChange}
              />
            </StyledTabsWrapper>
          </LinearGradient>
        </LinearGradient>

        {/* Tab Content */}
        <StyledTabContentWrapper>{selectedTab?.jsx}</StyledTabContentWrapper>
      </StyledScrollView>
    </>
  );
};

// Exports
export default PersonRecord;
