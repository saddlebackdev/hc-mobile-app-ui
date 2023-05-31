// Wrapper
export interface IStyledWrapper {
  $color: string;
}

// Props
export interface IProps {
  /** Label for the chip. */
  label: string;

  /** Color of the chip. */
  color: string;

  /** Function to be called when close icon is pressed. */
  onPress?: any;
}
