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
  position?: 'absolute' | 'relative';
  alignment: 'top' | 'bottom';
  offsetTop?: number;
  offsetRight?: number;
  offsetBottom?: number;
  offsetLeft?: number;
}
