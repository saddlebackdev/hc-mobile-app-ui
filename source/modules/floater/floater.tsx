// Modules
import * as React from 'react';;
import Styled from 'styled-components/native';

// Types
import {IStyledWrapper, IProps} from './floater.types';

// Styles
const StyledWrapper = Styled.View<IStyledWrapper>`
  width: 100%;
  position: ${({$position}) => $position || 'absolute'};
  background-color: transparent;

  ${({$alignment}) => {
    if ($alignment === 'top') {
      return 'top: 0;';
    }
    if ($alignment === 'bottom') {
      return 'bottom: 0;';
    }
  }}

  ${({$paddingTop}) => {
    return typeof $paddingTop === 'number' && `padding-top: ${$paddingTop}px`;
  }}

  ${({$paddingRight}) => {
    return (
      typeof $paddingRight === 'number' && `padding-right: ${$paddingRight}px`
    );
  }}

  ${({$paddingBottom}) => {
    return (
      typeof $paddingBottom === 'number' &&
      `padding-bottom: ${$paddingBottom}px`
    );
  }}

  ${({$paddingLeft}) => {
    return (
      typeof $paddingLeft === 'number' && `padding-left: ${$paddingLeft}px`
    );
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
      $paddingTop={offsetTop}
      $paddingRight={offsetRight}
      $paddingBottom={offsetBottom}
      $paddingLeft={offsetLeft}>
      {children}
    </StyledWrapper>
  );
};

// Exports
export default FloatingActionButton;
