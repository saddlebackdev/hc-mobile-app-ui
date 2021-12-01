// Styled Item
export interface IStyledItem {
  $gutterSize: number;
  $isLastChild: boolean;
}

// Props
export interface IProps {
  /**  */
  title?: string;

  /**  */
  linkLabel?: string;

  /**  */
  onLinkPress?: any;

  /**  */
  gutterSize?: number;
}
