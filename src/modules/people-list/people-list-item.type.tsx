export interface IProps {
  /** clicked on card */
  onUserClicked?: () => void;

  /** user name */
  name?: string | undefined;

  /** user marital status */
  maritalStatus?: string | undefined;

  /** user gender */
  gender?: string | undefined;

  /** church entity name */
  churchEntityName?: string | undefined;

  /** profile pic url */
  profilePic?: string | undefined | null;

  /** user id */
  userId?: string;

  /** footer element */
  footerElement?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  /** swipe left buttons */
  leftButtons?: any | null;

  /** swipe right button */
  rightButtons?: any | null;

  /** show checkbox in left side */
  isShowCheckbox?: boolean;

  /** checkbox press action */
  onCheckboxPress?: any;

  /** determine if checkbox is checked or not */
  isChecked?: boolean | false;
}
