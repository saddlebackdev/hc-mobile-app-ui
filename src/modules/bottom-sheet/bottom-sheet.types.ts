import React from 'react';

// Styled Wrapper
export interface IStyledWrapper {
  $hasFooter: boolean;
}

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

  /** Test ID for the close button. */
  closeButtonTestId?: string;

  /** Header component of the bottom sheet. */
  header?: IHeader;

  /** React element to be rendered as the footer. */
  footer?: React.ReactElement;

  /** If true, renders the header as fixed. */
  stickyHeader?: boolean;

  /** If true, renders the modal in a Scrolling View. */
  isScrollable?: boolean;

  /** If true, pressing the back button will close the bottom sheet. */
  shouldCloseOnBackButtonPress?: boolean;

  /**
   * Function to be called on back button press.
   *
   * Requires `shouldCloseOnBackButtonPress` to be `false`
   */
  onHardwareBackButtonPress?: () => void;

  /** Size of the close button icon
   *
   * Maximum size allocated by the container is `32`
   */
  closeButtonIconSize?: number;

  /** Determines the color of the close button icon */
  closeButtonIconColor?: 'black' | 'muted' | 'white';
}
