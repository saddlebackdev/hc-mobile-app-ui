// Modules
import {TouchableOpacityProps} from 'react-native';

// Common Props
interface ICommonProps {
  appearance?: 'filled' | 'outline';
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
  small?: boolean;
}

// Styled Text
export interface IStyledText extends ICommonProps {
  disabled?: boolean | null;
}

// Styled Button
export interface IStyledButton extends ICommonProps {}

// Props
export interface IProps extends IStyledButton, TouchableOpacityProps {
  children: String;
}
