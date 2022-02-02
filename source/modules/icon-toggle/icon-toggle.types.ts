// Common Props
interface ICommonProps {
  $isDisabled?: boolean;
  $isSelected?: boolean;
}

//Styled Item Content
export interface IStyledItemContent extends ICommonProps {}

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

    /** A function that renders the content inside the button. */
    content: Function;

    /** Value for the option */
    value: string | number;

    /** Function to be called when pill is pressed */
    onPress: Function;
  }>;
}
