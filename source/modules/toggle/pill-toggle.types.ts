// Styled Wrapper
export interface IStyledWrapper {
  $isDisabled?: boolean;
}

// Styled Item Wrapper
export interface IStyledItemWrapper extends IStyledWrapper {
  $isSelected?: boolean;
  $isFirstChild?: boolean;
  $isLastChild?: boolean;
}

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
