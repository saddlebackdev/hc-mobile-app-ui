// Styled Header
export interface IStyledHeader {
  $paddedHeader: boolean;
}

// Styled Item
export interface IStyledItem {
  $gutterSize: number;
  $isLastChild: boolean;
}

// Props
export interface IProps {
  /** Title of the list. */
  title?: string;

  /** Label for the link shown on right. */
  linkLabel?: string;

  /** Function to be called when the link on right is pressed. */
  onLinkPress?: any;

  /** Space between the list items. */
  gutterSize?: number;

  /** Adds horizontal padding to the header when true. */
  paddedHeader?: boolean;
}
