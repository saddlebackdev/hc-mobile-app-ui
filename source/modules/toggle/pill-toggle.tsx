// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {
  IProps,
  IStyledWrapper,
  IStyledItem,
  IStyledItemLabel,
} from './pill-toggle.types';

// Shared
import Text from '../text/text';
import {majorScale, minorScale} from '../scales';

// Styles
const StyledWrapper = Styled.View<IStyledWrapper>`
  display: flex;
  flex-direction: row;
`;
const StyledItem = Styled.TouchableOpacity<IStyledItem>`
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
    return $isFirstChild ? majorScale(2, 'px') : 0;
  }};

  border-top-right-radius: ${({$isLastChild}) => {
    return $isLastChild ? majorScale(2, 'px') : 0;
  }};

  border-bottom-left-radius: ${({$isFirstChild}) => {
    return $isFirstChild ? majorScale(2, 'px') : 0;
  }};

  border-bottom-right-radius: ${({$isLastChild}) => {
    return $isLastChild ? majorScale(2, 'px') : 0;
  }};
`;
const StyledItemLabel = Styled(Text)<IStyledItemLabel>`
  font-size: ${({theme}) => theme.typography.sizes.small}px;
  padding-horizontal: ${majorScale(2, 'px')};
  padding-vertical: ${minorScale(2, 'px')};
`;

// Component
export const PillToggle: React.FC<IProps> = ({
  disabled: isToggleDisabled,
  selected,
  options,
}): React.ReactElement => {
  return (
    <StyledWrapper $isDisabled={isToggleDisabled} testID="pill-toggle">
      {options.map((option, ndx) => {
        const isSelected = option.value === selected;

        const isFirstChild = ndx === 0;
        const isLastChild = options.length - 1 === ndx;

        const isDisabled = isToggleDisabled || option.disabled;

        const _onPressItem = () => {
          if (isDisabled) {
            return;
          }

          option.onPress(option.value);
        };

        return (
          <StyledItem
            key={option.label}
            testID="pill-toggle-button"
            activeOpacity={isDisabled ? 1 : 0.75}
            $isDisabled={isDisabled}
            $isFirstChild={isFirstChild}
            $isLastChild={isLastChild}
            $isSelected={isSelected}
            onPress={_onPressItem}>
            <StyledItemLabel
              $isDisabled={isDisabled}
              testID="pill-toggle-button-label"
              muted={isDisabled || !isSelected}
              inversed={isSelected}>
              {option.label}
            </StyledItemLabel>
          </StyledItem>
        );
      })}
    </StyledWrapper>
  );
};

// Exports
export default PillToggle;
