// Modules
import * as React from 'react';
import Styled from 'styled-components/native';
import Modal from 'react-native-modal';

// Types
import {IProps} from './lower-prompt.types';

// Shared
import Text from '../text/text';
import {majorScale} from '../scales';
import ButtonGroup from '../button-group/button-group';
import Button from '../button/button';
import {generateTestAndAccessiblityProps} from '../utilities/props.util';

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
  testID,
  accessibilityLabel,
}): React.ReactElement => {
  const hasLeftButton = leftButtonLabel && leftButtonCallback;
  const hasRightButton = rightButtonLabel && rightButtonCallback;

  const shouldShowButtonGroup = hasLeftButton && hasRightButton;

  return (
    <Modal
      isVisible={isOpen}
      style={{margin: majorScale(2)}}
      backdropOpacity={0.15}>
      <StyledWrapper accessibilityLabel={accessibilityLabel} testID={testID}>
        <StyledMessage
          {...generateTestAndAccessiblityProps(
            'styled-message',
            testID,
            accessibilityLabel,
          )}
          weight="semiBold"
          inversed>
          {children}
        </StyledMessage>

        <StyledActions>
          {shouldShowButtonGroup ? (
            <ButtonGroup>
              {/* Left Button */}
              <Button
                {...generateTestAndAccessiblityProps(
                  'left-button',
                  testID,
                  accessibilityLabel,
                )}
                color={leftButtonColor || 'grayFour'}
                onPress={leftButtonCallback}>
                {leftButtonLabel}
              </Button>

              {/* Right Button */}
              <Button
                {...generateTestAndAccessiblityProps(
                  'right-button',
                  testID,
                  accessibilityLabel,
                )}
                color={intent || rightButtonColor || 'success'}
                onPress={rightButtonCallback}>
                {rightButtonLabel || ''}
              </Button>
            </ButtonGroup>
          ) : (
            <Button
              {...generateTestAndAccessiblityProps(
                'left-button',
                testID,
                accessibilityLabel,
              )}
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
