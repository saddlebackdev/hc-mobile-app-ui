// Props
export interface IProps {
  /** testID of the icon */
  testID?: string;

  /** Size of the icon */
  size?: number;

  /** Determines the color of the icon. */
  color?: 'black' | 'muted' | 'white' | string;

  /** SVG icon file */
  file: any;
}
