// Modules
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import Styled from 'styled-components/native';
import Modal from 'react-native-modal';

// Types
import {IProps, IStyledWrapper} from './bottom-sheet.types';

// Shared
import Icon from '../icon/icon';
import Text from '../text/text';
import Heading from '../heading/heading';
import {minorScale, majorScale} from '../scales';
import {LayoutUtils} from '../utilities';

// Styles
const StyledWrapper = Styled.View<IStyledWrapper>`
  width: 100%; height: 100%;
  backgroundColor: ${({theme}) => theme.colors.white};
  borderTopRightRadius: 12px;
  borderTopLeftRadius: 12px;
  overflow: hidden;

  margin-top: ${({$hasFooter}) => majorScale($hasFooter ? 5.5 : 11)}px;
  margin-bottom: ${({$hasFooter}) => majorScale($hasFooter ? 0 : 5.5)}px;
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
const StyledContentWrapper = Styled.ScrollView`
  width: 100%;
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
  closeButtonTestId = 'bottom-sheet-close-button',
  stickyHeader,
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

  // Render Header
  const renderHeader = () => (
    <StyledHeader.Wrapper>
      <StyledHeader.Title variant="h3">{header?.title}</StyledHeader.Title>

      {header?.description && (
        <StyledHeader.Description>
          {header.description}
        </StyledHeader.Description>
      )}
    </StyledHeader.Wrapper>
  );

  const modalStyle = {margin: 0};
  const scrollViewStyle = {justifyContent: 'flex-start'};

  const shouldShowHeader = header?.title || header?.description;

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
      {/*
       * SafearaView is used to prevent the modal from being covered by the status bar, doing this
       * margin-top will take effect from bottom of the notch in iOS devices
       * https://github.com/react-native-modal/react-native-modal/issues/342
       */}
      <SafeAreaView>
        <StyledWrapper $hasFooter={!!footer}>
          {/* Close Button */}
          {showCloseButton && (
            <StyledCloseWrapper
              activeOpacity={0.75}
              hitSlop={LayoutUtils.addHitSlop(12)}
              testID={closeButtonTestId}
              onPress={onCloseModal}>
              <Icon type="closeCircle" color="muted" />
            </StyledCloseWrapper>
          )}
          {/* Sections */}
          <StyledSectionWrapper>
            {/* Sticky Header */}
            {shouldShowHeader && stickyHeader && renderHeader()}

            {/* Content */}
            <StyledContentWrapper
              contentContainerStyle={scrollViewStyle as any}>
              {/* Static Header */}
              {shouldShowHeader && !stickyHeader && renderHeader()}

              {children}
            </StyledContentWrapper>

            {/* Footer */}
            <StyledFooterWrapper>
              <SafeAreaView>{footer}</SafeAreaView>
            </StyledFooterWrapper>
          </StyledSectionWrapper>
        </StyledWrapper>
      </SafeAreaView>
    </Modal>
  );
};

// Exports
export default BottomSheet;
