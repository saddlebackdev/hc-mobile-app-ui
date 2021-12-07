// Header
export interface IHeader {
  /** */
  title: string;

  /** */
  description?: string;
}

// Props
export interface IProps {
  /** */
  isOpen: boolean;

  /** */
  onDismiss?: any;

  /** */
  onModalHide?: any;

  /** */
  onModalShow?: any;

  /** */
  onModalWillHide?: any;

  /** */
  onModalWillShow?: any;

  /** */
  header?: IHeader;

  /** */
  footer?: Function;
}
