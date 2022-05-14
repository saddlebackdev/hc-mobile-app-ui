// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {IProps, ITab, IStyledTouchable} from './people-tabs.types';

// Shared
import Text from '../text/text';
import {majorScale} from '../scales';

// Styles
export const StyledWrapper = Styled.View`
  flex-direction: row;
`;
export const StyledTouchable = Styled.TouchableOpacity<IStyledTouchable>`
  margin-left: ${({$isFirstChild}) => ($isFirstChild ? 0 : majorScale(1))}px;
  margin-right: ${({$isLastChild}) => ($isLastChild ? 0 : majorScale(1))}px;
  padding-bottom: ${majorScale(1)}px;

  border-bottom-width: 3px;
  border-bottom-color: ${({theme, $isActive}) => {
    return $isActive ? theme.colors.white : 'transparent';
  }};
`;
export const StyledLabel = Styled(Text)``;

// Component
export const PeopleTabs: React.FC<IProps> = ({
  items,
  onChange,
  selected,
}): React.ReactElement => (
  <StyledWrapper>
    {items?.map((item: ITab, ndx: number) => {
      const isFirstChild = ndx === 0;
      const isLastChild = ndx === items.length - 1;

      const isActive = item.value === selected;

      return (
        <StyledTouchable
          accessible
          key={item.label}
          testID={`people-tab-${item.value}`}
          accessibilityLabel={`people-tab-${item.value}`}
          onPress={() => onChange(item)}
          $isFirstChild={isFirstChild}
          $isLastChild={isLastChild}
          $isActive={isActive}>
          <StyledLabel inversed={isActive} variant="caption" weight="bold">
            {item.label}
          </StyledLabel>
        </StyledTouchable>
      );
    })}
  </StyledWrapper>
);

// Exports
export default PeopleTabs;
