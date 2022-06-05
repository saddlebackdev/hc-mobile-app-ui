export interface IProps {
  /** Function to be called when clicked on card */
  onPress?: () => void;

  /** Pass user name */
  name?: string | undefined;

  /** Pass profile pic url */
  profilePic?: string | undefined | null;

  /** Pass user id */
  userId?: string;

  /** Add Custom view on footer */
  footerElement?: React.ReactElement | null | undefined;

  /** Add swipe left buttons */
  leftButtons?: React.ReactElement | null | undefined;

  /** Add swipe right button */
  rightButtons?: React.ReactElement | null | undefined;

  /** show checkbox in left side */
  isShowCheckbox?: boolean;

  /** Function to be called when clicked on checkbox */
  onCheckboxPress?: any;

  /** determine if checkbox is checked or not */
  isChecked?: boolean;

  //red marker beside User Name
  redMarker?: boolean;

  //center element
  middleElement?: React.ReactElement | null | undefined;
}
