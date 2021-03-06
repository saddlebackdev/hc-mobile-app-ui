// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {
  IProps,
  IButtonGroupProps,
  IButtonGroupItemProps,
} from './button-group.types';

// Shared
import {minorScale} from '../scales';

// Styles
export const StyledWrapper = Styled.View<IButtonGroupProps>`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
`;
export const StyledItem = Styled.View<IButtonGroupItemProps>`
  flex: 1;
  margin-right: ${({$hasRightMargin}) => {
    return $hasRightMargin ? minorScale(1) : 0;
  }}px;
  margin-left: ${({$hasLeftMargin}) => {
    return $hasLeftMargin ? minorScale(1) : 0;
  }}px;
`;

// Component
export const ButtonGroup: React.FC<IProps> = React.memo(({children}) => {
  const numberOfChildren = React.Children.toArray(children).length;

  return (
    <StyledWrapper testID="button-group">
      {React.Children.map(children, (child, ndx) => {
        if (!child) {
          return null;
        }

        const isFirstChild = ndx === 0;
        const isLastChild = numberOfChildren - 1 === ndx;

        return (
          <StyledItem
            testID="button-group-item"
            $hasLeftMargin={!isFirstChild}
            $hasRightMargin={!isLastChild}>
            {child}
          </StyledItem>
        );
      })}
    </StyledWrapper>
  );
});

// Properties
ButtonGroup.displayName = 'ButtonGroup';

// Exports
export default ButtonGroup;
