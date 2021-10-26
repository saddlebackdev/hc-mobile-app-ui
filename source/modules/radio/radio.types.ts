// Styled Wrapper
export interface IStyledWrapper {
  $direction?: 'vertical' | 'horizontal';
}

// Styled Group
export interface IStyledGroup extends IStyledWrapper {
  $isFirstChild?: boolean;
  $isLastChild?: boolean;
}

// Styled Radio Mark
export interface IStyledRadioMark {
  $isDisabled?: boolean;
}

// Props
export interface IProps {
  disabled?: boolean;
  onChange: Function;
  direction?: 'vertical' | 'horizontal';
  selected: string | number;
  options: Array<{
    label: string;
    value: string | number;
    disabled?: boolean;
  }>;
}
