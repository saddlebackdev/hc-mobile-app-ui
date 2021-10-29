// Modules
import {TouchableOpacityProps} from 'react-native';

// Common Props
interface ICommonProps {
  /** If true, disables the button. Defaults to false */
  disabled?: boolean | null;

  /** Determines the appearance of the button. Can be filled or outline. Defaults to filled */
  appearance?: 'filled' | 'outline';

  /** Determines the color of the button. Can be primary, secondary, info, success, warning or danger. Defaults to primary */
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';

  /** If true, renders a small button */
  small?: boolean;
}

// Styled Label
export interface IStyledLabel extends ICommonProps {}

// Styled Button
export interface IStyledButton extends ICommonProps, TouchableOpacityProps {}

// Props
export interface IProps extends IStyledButton {
  /** Label for the button */
  children: string;
}
