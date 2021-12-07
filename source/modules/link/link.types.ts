// Props
export interface IProps {
  /** Label for the link. */
  label?: string;

  /** Function to be called when the link is pressed. */
  onLinkPress?: any;

  /** Path to be redirected to. It can be a URL or an in-app route. */
  to: string;
}
