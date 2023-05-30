// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {IProps, IStyledWrapper} from './chip.types';

// Shared
import Text from '../text/text';
import Icon from '../icon/icon';
import {LayoutUtils} from '../utilities';

// Styles
const StyledWrapper = Styled.View<IStyledWrapper>`
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  align-items: center;

  background-color: ${({theme, $color}) => $color || theme.colors.grayFour};

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
  ({label, color, onPress}): React.ReactElement => (
    <StyledWrapper $color={color} testID="chip">
      <StyledLabel testID="chip-label">{label}</StyledLabel>

      {onPress && (
        <StyledCloseButton
          onPress={onPress}
          testID="chip-close-button"
          hitSlop={LayoutUtils.addHitSlop(6)}>
          <Icon type="closeCircle" size={16} color="white" />
        </StyledCloseButton>
      )}
    </StyledWrapper>
  ),
);

// Properties
Chip.displayName = 'Chip';

// Exports
export default Chip;
