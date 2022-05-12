// Styled Touchable
export interface IStyledTouchable {
  $isActive: boolean | null;
  $isFirstChild: boolean | null;
  $isLastChild: boolean | null;
}

// Styled Text
export interface IStyledText {
  $isActive: boolean | null;
}

// Item
export interface ITab {
  label: string;
  value: string | number;
}

// Props
export interface IProps {
  onChange: Function;
  selected: string | number | null;
  items: Array<ITab>;
}
