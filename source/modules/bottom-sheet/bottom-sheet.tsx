// Modules
import * as React from 'react';
import {Animated, Dimensions, SafeAreaView} from 'react-native';
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

// Constants
const {height: SCREEN_HEIGHT} = Dimensions.get('screen');

// Styles
const StyledWrapper = Styled.View`
  width: 100%; height: 100%;
  padding-top: ${majorScale(8)}px;
  justify-content: flex-end;
  flex: 1;
`;
const StyledContainer = Styled.View`
  width: 100%; height: 100%;
  background: ${({theme}) => theme.colors.white};
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
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
const StyledFooterWrapper = Styled.View``;

// Component
export const BottomSheet: React.FC<IProps> = ({
  isOpen,
  onDismiss,
  children,
  header,
  footer,
}): React.ReactElement => {
  // Animations
  const animPanY = new Animated.Value(SCREEN_HEIGHT);
  const animSlideUpContainer = Animated.timing(animPanY, {
    duration: 400,
    useNativeDriver: true,
    toValue: 0,
  });
  const animSlideDownContainer = Animated.timing(animPanY, {
    duration: 350,
    toValue: SCREEN_HEIGHT,
    useNativeDriver: true,
  });

  const _onDismiss = () => {
    animSlideDownContainer.start(onDismiss);
  };

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        animSlideUpContainer.start();
      }, 400);
    } else {
      animSlideDownContainer.start();
    }
  }, [isOpen]);

  const translateY = animPanY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const modalStyle = {margin: 0};

  return (
    <Modal
      coverScreen
      hasBackdrop
      propagateSwipe
      useNativeDriver
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onDismiss={_onDismiss}
      onBackButtonPress={_onDismiss}
      isVisible={isOpen}
      style={modalStyle}>
      <StyledWrapper>
        <Animated.View style={{transform: [{translateY}]}}>
          <StyledContainer>
            {/* Close Button */}
            <StyledCloseWrapper
              activeOpacity={0.75}
              hitSlop={LayoutUtils.addHitSlop(12)}
              onPress={_onDismiss}>
              <Icon type="closeCircle" color="muted" />
            </StyledCloseWrapper>

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
              {footer && (
                <StyledFooterWrapper>
                  <SafeAreaView>{footer()}</SafeAreaView>
                </StyledFooterWrapper>
              )}
            </StyledSectionWrapper>
          </StyledContainer>
        </Animated.View>
      </StyledWrapper>
    </Modal>
  );
};

// Exports
export default BottomSheet;
