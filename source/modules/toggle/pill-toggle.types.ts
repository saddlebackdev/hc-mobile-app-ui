// Common Props
interface ICommonProps {
  $isDisabled?: boolean;
}

// Styled Wrapper
export interface IStyledWrapper extends ICommonProps {
  $isDisabled?: boolean;
}

// Styled Item
export interface IStyledItem extends ICommonProps {
  $isSelected?: boolean;
  $isFirstChild?: boolean;
  $isLastChild?: boolean;
}

// Styled Item Label
export interface IStyledItemLabel extends ICommonProps {}

// Props
export interface IProps {
  disabled?: boolean;
  selected: string | number;
  options: Array<{
    label: string;
    disabled?: boolean;
    value: string | number;
    onPress: Function;
  }>;
}
