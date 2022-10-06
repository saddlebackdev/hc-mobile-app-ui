// Styled touchable
export interface IStyledTouchable {
  $isExpanded?: boolean;
}

// Styled divider
export interface IStyledDivider {
  $showDivider?: boolean;
}

// Props
export interface IProps {
  title: string;
  subTitle?: string;
  leftIcon: any;
  leftIconColor?: string;
  leftText: string;
  showDivider?: boolean;
  rightIcon: any;
  rightIconColor?: string;
  rightText: string;
  gradientColors?: string[];
  expandedElement: JSX.Element;
}
