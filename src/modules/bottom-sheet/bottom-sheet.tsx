// Modules
import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Styled from 'styled-components/native';
import Modal from 'react-native-modal';

// Types
import {IProps} from './bottom-sheet.types';

// Shared
import Icon from '../icon/icon';
import Text from '../text/text';
import Heading from '../heading/heading';
import {minorScale, majorScale} from '../scales';
import {LayoutUtils} from '../utilities';

// Styles
const StyledWrapper = Styled.View`
  width: 100%; height: 100%;
  backgroundColor: ${({theme}) => theme.colors.white};
  margin-top: ${
    StatusBar.currentHeight
      ? StatusBar.currentHeight > 24
        ? majorScale(12)
        : 50
      : majorScale(12)
  }px;
  borderTopRightRadius: 12px;
  borderTopLeftRadius: 12px;
  overflow: hidden;

`;
const StyledCloseWrapper = Styled.TouchableOpacity`
  position: absolute;
  width: 28px; height: 28px;
  right: ${majorScale(1.3)}px;
  top: ${majorScale(2)}px;
  zIndex: 1000;
`;
const StyledSectionWrapper = Styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items flex-start;
`;
const StyledHeader = {
  Wrapper: Styled.View`
    width: 100%;
    justify-content: flex-start;
    padding: ${majorScale(2)}px;

    border-bottom-color: ${({theme}) => theme.colors.grayThree};
    border-bottom-width: 0;
  `,
  Title: Styled(Heading)`
    padding-right: ${majorScale(2)}px;
    margin-top: 4px;
  `,
  Description: Styled(Text)`
    font-size: 14px;
    color: ${({theme}) => theme.colors.grayFour};
    margin-top: ${minorScale(0.75)}px;
  `,
};
const StyledContentWrapper = Styled.View`
  width: 100%;
  justify-content: flex-start;
  flex: 1;
`;
const StyledFooterWrapper = Styled.View`
  margin-bottom: ${majorScale(8)}px;
`;

// Component
export const BottomSheet: React.FC<IProps> = ({
  isOpen,
  onDismiss,
  showCloseButton = true,
  children,
  header,
  footer,
}): React.ReactElement => {
  // Refs
  const modalRef = React.useRef(null);

  // On Close Modal
  const onCloseModal = () => {
    // @ts-ignore
    modalRef?.current?.close?.();

    // Call callback function
    onDismiss();
  };

  const modalStyle = {margin: 0};

  return (
    <Modal
      ref={modalRef}
      isVisible={isOpen}
      onModalHide={onDismiss}
      hideModalContentWhileAnimating
      useNativeDriverForBackdrop
      style={modalStyle}
      useNativeDriver
      propagateSwipe>
      <StyledWrapper>
        {/* Close Button */}
        {showCloseButton && (
          <StyledCloseWrapper
            activeOpacity={0.75}
            hitSlop={LayoutUtils.addHitSlop(12)}
            onPress={onCloseModal}>
            <Icon type="closeCircle" color="muted" />
          </StyledCloseWrapper>
        )}

        {/* Sections */}
        <StyledSectionWrapper>
          {/* Header */}
          {header?.title && (
            <StyledHeader.Wrapper>
              <StyledHeader.Title variant="h3">
                {header.title}
              </StyledHeader.Title>

              {header?.description && (
                <StyledHeader.Description>
                  {header.description}
                </StyledHeader.Description>
              )}
            </StyledHeader.Wrapper>
          )}

          {/* Content */}
          <StyledContentWrapper>{children}</StyledContentWrapper>

          {/* Footer */}
          <StyledFooterWrapper>
            <SafeAreaView>{footer}</SafeAreaView>
          </StyledFooterWrapper>
        </StyledSectionWrapper>
      </StyledWrapper>
    </Modal>
  );
};

// Exports
export default BottomSheet;
