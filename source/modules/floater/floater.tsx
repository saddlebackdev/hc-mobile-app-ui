// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {IStyledWrapper, IProps} from './floater.types';

// Styles
const StyledWrapper = Styled.View<IStyledWrapper>`
  position: ${({$position}) => $position || 'relative'};

  ${({$alignment}) => {
    if ($alignment === 'top') {
      return 'top: 0;';
    }
    if ($alignment === 'bottom') {
      return 'bottom: 0;';
    }
  }}

  ${({$marginTop}) => {
    return typeof $marginTop === 'number' && `margin-top: ${$marginTop}px`;
  }}

  ${({$marginRight}) => {
    return (
      typeof $marginRight === 'number' && `margin-right: ${$marginRight}px`
    );
  }}

  ${({$marginBottom}) => {
    return (
      typeof $marginBottom === 'number' && `margin-bottom: ${$marginBottom}px`
    );
  }}

  ${({$marginLeft}) => {
    return typeof $marginLeft === 'number' && `margin-left: ${$marginLeft}px`;
  }}
`;

// Component
export const FloatingActionButton: React.FC<IProps> = ({
  offsetTop,
  offsetRight,
  offsetBottom,
  offsetLeft,
  position,
  alignment,
  children,
}): React.ReactElement => {
  return (
    <StyledWrapper
      testID="floater"
      $position={position}
      $alignment={alignment}
      $marginTop={offsetTop}
      $marginRight={offsetRight}
      $marginBottom={offsetBottom}
      $marginLeft={offsetLeft}>
      {children}
    </StyledWrapper>
  );
};

// Exports
export default FloatingActionButton;
