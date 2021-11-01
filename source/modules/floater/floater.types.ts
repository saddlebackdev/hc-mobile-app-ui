// Styled Wrapper
export interface IStyledWrapper {
  $position?: 'absolute' | 'relative';
  $alignment: 'top' | 'bottom';
  $marginTop?: number;
  $marginRight?: number;
  $marginBottom?: number;
  $marginLeft?: number;
}

// Props
export interface IProps {
  /** Determines the position of this element in the layout. Can be 'absolute' or 'relative'. Defaults to 'relative' */
  position?: 'absolute' | 'relative';

  /** Aligns the element on the screen to either 'top' or 'bottom' */
  alignment: 'top' | 'bottom';

  /** Adds margin from the top */
  offsetTop?: number;

  /** Adds margin from the right */
  offsetRight?: number;

  /** Adds margin from the bottom */
  offsetBottom?: number;

  /** Adds margin from the left */
  offsetLeft?: number;
}
