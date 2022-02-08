// Styled Wrapper
export interface IStyledWrapper {
  $direction?: 'vertical' | 'horizontal';
}

// Styled Group
export interface IStyledGroup extends IStyledWrapper {
  $isFirstChild?: boolean;
  $isLastChild?: boolean;
}

// Styled Radio Inner
export interface IStyledRadioInner {
  $isDisabled?: boolean;
}

// Props
export interface IProps {
  /** If true, disables the radio control itself */
  disabled?: boolean;

  /** Function to be called when a new selection is made */
  onChange: Function;

  /** Determines the direction of the radio options. Can be vertical or horizontal. Defaults to horizontal */
  direction?: 'vertical' | 'horizontal';

  /** Value of the already selected option */
  selected: string | number;

  /** Array of multiple options */
  options: Array<{
    /** Label of the option */
    label: string;

    /** Value for the option */
    value: string | number;

    /** If true, disables the current option */
    disabled?: boolean;
  }>;
}
