// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {
  IProps,
  IStyledWrapperProps,
  IStyledCheckboxWrapperProps,
  IStyledCheckboxMarkWrapperProps,
} from './checkbox.types';

// Shared
import Icon from '../icon/icon';
import Text from '../text/text';
import {majorScale} from '../scales';

// Styles
const StyledWrapper = Styled.TouchableOpacity<IStyledWrapperProps>`
  flex-direction: row;
`;
const StyledCheckboxWrapper = Styled.View<IStyledCheckboxWrapperProps>`
  width: 24px; height: 24px;
  border-radius: 3px;
  overflow: hidden;

  background-color: ${({$isDisabled, theme}) => {
    return $isDisabled ? theme.colors.grayTwo : theme.colors.white;
  }};

  border: 2px solid ${({$isChecked, $isDisabled, theme}) => {
    if ($isDisabled) {
      return theme.colors.grayThree;
    }

    return $isChecked ? theme.colors.primaryLight : theme.colors.grayThree;
  }};
`;
const StyledCheckboxMarkWrapper = Styled.View<IStyledCheckboxMarkWrapperProps>`
  align-items: center;
  justify-content: center;
  width: 24px; height: 24px;
  margin-left: -2px;
  margin-top: -2px;

  background-color: ${({$isDisabled, theme}) => {
    return $isDisabled ? theme.colors.grayTwo : theme.colors.primaryLight;
  }};
`;
const StyledDetailsWrapper = Styled.View`
  padding-top: 2px;
  padding-left: ${majorScale()};
`;
const StyledDetailsLabelWrapper = Styled.View`
  margin-bottom: 4px;
`;
const StyledDetailsHintWrapper = Styled.View``;

// Component
export const Checkbox: React.FC<IProps> = ({
  hint,
  label,
  isChecked = false,
  disabled,
  onPress,
}): React.ReactElement => {
  const touchableHitslop = {
    top: 12,
    right: 12,
    bottom: 12,
    left: 12,
  };

  return (
    <StyledWrapper
      disabled={disabled}
      activeOpacity={0.75}
      onPress={onPress}
      hitSlop={touchableHitslop}>
      <StyledCheckboxWrapper $isChecked={isChecked} $isDisabled={disabled}>
        {isChecked && (
          <StyledCheckboxMarkWrapper $isDisabled={disabled}>
            <Icon type="tick" color={disabled ? 'muted' : 'white'} size={14} />
          </StyledCheckboxMarkWrapper>
        )}
      </StyledCheckboxWrapper>

      <StyledDetailsWrapper>
        <StyledDetailsLabelWrapper>
          <Text>{label}</Text>
        </StyledDetailsLabelWrapper>
        <StyledDetailsHintWrapper>
          <Text isCaption>{hint}</Text>
        </StyledDetailsHintWrapper>
      </StyledDetailsWrapper>
    </StyledWrapper>
  );
};

// Exports
export default React.memo(Checkbox);
