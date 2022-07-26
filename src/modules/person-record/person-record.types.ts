// Styled Contact Options Item
export interface StyledIContactOptionsItem {
  $isActive: boolean;
}

// Tab
export interface ITab {
  /** Label for the tab. */
  label: string;

  /** JSX to be shown when the tab is active. */
  jsx: React.ReactElement | null;

  /** Unique value for the tab. */
  value: string | number;
}

// Person Record
export interface IProps {
  /** Basic details of this person. */
  person: {
    age: number;
    gender: string | null;
    initials: string | null;
    fullName: string | null;
    campusName: string | null;
    ageGroup: string | null;
    maritalStatus: string | null;
    profilePictureUrl: string | null;
    preferredContactMethod: string | null;
    primaryPhone: string | null;
    primaryEmail: string | null;
    isAdult?: boolean;
    isStudent?: boolean;
    isChild?: boolean;
  };
  /** List of milestones of this person. */
  milestones: {
    firstContactDate: string | null;
    congregationDate: string | null;
    hasSignedMembershipAgreement: boolean;
    hasAttendedClass101: boolean;
    hasAttendedClass201: boolean;
    hasAttendedClass301: boolean;
    hasAttendedClass401: boolean;
    hasSignedMaturityCovenant: boolean;
    hasSignedMinistryCovenant: boolean;
    hasSignedMissionCovenant: boolean;
    hasAcceptedChrist: boolean;
    isBaptised: boolean;
    isInSmallGroup: boolean;
    isInMinistry: boolean;
    isActiveInMissions: boolean;
  };

  /** Value of the pre-selected tab. */
  preSelectedTabValue: string | number;

  /** Tabs to be shown below the basic details. */
  tabs: Array<ITab>;
}
