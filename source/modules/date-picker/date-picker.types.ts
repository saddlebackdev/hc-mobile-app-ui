// Modules
import {DatePickerOptions} from '@react-native-community/datetimepicker';
import {TouchableOpacityProps, ViewProps, ModalProps} from 'react-native';

// Styled Touchable
export interface IStyledTouchable extends TouchableOpacityProps {}

// Styled Wrapper
export interface IStyledWrapper extends ViewProps {
  small?: boolean;
}

// Styled Modal
export interface IStyledModal extends ModalProps {}

// Styled Overlay
export interface IStyledOverlay extends ViewProps {}

// Styled Picker Wrapper
export interface IStyledPickerWrapper extends ViewProps {}

// Props
export interface IProps extends Partial<DatePickerOptions> {
  onDateChange: Function;
  customDateFormatter?: Function;
  label?: string;
  selectedDate: Date;
}
