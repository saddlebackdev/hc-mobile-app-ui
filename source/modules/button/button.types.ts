import {TouchableOpacityProps} from 'react-native';

// Common Props
interface ICommonProps {
  disabled?: boolean | null;
  appearance?: 'filled' | 'outline';
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
  small?: boolean;
}

// Styled Label
export interface IStyledLabel extends ICommonProps {}

// Styled Button
export interface IStyledButton extends ICommonProps, TouchableOpacityProps {}

// Props
export interface IProps extends IStyledButton {
  children: String;
}
