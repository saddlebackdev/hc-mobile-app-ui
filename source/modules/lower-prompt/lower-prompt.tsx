// Modules
import * as React from 'react';
import Styled from 'styled-components/native';
import Modal from 'react-native-modal';

// Types
import {IProps} from './lower-prompt.types';

// Shared
import Text from '../text/text';
import {majorScale} from '../scales';
import ButtonGroup from '../button/button-group';
import Button from '../button/button';

// Styles
const StyledWrapper = Styled.View`
  width: 100%;
  position: absolute;
  background: ${({theme}) => theme.colors.graySix};
  padding: ${majorScale(2)}px;
  border-radius: 8px;
  bottom: 0;
`;
const StyledMessage = Styled(Text)`
  margin-bottom: ${majorScale(2)}px;
`;
const StyledActions = Styled.View``;

// Component
export const LowerPrompt: React.FC<IProps> = ({
  isOpen,
  intent = 'grayFour',
  leftButtonLabel = 'Continue',
  rightButtonLabel,
  leftButtonCallback,
  rightButtonCallback,
  rightButtonColor,
  leftButtonColor,
  children,
}): React.ReactElement => {
  const hasLeftButton = leftButtonLabel && leftButtonCallback;
  const hasRightButton = rightButtonLabel && rightButtonCallback;

  const shouldShowButtonGroup = hasLeftButton && hasRightButton;

  return (
    <Modal
      isVisible={isOpen}
      style={{margin: majorScale(2)}}
      backdropOpacity={0.15}>
      <StyledWrapper testID="lower-prompt">
        <StyledMessage testID="message" weight="semiBold" inversed>
          {children}
        </StyledMessage>

        <StyledActions>
          {shouldShowButtonGroup ? (
            <ButtonGroup>
              {/* Left Button */}
              <Button
                testID="left-button"
                color={leftButtonColor || 'grayFour'}
                onPress={leftButtonCallback}>
                {leftButtonLabel}
              </Button>

              {/* Right Button */}
              <Button
                testID="right-button"
                color={intent || rightButtonColor || 'success'}
                onPress={rightButtonCallback}>
                {rightButtonLabel || ''}
              </Button>
            </ButtonGroup>
          ) : (
            <Button
              testID="left-button"
              color={leftButtonColor || 'grayFour'}
              onPress={leftButtonCallback}>
              {leftButtonLabel}
            </Button>
          )}
        </StyledActions>
      </StyledWrapper>
    </Modal>
  );
};

// Exports
export default LowerPrompt;
