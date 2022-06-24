// Modules
import * as React from 'react';
import Styled from 'styled-components/native';
import Moment from 'moment';

// Types
import {StyledIContactOptionsItem, ITab, IProps} from './person-record.types';

// Shared
import Icon from '../icon/icon-external';
import Link from '../link/link';
import Text from '../text/text';
import Avatar from '../avatar/avatar';
import PeopleTabs from '../people-tabs/people-tabs';
import CoreMilestones from '../core-milestone/core-milestone';
import LinearGradient from '../linear-gradient/linear-gradient-view';
import LowerPrompt from '../lower-prompt/lower-prompt';
import {majorScale} from '../scales';

// Images
import IconPhone from '../../images/phone.svg';
import IconEmail from '../../images/email.svg';
import IconSms from '../../images/sms.svg';

// Styles
const StyledContactOptions = {
  Wrapper: Styled.View`
    flex-direction: row;
    justify-content: flex-end;
    background: ${({theme}) => theme.colors.white};
    padding: ${majorScale(2)}px;
    padding-top: ${majorScale(1)}px;
    align-items: center;
  `,
  Item: Styled.View<StyledIContactOptionsItem>`
    opacity: ${({$isActive}) => ($isActive ? 1 : 0.4)};
    margin-left: ${majorScale(1)}px;
  `,
};
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
    padding-left: ${majorScale(2)}px;
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
const StyledTabContentWrapper = Styled.View`
  padding: ${majorScale(2)}px;
  padding-top: ${majorScale(3)}px;
`;

