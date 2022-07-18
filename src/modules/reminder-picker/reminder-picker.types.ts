// Types
import {IProps as PickerSelectProps} from '../select-picker/select-picker.types';

// Props
export interface IProps extends PickerSelectProps {
  /** Function to be called when the value of picker changes. */
  onChange: Function;
}
