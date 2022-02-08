// Styled Wrapper
export interface IStyledWrapper {
  $position?: 'absolute' | 'relative';
  $alignment: 'top' | 'bottom';
  $paddingTop?: number;
  $paddingRight?: number;
  $paddingBottom?: number;
  $paddingLeft?: number;
}

// Props
export interface IProps {
  /** Determines the position of this element in the layout. Can be 'absolute' or 'relative'. Defaults to 'relative' */
  position?: 'absolute' | 'relative';

  /** Aligns the element on the screen to either 'top' or 'bottom' */
  alignment: 'top' | 'bottom';

  /** Adds padding from the top */
  offsetTop?: number;

  /** Adds padding from the right */
  offsetRight?: number;

  /** Adds padding from the bottom */
  offsetBottom?: number;

  /** Adds padding from the left */
  offsetLeft?: number;
}
