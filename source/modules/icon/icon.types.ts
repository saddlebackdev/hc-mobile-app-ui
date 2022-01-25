// Styled Image
export interface IStyledImage {
  $width: number;
  $height: number;
}

// Props
export interface IProps {
  /** Size of the icon */
  size?: number;

  /** Determines the color of the icon. Can be primary, secondary, info, success, warning, danger, umted or white */
  color?: 'black' | 'muted' | 'white';

  /** Name of the icon */
  type:
    | 'chevronUp'
    | 'chevronDown'
    | 'chevronRight'
    | 'calendar'
    | 'date'
    | 'success'
    | 'tick'
    | 'user'
    | 'expand'
    | 'shrink'
    | 'close'
    | 'closeCircle';
}
