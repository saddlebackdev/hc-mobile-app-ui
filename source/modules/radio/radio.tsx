// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {
  IProps,
  IStyledWrapper,
  IStyledGroup,
  IStyledRadioMark,
} from './radio.types';

// Shared
import Text from '../text/text';
import {majorScale} from '../scales';

// Styles
const StyledWrapper = Styled.View<IStyledWrapper>`
  flex-direction: ${({$direction}) => {
    return $direction === 'vertical' ? 'column' : 'row';
  }};
`;
const StyledGroup = Styled.TouchableOpacity<IStyledGroup>`
  flex-direction: row;

  margin-right: ${({$direction, $isLastChild}) => {
    if ($direction === 'vertical') {
      return 0;
    }

    if ($isLastChild) {
      return 0;
    }

    return majorScale(2);
  }};

  margin-bottom: ${({$direction, $isLastChild}) => {
    if ($direction === 'horizontal') {
      return 0;
    }

    if ($isLastChild) {
      return 0;
    }

    return majorScale(2);
  }};
`;
const StyledRadioWrapper = Styled.View`
  width: 22px; height: 22px;
  background-color: ${({theme}) => theme.colors.white};

  align-items: center;
  justify-content: center;

  border-radius: 22px;
  border: 1px solid ${({theme}) => {
    return theme.colors.grayThree;
  }}
`;
const StyledRadioMark = Styled.View<IStyledRadioMark>`
  align-items: center;
  justify-content: center;
  width: 14px; height: 14px;
  border-radius: 22px;

  background-color: ${({$isDisabled, theme}) => {
    return $isDisabled ? theme.colors.grayFour : theme.colors.primaryLight;
  }};
`;
const StyledRadioLabelWrapper = Styled.View`
  padding-left: ${majorScale()};
  padding-top: 2px;
`;

// Component
export const Radio: React.FC<IProps> = ({
  onChange,
  selected,
  disabled: isRadioDisabled,
  direction,
  options,
}): React.ReactElement => {
  const touchableHitslop = {
    top: 12,
    right: 12,
    bottom: 12,
    left: 12,
  };

  return (
    <StyledWrapper $direction={direction}>
      {options.map((option, ndx) => {
        const _onPressOption = () => {
          if (isRadioDisabled || option.disabled) {
            return;
          }

          onChange(option.value);
        };

        const isSelected = option.value === selected;

        const isFirstElement = ndx === 0;
        const isLastElement = options.length - 1 === ndx;

        return (
          <StyledGroup
            key={option.label}
            hitSlop={touchableHitslop}
            onPress={_onPressOption}
            activeOpacity={option.disabled ? 1 : 0.75}
            $direction={direction}
            $isFirstChild={isFirstElement}
            $isLastChild={isLastElement}
            disabled={isRadioDisabled || option.disabled}>
            <StyledRadioWrapper>
              {isSelected && (
                <StyledRadioMark
                  $isDisabled={isRadioDisabled || option.disabled}
                />
              )}
            </StyledRadioWrapper>
            <StyledRadioLabelWrapper>
              <Text isMuted={isRadioDisabled || option.disabled}>
                {option.label}
              </Text>
            </StyledRadioLabelWrapper>
          </StyledGroup>
        );
      })}
    </StyledWrapper>
  );
};

// Exports
export default Radio;
