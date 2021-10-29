// Modules
import {PickerSelectProps} from 'react-native-picker-select';

// Props
export interface IProps extends PickerSelectProps {
  /** Determines if the placeholder should be shown or not */
  shouldShowPlaceholder?: boolean;

  /** Label for the Select Picker */
  label?: string;
}
