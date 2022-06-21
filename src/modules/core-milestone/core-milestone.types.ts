export interface IProps {
  /* Pass true if white Icon for core milestone */
  isWhite?: boolean | false;

  /* Pass True if hasAttendedClass101 active by default is false */
  hasAttendedClass101?: boolean | false;

  /* Pass True if hasAttendedClass201 active by default is false */
  hasAttendedClass201?: boolean | false;

  /* Pass True if hasAttendedClass301 active by default is false */
  hasAttendedClass301?: boolean | false;

  /* Pass True if hasAttendedClass401 active by default is false */
  hasAttendedClass401?: boolean | false;

  /* Pass True if hasSignedMembershipAgreement active by default is false */
  hasSignedMembershipAgreement?: boolean | false;

  /* Pass True if hasSignedMaturityCovenant active by default is false */
  hasSignedMaturityCovenant?: boolean | false;

  /* Pass True if hasSignedMinistryCovenant active by default is false */
  hasSignedMinistryCovenant?: boolean | false;

  /* Pass True if hasSignedMissionCovenant active by default is false */
  hasSignedMissionCovenant?: boolean | false;

  /* Pass True if hasAcceptedChrist active by default is false */
  hasAcceptedChrist?: boolean | false;

  /* Pass True if isBaptised active by default is false */
  isBaptised?: boolean | false;

  /* Pass True if isInSmallGroup active by default is false */
  isInSmallGroup?: boolean | false;

  /* Pass True if isInMinistry active by default is false */
  isInMinistry?: boolean | false;

  /* Pass True if isActiveInMissions active by default is false */
  isActiveInMissions?: boolean | false;

  /* Pass True if isAdult active by default is false */
  isAdult?: boolean | false;

  /* Pass True if isStudent active by default is false */
  isStudent?: boolean | false;

  /* Pass True if isChild active by default is false */
  isChild?: boolean | false;

  /* Pass True if isCgenderhild active by default is false */
  gender?: string | null | undefined;

  /* Pass color for class milestone for view styles */
  colorMilestone?: string | '#dde1e4';
}
