// Modules
import {PickerSelectProps} from 'react-native-picker-select';

// Styled Label
export interface IStyledLabel {
  $addBottomMargin: boolean;
}

// Props
export interface IProps extends PickerSelectProps {
  /** Determines if the placeholder should be shown or not */
  shouldShowPlaceholder?: boolean;

  /** Label for the Select Picker */
  label?: string;

  /** Enables the underlined variant for the select picker */
  isUnderlined?: boolean;

  /** Determines if the required asterisk should be shown or not */
  required?: boolean;
}
