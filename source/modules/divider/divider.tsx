// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {IProps} from './divider.types';

// Styles
const StyledWrapper = Styled.View`
  width: 100%; height: 1px;
  background: ${({theme}) => theme.colors.grayThree};
`;

// Component
export const Divider: React.FC<IProps> = (): React.ReactElement => {
  return <StyledWrapper testID="divider" />;
};

// Exports
export default Divider;
