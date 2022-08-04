// Types
import {IProps as PickerSelectProps} from '../select-picker/select-picker.types';

// Props
export interface IProps extends PickerSelectProps {
  /** Function to be called when the value of picker changes. */
  onChange: Function;

  /** Minimum Date for Calendar Picker. Accepts a date object. */
  minDate?: Date;

  /** If true, shows an asterisk at the end of the label. */
  isRequired?: boolean;
}
