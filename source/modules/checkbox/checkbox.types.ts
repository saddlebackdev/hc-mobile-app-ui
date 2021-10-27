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
  onPress: any;
  disabled?: boolean;
  isChecked: boolean;
  label?: string;
  hint?: string;
}
