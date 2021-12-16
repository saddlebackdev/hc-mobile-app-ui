// Modules
import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import Styled, {useTheme} from 'styled-components/native';

// Types
import {IProps, IStyledInput, IStyledLabel} from './text-input.types';

// Shared
import Text from '../text/text';
import {majorScale, minorScale} from '../scales';

// Styles
const StyledWrapper = Styled.View``;
const StyledLabel = Styled(Text)<IStyledLabel>`
  font-weight: 700;
  font-size: ${({$isSmallFont}) => ($isSmallFont ? '14px' : '18px')};
  margin-bottom: ${({$isSmallFont}) => {
    return $isSmallFont ? minorScale(1, 'px') : majorScale(1, 'px');
  }};
`;
const StyledLabelAsterisk = Styled(Text)<IStyledLabel>`
  color: ${({theme}) => theme.colors.dangerLight};
  font-size: ${({$isSmallFont}) => ($isSmallFont ? '14px' : '18px')};
`;
const StyledInput = Styled.TextInput<IStyledInput>`
  width: 100%;
  border-radius: 3px;

  font-size: ${({$isUnderlined}) => ($isUnderlined ? '20px' : '16px')};

  padding-bottom: ${({multiline}) => (multiline ? majorScale(1, 'px') : 0)};
  padding-top: ${({multiline}) => (multiline ? majorScale(1, 'px') : 0)};

  padding-horizontal: ${({$isUnderlined}) => {
    return $isUnderlined ? 0 : majorScale(1, 'px');
  }};

  height: ${({multiline}) => (multiline ? '88px' : '44px')};

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

  border-top-width: ${({$isUnderlined}) => ($isUnderlined ? 0 : '1px')};
  border-right-width: ${({$isUnderlined}) => ($isUnderlined ? 0 : '1px')};
  border-left-width: ${({$isUnderlined}) => ($isUnderlined ? 0 : '1px')};
`;

// Component
export const TextInput: React.FC<IProps> = ({
  label,
  required,
  disabled,
  placeholder,
  isUnderlined,
  onBlur,
  onChange,
  onFocus,
  ...props
}): React.ReactElement => {
  // Hooks
  const theme = useTheme();

  // State
  const [isFocused, setIsFocused] = useState<boolean>(false);

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
      <StyledLabel
        muted={isUnderlined}
        $isSmallFont={isUnderlined}
        testID="input-label">
        {label}{' '}
        {required && (
          <StyledLabelAsterisk
            $isSmallFont={isUnderlined}
            testID="input-label-asterisk">
            *
          </StyledLabelAsterisk>
        )}
      </StyledLabel>
      <StyledInput
        testID="input"
        $isFocused={isFocused}
        $isUnderlined={isUnderlined}
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
