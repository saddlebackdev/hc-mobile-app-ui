// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {IProps, IStyledItemContent} from './icon-toggle.types';

// Shared
import Text from '../text/text';
import {majorScale, minorScale} from '../scales';

// Styles
const StyledWrapper = Styled.View`
  flex-direction: row;
`;
const StyledItem = Styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
const StyledItemContent = Styled.View<IStyledItemContent>`
  align-items: center;
  justify-content: center;
  width: 64px; height: 64px;
  border-radius: 64px;

  background: ${({$isSelected, $isDisabled, theme}) => {
    if ($isSelected) {
      if ($isDisabled) {
        return theme.colors.grayThree;
      }

      return theme.colors.white;
    }

    if ($isDisabled) {
      return theme.colors.grayTwo;
    }

    return theme.colors.white;
  }};

  box-shadow: 0 6px 12px ${({$isSelected, theme}) => {
    return $isSelected ? 'rgba(0, 0, 0, .15)' : theme.colors.white;
  }};
`;
const StyledItemLabel = Styled(Text)`
  padding-horizontal: ${majorScale(2, 'px')};
  padding-vertical: ${minorScale(2, 'px')};
`;

// Component
export const IconToggle: React.FC<IProps> = ({
  disabled: isToggleDisabled,
  selected,
  options,
}): React.ReactElement => {
  return (
    <StyledWrapper testID="icon-toggle">
      {options.map(option => {
        const isSelected = option.value === selected;

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
            testID="icon-toggle-button"
            activeOpacity={isDisabled ? 1 : 0.75}
            onPress={_onPressItem}>
            <StyledItemContent
              testID="icon-toggle-content"
              $isDisabled={isDisabled}
              $isSelected={isSelected}>
              {option.content(isSelected)}
            </StyledItemContent>

            <StyledItemLabel
              small
              weight={isSelected ? 'bold' : 'regular'}
              muted={isDisabled || !isSelected}
              testID="icon-toggle-label">
              {option.label}
            </StyledItemLabel>
          </StyledItem>
        );
      })}
    </StyledWrapper>
  );
};

// Exports
export default IconToggle;
