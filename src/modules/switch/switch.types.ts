// Props
export interface IProps {
  /** Boolean indicating if the switch is in active or inactive state. */
  isActive: boolean;

  /** Color of the switch when in active state. Could be "primary", "success" or a hex string. */
  color?: 'primary' | 'success' | string;

  /** Function to be called when the switch is pressed. */
  onPress: () => void;
}
