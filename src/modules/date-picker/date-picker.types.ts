// Modules
import {DatePickerOptions} from '@react-native-community/datetimepicker';
import {TouchableOpacityProps, ViewProps, ModalProps} from 'react-native';

// Styled Touchable
export interface IStyledTouchable extends TouchableOpacityProps {}

// Styled Wrapper
export interface IStyledWrapper extends ViewProps {
  small?: boolean;
  $isUnderlined: boolean;
}

// Styled Label
export interface IStyledLabel {
  $isSmallFont: boolean;
}

// Styled Modal
export interface IStyledModal extends ModalProps {}

// Styled Overlay
export interface IStyledOverlay extends ViewProps {}

// Styled Picker Wrapper
export interface IStyledPickerWrapper extends ViewProps {}

// Props
export interface IProps extends Partial<DatePickerOptions> {
  /** Function to be called when date is selected */
  onDateChange: Function;

  /** Optional function to format the date */
  customDateFormatter?: Function;

  /** Label for the date picker */
  label?: string;

  /** Currently selected value for the date picker */
  selectedDate: Date;

  /** Enables the underlined variant for the date picker */
  isUnderlined?: boolean;

  /** Enables the underlined variant for the date picker */
  withDoneConfirmButtonIos?: boolean;
}
