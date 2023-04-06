// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {
  IProps,
  IStyledWrapper,
  IStyledGroup,
  IStyledRadioInner,
} from './radio.types';

// Shared
import Text from '../text/text';
import {LayoutUtils} from '../utilities';
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

    return majorScale(2, 'px');
  }};

  margin-bottom: ${({$direction, $isLastChild}) => {
    if ($direction === 'horizontal') {
      return 0;
    }

    if ($isLastChild) {
      return 0;
    }

    return majorScale(2, 'px');
  }};
`;

// TO DO: should we add styling for this View?
const StyledLeft = Styled.View``;

const StyledRadioOuter = Styled.View`
  width: 22px; height: 22px;
  background-color: ${({theme}) => theme.colors.white};

  align-items: center;
  justify-content: center;

  border-radius: 22px;
  border: 1px solid ${({theme}) => {
    return theme.colors.grayThree;
  }}
`;
const StyledRadioInner = Styled.View<IStyledRadioInner>`
  align-items: center;
  justify-content: center;
  width: 14px; height: 14px;
  border-radius: 22px;

  background-color: ${({$isDisabled, theme}) => {
    return $isDisabled ? theme.colors.grayFour : theme.colors.primaryLight;
  }};
`;
const StyledRadioLabelWrapper = Styled(Text)`
  padding-left: ${majorScale(1, 'px')};
  padding-top: 2px;
`;

// Component
export const Radio: React.FC<IProps> = React.memo(
  ({
    onChange,
    selected,
    disabled: isRadioDisabled,
    direction,
    options,
    optionContainerStyle,
  }): React.ReactElement => (
    <StyledWrapper $direction={direction} testID="radio">
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
        const shouldRenderLeftChild =
          !!option.leftChild && direction === 'vertical';

        return (
          <StyledGroup
            key={option.label}
            testID="radio-button"
            hitSlop={LayoutUtils.addHitSlop(12)}
            onPress={_onPressOption}
            activeOpacity={option.disabled ? 1 : 0.75}
            $direction={direction}
            $isFirstChild={isFirstElement}
            $isLastChild={isLastElement}
            style={
              optionContainerStyle ? optionContainerStyle(option.value) : {}
            }
            disabled={isRadioDisabled || option.disabled}>
            {shouldRenderLeftChild && (
              <StyledLeft>{option.leftChild}</StyledLeft>
            )}

            <StyledRadioOuter>
              {isSelected && (
                <StyledRadioInner
                  $isDisabled={isRadioDisabled || option.disabled}
                />
              )}
            </StyledRadioOuter>
            <StyledRadioLabelWrapper
              testID="radio-label"
              muted={isRadioDisabled || option.disabled}>
              {option.label}
            </StyledRadioLabelWrapper>
          </StyledGroup>
        );
      })}
    </StyledWrapper>
  ),
);

// Properties
Radio.displayName = 'Radio';

// Exports
export default Radio;
