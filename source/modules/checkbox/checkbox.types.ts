// Modules
import {TouchableOpacityProps, ViewProps} from 'react-native';

// Styled Wrapper Props
export interface IStyledWrapperProps extends TouchableOpacityProps {}

// Styled Checkbox Wrapper Props
export interface IStyledCheckboxOuter extends ViewProps {
  $isChecked: boolean;
  $isDisabled?: boolean;
}

// Styled Checkbox Mark Wrapper Props
export interface IStyledCheckboxInner extends Partial<IStyledCheckboxOuter> {
  $isDisabled?: boolean;
}

// Props
export interface IProps {
  /** Function to be called when checkbox is checked/unchecked */
  onPress: any;

  /** Determines if the checkbox is disabled or not. Defaults to false */
  disabled?: boolean;

  /** Determines if the checkbox is checked or not */
  isChecked: boolean;

  /** Label for the checkbox */
  label?: string;

  /** Hint for the checkbox */
  hint?: string;
}
