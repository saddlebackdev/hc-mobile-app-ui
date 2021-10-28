// Modules
import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import Styled, {useTheme} from 'styled-components/native';

// Types
import {IProps, IStyledInput} from './text-input.types';

// Shared
import Text from '../text/text';
import {majorScale} from '../scales';

// Styles
const StyledWrapper = Styled.View``;
const StyledLabel = Styled(Text)`
  font-weight: 700;
  margin-bottom: ${majorScale(1, 'px')};
  font-size: 18px;
`;
const StyledLabelAsterisk = Styled(Text)`
  color: ${({theme}) => theme.colors.dangerLight};
`;
const StyledInput = Styled.TextInput<IStyledInput>`
  width: 100%; height: 44px;
  padding-horizontal: ${majorScale(1, 'px')};
  border-radius: 3px;
  font-size: 16px;

  background: ${({editable, theme}) => {
    return editable ? theme.colors.white : theme.colors.grayTwo;
  }};

  color: ${({editable, theme}) => {
    return editable ? theme.colors.graySix : theme.colors.grayThree;
  }};

  border: 1px solid ${({$isFocused, editable, theme}) => {
    if (!editable) {
      return theme.colors.grayThree;
    }

    if ($isFocused) {
      return theme.colors.primaryLight;
    }

    return theme.colors.grayThree;
  }};
`;

// Component
export const TextInput: React.FC<IProps> = ({
  label,
  required,
  disabled,
  placeholder,
  onBlur,
  onChange,
  onFocus,
  ...props
}): React.ReactElement => {
  // Hooks
  const theme = useTheme();

  // State
  const [isFocused, setIsFocused] = useState(false);

  // On Blur
  const _onBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  // On Focus
  const _onFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);

    if (onFocus) {
      onFocus(event);
    }
  };

  // Do not allow overwriting styles
  if (props.style) {
    props.style = {};
  }

  return (
    <StyledWrapper>
      <StyledLabel>
        {label} {required && <StyledLabelAsterisk>*</StyledLabelAsterisk>}
      </StyledLabel>
      <StyledInput
        $isFocused={isFocused}
        editable={!disabled}
        selectTextOnFocus={!disabled}
        underlineColorAndroid="transparent"
        placeholderTextColor={theme.colors.grayFour}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={_onFocus}
        onBlur={_onBlur}
        {...props}
      />
    </StyledWrapper>
  );
};

// Exports
export default TextInput;