// Component
export const PersonRecord: React.FC<IProps> = ({
  person,
  milestones,
  emailAddresses,
  contactPreferences,
  phoneNumbers,
  onPressCall,
  onPressSms,
  onPressEmail,
  shouldShowCallConfirmation = true,
  shouldShowEmailConfirmation = true,
  shouldShowSmsConfirmation = true,
  preSelectedTabValue,
  tabs = [],
}): React.ReactElement => {
  // State
  // prettier-ignore
  const [selectedTab, setSelectedTab] = React.useState<any>(null);
  // prettier-ignore
  const [isCallConfirmationShown, setIsCallConfirmationShown] = React.useState<boolean>(false);
  // prettier-ignore
  const [isSmsConfirmationShown, setIsSmsConfirmationShown] = React.useState<boolean>(false);
  // prettier-ignore
  const [isEmailConfirmationShown, setIsEmailConfirmationShown] = React.useState<boolean>(false);

  // On Tab Change
  const onTabChange = (tab: ITab): void => {
    setSelectedTab(tab);
  };

  // Show Call Confirmation
  const showCallConfirmation = (): void => {
    setIsCallConfirmationShown(true);
  };

  // Show Sms Confirmation
  const showSmsConfirmation = (): void => {
    setIsSmsConfirmationShown(true);
  };

  // Show Email Confirmation
  const showEmailConfirmation = (): void => {
    setIsEmailConfirmationShown(true);
  };

  // Hide Call Confirmation
  const hideCallConfirmation = (): void => {
    setIsCallConfirmationShown(false);
  };

  // Hide Sms Confirmation
  const hideSmsConfirmation = (): void => {
    setIsSmsConfirmationShown(false);
  };

  // Hide Email Confirmation
  const hideEmailConfirmation = (): void => {
    setIsEmailConfirmationShown(false);
  };

  // On Press Call Icon
  const onPressCallIcon = () => {
    if (!shouldShowCallConfirmation) {
      const primaryPhone = phoneNumbers?.find(x => x?.isPrimary);

      return onPressCall(primaryPhone);
    }

    showCallConfirmation();
  };

  // On Press Sms Icon
  const onPressSmsIcon = () => {
    if (!shouldShowSmsConfirmation) {
      const primaryPhone = phoneNumbers?.find(x => x?.isPrimary);

      return onPressSms(primaryPhone);
    }

    showSmsConfirmation();
  };

  // On Press Email Icon
  const onPressEmailIcon = () => {
    if (!shouldShowEmailConfirmation) {
      const primaryEmail = emailAddresses?.find(x => x?.isPrimary);

      return onPressEmail(primaryEmail);
    }

    showEmailConfirmation();
  };

  // On Confirm Call
  const onConfirmCall = () => {
    const primaryPhone = phoneNumbers?.find(x => x?.isPrimary);

    if (primaryPhone) {
      onPressCall(primaryPhone);
    }

    hideCallConfirmation();
  };

  // On Confirm Sms
  const onConfirmSms = () => {
    const primaryPhone = phoneNumbers?.find(x => x?.isPrimary);

    if (primaryPhone) {
      onPressSms(primaryPhone);
    }

    hideSmsConfirmation();
  };

  // On Confirm Email
  const onConfirmEmail = () => {
    const primaryEmail = emailAddresses?.find(x => x?.isPrimary);

    if (primaryEmail) {
      onPressEmail(primaryEmail);
    }

    hideEmailConfirmation();
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

  let metaData = '';

  if (person?.gender) {
    metaData = person?.gender;
  }

  if (person?.ageGroup) {
    metaData = `${metaData} | ${person?.ageGroup}`;
  }

  if (person?.maritalStatus) {
    metaData = `${metaData} | ${person?.maritalStatus}`;
  }

  if (person?.campusName) {
    metaData = `${metaData} | ${person?.campusName}`;
  }

  let bgGradientColors = ['#329594', '#56C4C4'];

  if (person?.gender === 'Male') {
    bgGradientColors = ['#3A8E5D', '#7EAC61'];
  }

  if (person?.gender === 'Female') {
    bgGradientColors = ['#0290B7', '#5CA9B5'];
  }

  if (person?.age < 18) {
    bgGradientColors = ['#C33580', '#F99E49'];
  }

  let preferredContactMethod;

  if (contactPreferences?.preferredMethod !== 'none') {
    preferredContactMethod = contactPreferences?.preferredMethod || '';
  }

  const primaryEmail = emailAddresses?.find(x => x?.isPrimary);
  const primaryPhone = phoneNumbers?.find(x => x?.isPrimary);

  const firstContactDate = milestones?.firstContactDate
    ? Moment(milestones?.firstContactDate).fromNow().replace(' ago', '')
    : 'N/A';

  const congregationDate = milestones?.congregationDate
    ? Moment(milestones?.congregationDate).fromNow().replace(' ago', '')
    : 'N/A';

  return (
    <>
      {/* Contact Options */}
      <StyledContactOptions.Wrapper>
        <StyledContactOptions.Item $isActive={!!primaryPhone}>
          <Link onPress={onPressCallIcon} disabled={!primaryPhone}>
            <Icon file={IconPhone} size={22} color="#1C93C4" />
          </Link>
        </StyledContactOptions.Item>

        <StyledContactOptions.Item $isActive={!!primaryPhone}>
          <Link onPress={onPressSmsIcon} disabled={!primaryPhone}>
            <Icon file={IconSms} size={22} color="#56C4C4" />
          </Link>
        </StyledContactOptions.Item>

        <StyledContactOptions.Item $isActive={!!primaryEmail}>
          <Link onPress={onPressEmailIcon} disabled={!primaryEmail}>
            <Icon file={IconEmail} size={22} color="#C68EF6" />
          </Link>
        </StyledContactOptions.Item>
      </StyledContactOptions.Wrapper>

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
                {firstContactDate}
              </StyledTimespan.Value>
            </StyledTimespan.Wrapper>

            <StyledTimespan.Wrapper>
              <StyledTimespan.Label inversed variant="caption">
                Member for
              </StyledTimespan.Label>
              <StyledTimespan.Value inversed variant="caption" weight="bold">
                {congregationDate}
              </StyledTimespan.Value>
            </StyledTimespan.Wrapper>
          </StyledStripe>

          {/* Person Details */}
          <StyledPersonDetails.Wrapper>
            <StyledPersonDetails.Left>
              <StyledAvatarWrapper>
                <Avatar
                  size="profile"
                  initials={person?.initials}
                  uri={person?.profilePictureUrl}
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
                    {metaData}
                  </Text>
                </StyledPersonDetails.Row>
              </StyledPersonDetails.Upper>

              <StyledPersonDetails.Lower>
                {/* Contact Preference */}
                <StyledPersonDetails.Row>
                  {preferredContactMethod ? (
                    <Text variant="caption" inversed>
                      (prefers {preferredContactMethod})
                    </Text>
                  ) : null}
                </StyledPersonDetails.Row>

                {/* Email */}
                <StyledPersonDetails.Row>
                  <Text variant="caption" inversed>
                    {primaryEmail?.email || 'No email associated'}
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

        {/* Tab Content */}
        <StyledTabContentWrapper>{selectedTab?.jsx}</StyledTabContentWrapper>
      </StyledScrollView>

      {/* Call Confirmation Prompt */}
      {shouldShowCallConfirmation && (
        <LowerPrompt
          isOpen={isCallConfirmationShown}
          leftButtonLabel="Cancel"
          leftButtonCallback={hideCallConfirmation}
          rightButtonLabel="Call"
          rightButtonCallback={onConfirmCall}
          intent="success">
          Are you sure you want to make a phone call?
        </LowerPrompt>
      )}

      {/* SMS Confirmation Prompt */}
      {shouldShowSmsConfirmation && (
        <LowerPrompt
          isOpen={isSmsConfirmationShown}
          leftButtonLabel="Cancel"
          leftButtonCallback={hideSmsConfirmation}
          rightButtonLabel="Yes"
          rightButtonCallback={onConfirmSms}
          intent="success">
          Are you sure you want to compose a text message?
        </LowerPrompt>
      )}

      {/* Email Confirmation Prompt */}
      {shouldShowEmailConfirmation && (
        <LowerPrompt
          isOpen={isEmailConfirmationShown}
          leftButtonLabel="Cancel"
          leftButtonCallback={hideEmailConfirmation}
          rightButtonLabel="Yes"
          rightButtonCallback={onConfirmEmail}
          intent="success">
          Are you sure you want to compose an email?
        </LowerPrompt>
      )}
    </>
  );
};

// Exports
export default PersonRecord;
