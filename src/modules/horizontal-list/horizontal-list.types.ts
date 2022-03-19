// Styled Header
export interface IStyledHeader {
  $paddedHeader: boolean;
}

// Styled Item
export interface IStyledItem {
  $gutterSize: number;
  $hasPaddedHeader: boolean;
  $isFirstChild: boolean;
  $isLastChild: boolean;
}

// Props
export interface IProps {
  /** Title of the list. */
  title?: string;

  /** SubTitle of the list. */
  subTitle?: string;

  /** Label for the link shown on right. */
  linkLabel?: string;

  /** Function to be called when the link on right is pressed. */
  onLinkPress?: any;

  /** Space between the list items. */
  gutterSize?: number;

  /** Adds horizontal padding to the header when true. */
  paddedHeader?: boolean;
}
