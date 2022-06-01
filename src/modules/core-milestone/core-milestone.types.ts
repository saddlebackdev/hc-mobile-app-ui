export interface IProps {
  /* if core milestone icon need white */
  isWhite?: boolean | false;

  /* pass hasAttendedClass101 */
  hasAttendedClass101?: boolean | false;

  /* pass hasAttendedClass201 */
  hasAttendedClass201?: boolean | false;

  /* pass hasAttendedClass301 */
  hasAttendedClass301?: boolean | false;

  /* pass hasAttendedClass401 */
  hasAttendedClass401?: boolean | false;

  /* pass hasSignedMembershipAgreement */
  hasSignedMembershipAgreement?: boolean | false;

  /* pass hasSignedMaturityCovenant */
  hasSignedMaturityCovenant?: boolean | false;

  /* pass hasSignedMinistryCovenant */
  hasSignedMinistryCovenant?: boolean | false;

  /* pass hasSignedMissionCovenant */
  hasSignedMissionCovenant?: boolean | false;

  /* pass hasAcceptedChrist */
  hasAcceptedChrist?: boolean | false;

  /* pass isBaptised */
  isBaptised?: boolean | false;

  /* pass isInSmallGroup */
  isInSmallGroup?: boolean | false;

  /* pass isInMinistry */
  isInMinistry?: boolean | false;

  /* pass isActiveInMissions */
  isActiveInMissions?: boolean | false;

  /* pass isAdult */
  isAdult?: boolean | false;

  /* pass isStudent */
  isStudent?: boolean | false;

  /* pass isChild */
  isChild?: boolean | false;

  /* pass isCgenderhild */
  gender?: string | null | undefined;

  /* pass color Milestone for class */
  colorMilestone?: string | '#dde1e4';
}
