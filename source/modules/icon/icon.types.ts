// Props
export interface IProps {
  /** Size of the icon */
  size?: number;

  /** Determines the color of the icon. Can be primary, secondary, info, success, warning, danger, umted or white */
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'muted'
    | 'white';

  /** Name of the icon */
  type: 'chevronDown' | 'calendar' | 'date' | 'success' | 'tick' | 'user';
}
