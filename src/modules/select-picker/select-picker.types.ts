// Modules
import {PickerSelectProps} from 'react-native-picker-select';

// Styled Label
export interface IStyledLabel {
  $addBottomMargin?: boolean;
}

// Props
export interface IProps extends PickerSelectProps {
  /** Determines if the placeholder should be shown or not */
  shouldShowPlaceholder?: boolean;

  /** Determines if the CustomIcon should be shown or not */
  showCustomIcon?: boolean;

  /** Label for the Select Picker */
  label?: string;

  /** Enables the underlined variant for the select picker */
  isUnderlined?: boolean;

  /** If true, appends an asterisk to the label */
  required?: boolean;
}
