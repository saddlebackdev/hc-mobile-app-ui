// Gradient Color Prop
interface GradientColorProp {
  /** color of gradient */
  color: string;

  /** offset of gradient. the offset should be passed from 0 to 1 containing decimal values if pass multiple colors. */
  offset: number;
}

// Styled touchable
export interface IStyledTouchable {
  $isExpanded?: boolean;
}

// Styled content
export interface IStyledContent {
  $isExpanded?: boolean;
}

// Styled divider
export interface IStyledDivider {
  $showDivider?: boolean;
}

// Props
export interface IProps {
  title: string;
  linkLabel?: string;
  /**  linkColor Supports only theme specific colors */
  linkColor?: string;
  onLinkPress?: any;
  leftIcon: any;
  leftIconColor?: string;
  leftText: string;
  showDivider?: boolean;
  rightIcon: any;
  rightIconColor?: string;
  rightText: string;
  gradientColors: GradientColorProp[];
  expandedElement: JSX.Element;
}
