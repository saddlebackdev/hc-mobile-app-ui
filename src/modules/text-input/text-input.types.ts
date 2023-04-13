// Modules
import {TextInputProps} from 'react-native';

// Styled Label
export interface IStyledLabel {
  $addBottomMargin?: boolean;
}

// Styled Input
export interface IStyledInput extends TextInputProps {
  $isFocused: boolean;
  $font?: 'primary' | 'secondary' | string;
  $isUnderlined?: boolean;
  $autoHeight?: boolean;
}

// Props
export interface IProps extends Partial<TextInputProps> {
  /** Enables the underlined variant for the text input */
  isUnderlined?: boolean;

  /** Font size of the text */
  small?: boolean;

  /** Label for the text input */
  label?: string;

  /** weight of a text */
  weight?: 'bold' | 'light' | 'regular' | 'semiBold' | undefined;

  /** color for the text input */
  muted?: boolean;

  /** Font family to use. */
  font?: 'primary' | 'secondary' | string;

  /** Placeholder for the text input */
  placeholder?: string;

  /** If true, disables the text input control */
  disabled?: boolean | undefined;

  /** If true, appends an asterisk to the label */
  required?: boolean;

  /** Function to call on key input event */
  onChange: any;

  /** If true, sets height to auto */
  autoHeight?: boolean;
}
