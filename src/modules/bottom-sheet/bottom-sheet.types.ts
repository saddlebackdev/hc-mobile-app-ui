// Header
export interface IHeader {
  /** Title for the bottom sheet. */
  title: string;

  /** Description for the bottom sheet. */
  description?: string;
}

// Props
export interface IProps {
  /** Specifies if the bottom sheet is open or not. */
  isOpen: boolean;

  /** Function to be called when dismissing the bottom sheet. */
  onDismiss?: any;

  /** If true, renders the close button on top-right corner. */
  showCloseButton?: boolean;

  /** Header component of the bottom sheet. */
  header?: IHeader;

  /** Function that renders a component as the footer of the bottom sheet. */
  footer?: Function;
}
