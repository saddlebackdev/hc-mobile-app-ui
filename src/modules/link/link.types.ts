// Props
export interface IProps {
  /** Label for the link. */
  label?: string;

  /** If true, disables the link. */
  disabled?: boolean;

  /** Function to be called when the link is pressed. */
  onPress?: any;

  /** Path to be redirected to. It can be a URL or an in-app route. */
  to?: string;

  /** Determines the color of the text. Can be primary, secondary, info, success, warning, danger or any color from the theme. */
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | string;

  /** If true, renders the label with small font size. */
  small?: boolean;
}
