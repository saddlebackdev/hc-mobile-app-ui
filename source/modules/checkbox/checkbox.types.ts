// Modules
import {TouchableOpacityProps, ViewProps} from 'react-native';

// Styled Wrapper Props
export interface IStyledWrapperProps extends TouchableOpacityProps {}

// Styled Checkbox Wrapper Props
export interface IStyledCheckboxWrapperProps extends ViewProps {
  $isChecked: boolean;
  $isDisabled?: boolean | null | undefined;
}

// Styled Checkbox Mark Wrapper Props
export interface IStyledCheckboxMarkWrapperProps
  extends Partial<IStyledCheckboxWrapperProps> {
  $isDisabled?: boolean | null | undefined;
}

// Props
export interface IProps extends Partial<TouchableOpacityProps> {
  isChecked: boolean;
  label?: string;
  hint?: string;
}
