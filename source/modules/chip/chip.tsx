// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {IProps} from './chip.types';

// Shared
import Text from '../text/text';
import Icon from '../icon/icon';

// Styles
const StyledWrapper = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  align-self: flex-start;

  background-color: ${({theme}) => theme.colors.grayFour};

  padding-vertical: 5px;
  padding-horizontal: 7px;

  border-radius: 20px;
`;
const StyledLabel = Styled(Text)`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.typography.sizes.small}px;
`;
const StyledCloseButton = Styled.TouchableOpacity`
  padding-left: 7px;
`;

// Component
export const Chip: React.FC<IProps> = React.memo(
  ({label, onPress}): React.ReactElement => {
    const touchableHitslop = {
      top: 6,
      right: 6,
      bottom: 6,
      left: 6,
    };

    return (
      <StyledWrapper testID="chip">
        <StyledLabel testID="chip-label">{label}</StyledLabel>
        <StyledCloseButton
          onPress={onPress}
          testID="chip-close-button"
          hitSlop={touchableHitslop}>
          <Icon type="closeCircle" size={16} color="white" />
        </StyledCloseButton>
      </StyledWrapper>
    );
  },
);

// Properties
Chip.displayName = 'Chip';

// Exports
export default Chip;
