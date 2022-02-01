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
  /** Determines if the toggle control is disabled or not. Defaults to false */
  disabled?: boolean;

  /** Value of the already selected option */
  selected: string | number;

  /** Array of multiple options */
  options: Array<{
    /** Label of the option */
    label: string;

    /** If true, disables the current option */
    disabled?: boolean;

    /** Value for the option */
    value: string | number;

    /** Function to be called when pill is pressed */
    onPress: Function;
  }>;
}
