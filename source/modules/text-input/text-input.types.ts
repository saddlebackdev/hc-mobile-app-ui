// Modules
import {TextInputProps} from 'react-native';

// Styled Input
export interface IStyledInput extends TextInputProps {
  $isFocused: boolean;
}

// Props
export interface IProps extends Partial<TextInputProps> {
  /** Label for the text input */
  label?: string;

  /** Placeholder for the text input */
  placeholder?: string;

  /** If true, disables the text input control */
  disabled?: boolean | undefined;

  /** If true, appends an asterisk to the label */
  required?: boolean;

  /** Function to call on key input event */
  onChange: any;
}
