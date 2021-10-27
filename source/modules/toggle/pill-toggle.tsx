// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {IProps, IStyledWrapper, IStyledItemWrapper} from './pill-toggle.types';

// Shared
import Text from '../text/text';
import {majorScale, minorScale} from '../scales';

// Styles
const StyledWrapper = Styled.View<IStyledWrapper>`
  display: flex;
  flex-direction: row;
`;
const StyledItemWrapper = Styled.TouchableOpacity<IStyledItemWrapper>`
  background: ${({$isSelected, $isDisabled, theme}) => {
    if ($isSelected) {
      if ($isDisabled) {
        return theme.colors.grayThree;
      }

      return theme.colors.primaryLight;
    }

    if ($isDisabled) {
      return theme.colors.grayTwo;
    }

    return theme.colors.white;
  }};

  border: 1px solid ${({$isDisabled, $isSelected, theme}) => {
    if ($isDisabled) {
      return theme.colors.grayThree;
    }
    if ($isSelected) {
      return theme.colors.primaryLight;
    }

    return theme.colors.grayThree;
  }};

  border-right-width: ${({$isLastChild}) => ($isLastChild ? '1px' : 0)}

  border-top-left-radius: ${({$isFirstChild}) => {
    return $isFirstChild ? majorScale(2) : 0;
  }};

  border-top-right-radius: ${({$isLastChild}) => {
    return $isLastChild ? majorScale(2) : 0;
  }};

  border-bottom-left-radius: ${({$isFirstChild}) => {
    return $isFirstChild ? majorScale(2) : 0;
  }};

  border-bottom-right-radius: ${({$isLastChild}) => {
    return $isLastChild ? majorScale(2) : 0;
  }};
`;
const StyledItemLabel = Styled(Text)`
  font-size: ${({theme}) => theme.typography.sizes.small}px;
  padding-horizontal: ${majorScale(2)};
  padding-vertical: ${minorScale(2)};
`;

// Component
export const PillToggle: React.FC<IProps> = ({
  disabled: isToggleDisabled,
  selected,
  options,
}): React.ReactElement => {
  return (
    <StyledWrapper $isDisabled={isToggleDisabled}>
      {options.map((option, ndx) => {
        const isSelected = option.value === selected;

        const isFirstChild = ndx === 0;
        const isLastChild = options.length - 1 === ndx;

        const _onPressItem = () => {
          if (isToggleDisabled || option.disabled) {
            return;
          }

          option.onPress(option.value);
        };

        return (
          <StyledItemWrapper
            key={option.label}
            activeOpacity={0.75}
            $isDisabled={isToggleDisabled || option.disabled}
            $isFirstChild={isFirstChild}
            $isLastChild={isLastChild}
            $isSelected={isSelected}
            onPress={_onPressItem}>
            <StyledItemLabel
              isMuted={isToggleDisabled || option.disabled || !isSelected}
              $isDisabled={isToggleDisabled || option.disabled}
              inversed={isSelected}>
              {option.label}
            </StyledItemLabel>
          </StyledItemWrapper>
        );
      })}
    </StyledWrapper>
  );
};

// Exports
export default PillToggle;
