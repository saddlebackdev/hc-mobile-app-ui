// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {
  IProps,
  IStyledWrapperProps,
  IStyledCheckboxOuter,
  IStyledCheckboxInner,
} from './checkbox.types';

// Shared
import Icon from '../icon/icon';
import Text from '../text/text';
import {LayoutUtils} from '../utilities';
import {majorScale} from '../scales';

// Styles
const StyledWrapper = Styled.TouchableOpacity<IStyledWrapperProps>`
  flex-direction: row;
`;
const StyledCheckboxOuter = Styled.View<IStyledCheckboxOuter>`
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
const StyledCheckboxInner = Styled.View<IStyledCheckboxInner>`
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
  padding-top: 3px;
  padding-left: ${majorScale(1, 'px')};
`;
const StyledCheckboxLabel = Styled(Text)`
  font-size: ${({theme}) => theme.typography.sizes.small}px;
  margin-bottom: 4px;
`;
const StyledCheckboxHint = Styled(Text)``;

// Component
export const Checkbox: React.FC<IProps> = React.memo(
  ({hint, label, isChecked = false, disabled, onPress}): React.ReactElement => (
    <StyledWrapper
      testID="checkbox"
      disabled={disabled}
      activeOpacity={0.75}
      onPress={onPress}
      hitSlop={LayoutUtils.addHitSlop(12)}>
      <StyledCheckboxOuter $isChecked={isChecked} $isDisabled={disabled}>
        {isChecked && (
          <StyledCheckboxInner $isDisabled={disabled}>
            <Icon type="tick" color={disabled ? 'muted' : 'white'} size={12} />
          </StyledCheckboxInner>
        )}
      </StyledCheckboxOuter>

      {label || hint ? (
        <StyledDetailsWrapper>
          {label ? (
            <StyledCheckboxLabel testID="checkbox-label">
              {label}
            </StyledCheckboxLabel>
          ) : null}

          {hint ? (
            <StyledCheckboxHint muted testID="checkbox-hint" variant="caption">
              {hint}
            </StyledCheckboxHint>
          ) : null}
        </StyledDetailsWrapper>
      ) : null}
    </StyledWrapper>
  ),
);

// Properties
Checkbox.displayName = 'Checkbox';

// Exports
export default Checkbox;
