// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {IButtonGroupProps, IButtonGroupItemProps} from './button-group.types';

// Shared
import {majorScale} from '../scales';

// Styles
export const StyledWrapper = Styled.View<IButtonGroupProps>`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
`;
export const StyledItem = Styled.View<IButtonGroupItemProps>`
  flex: 1;
  margin-right: ${({hasRightMargin}) => (hasRightMargin ? majorScale() : 0)};
  margin-left: ${({hasLeftMargin}) => (hasLeftMargin ? majorScale() : 0)};
`;

// Component
export const ButtonGroup: React.FC = ({children}) => {
  const numberOfChildren = React.Children.toArray(children).length;

  return (
    <StyledWrapper>
      {React.Children.map(children, (child, ndx) => {
        const isFirstChild = ndx === 0;
        const isLastChild = numberOfChildren - 1 === ndx;

        return (
          <StyledItem
            hasLeftMargin={!isFirstChild}
            hasRightMargin={!isLastChild}>
            {child}
          </StyledItem>
        );
      })}
    </StyledWrapper>
  );
};

// Exports
export default React.memo(ButtonGroup);
