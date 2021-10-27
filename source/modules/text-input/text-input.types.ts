// Modules
import {TextInputProps} from 'react-native';

// Styled Input
export interface IStyledInput extends TextInputProps {
  $isFocused: boolean;
}

// Props
export interface IProps extends Partial<TextInputProps> {
  label?: string;
  placeholder?: string;
  disabled?: boolean | undefined;
  required?: boolean;
  onChange: any;
}
