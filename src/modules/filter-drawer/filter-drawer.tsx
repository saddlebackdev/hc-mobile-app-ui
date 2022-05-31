// Modules
import * as React from 'react';
import {IconCloseXCircle, IconChevronLeft} from 'hc-app-icons';
import Styled from 'styled-components/native';
import Modal from 'react-native-modal';
import {
  Animated,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {IProps} from './filter-drawer.types';

// Shared
import Link from '../link/link';
import Button from '../button/button';
import Icon from '../icon/icon-external';
import Heading from '../heading/heading';
import {majorScale} from '../scales';

// Styles
export const Wrapper = Styled.View`
  width: 100%; height: 100%;
  backgroundColor: ${({theme}) => theme.colors.white};
  margin-top: ${majorScale(12)}px;
  borderTopRightRadius: 12px;
  borderTopLeftRadius: 12px;
  overflow: hidden;
`;
export const CloseWrapper = Styled.View`
  position: absolute;
  width: 28px; height: 28px;
  right: ${majorScale(1.3)}px;
  top: ${majorScale(2)}px;
  zIndex: 1000;
`;
export const SectionWrapper = Styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items flex-start;
`;
export const Header = {
  Wrapper: Styled.View`
    width: 100%;
    justify-content: flex-start;
    padding: ${majorScale(2)}px;
    padding-top: ${majorScale(1.25)}px;
    height: 72px;
  `,
  Title: Styled(Heading)`
    padding-right: ${majorScale(2)}px;
    margin-top: 4px;
  `,
  Action: Styled.View``,
  BackAction: Styled.View`
    margin-top: ${majorScale(1.25)}px;
    margin-left: -${majorScale(0.25)}px;
  `,
};
export const ContentWrapper = Styled.View`
  width: 100%; height: 100%;
  justify-content: flex-start;
  flex-direction: row;
  flex: 1;
`;
export const FooterWrapper = Styled.View`
  margin-bottom: ${majorScale(8)}px;
  padding-horizontal: ${majorScale(2)}px;
  padding-vertical: ${majorScale(1)}px;
`;
export const PrimaryContentWrapper = Styled.View`
  width: 100%; height: 100%;
`;
export const SecondaryContentWrapper = Styled.View`
  width: 100%; height: 100%;
`;

// Dimensions
const {width: windowWidth} = Dimensions.get('window');

// Component
export const FilterDrawer: React.FC<IProps> = ({
  onApplyFilters,
  onClearFilters,
  onBackToPrimaryContent = null,
  shouldShowSecondaryContent = false,
  primaryChildren = null,
  secondaryChildren = null,
  isOpen = false,
  onClose,
}): React.ReactElement => {
  // Refs
  const modalRef = React.useRef(null);

  // State
  const [contentWrapperTranslateX] = React.useState(new Animated.Value(0));
  const [closeButtonOpacity] = React.useState(new Animated.Value(1));
  const [headerContentTranslateX] = React.useState(new Animated.Value(0));
  const [headerContentOpacity] = React.useState(new Animated.Value(1));
  const [headerBackTranslateX] = React.useState(
    new Animated.Value(windowWidth),
  );
  const [headerBackOpacity] = React.useState(new Animated.Value(1));

  // On Show Primary Content
  const onShowPrimaryContent = (): void => {
    Animated.parallel([
      // Content Wrapper
      Animated.spring(contentWrapperTranslateX, {
        toValue: 0,
        useNativeDriver: true,
        friction: 7,
      }),

      // Close Button
      Animated.spring(closeButtonOpacity, {
        toValue: 1,
        useNativeDriver: true,
        friction: 7,
      }),

      // Header Content
      Animated.spring(headerContentTranslateX, {
        toValue: 0,
        useNativeDriver: true,
        friction: 7,
      }),
      Animated.spring(headerContentOpacity, {
        toValue: 1,
        useNativeDriver: true,
        friction: 7,
      }),

      // Header Back
      Animated.spring(headerBackTranslateX, {
        toValue: -windowWidth,
        useNativeDriver: true,
        friction: 7,
      }),
      Animated.spring(headerBackOpacity, {
        toValue: 0,
        useNativeDriver: true,
        friction: 7,
      }),
    ]).start();
  };

  // On Show Secondary Content
  const onShowSecondaryContent = (): void => {
    Animated.parallel([
      // Header Back
      Animated.spring(headerBackOpacity, {
        toValue: 1,
        useNativeDriver: true,
        friction: 7,
      }),
      Animated.spring(headerBackTranslateX, {
        toValue: 0,
        useNativeDriver: true,
        friction: 7,
      }),

      // Header Content
      Animated.spring(headerContentOpacity, {
        toValue: 1,
        useNativeDriver: true,
        friction: 7,
      }),
      Animated.spring(headerContentTranslateX, {
        toValue: -windowWidth,
        useNativeDriver: true,
        friction: 7,
      }),

      // Close Button
      Animated.spring(closeButtonOpacity, {
        toValue: 0,
        useNativeDriver: true,
        friction: 7,
      }),

      // Content Wrapper
      Animated.spring(contentWrapperTranslateX, {
        toValue: -windowWidth,
        useNativeDriver: true,
        friction: 7,
      }),
    ]).start();
  };

  // On Close Modal
  const onCloseModal = () => {
    // @ts-ignore
    modalRef?.current?.close?.();

    // Call callback function
    onClose();
  };

  React.useEffect(() => {
    if (shouldShowSecondaryContent) {
      onShowSecondaryContent();
    } else {
      onShowPrimaryContent();
    }
  }, [shouldShowSecondaryContent]);

  const AnimatedWrapper = Animated.createAnimatedComponent(ContentWrapper);
  const AnimatedCloseWrapper = Animated.createAnimatedComponent(CloseWrapper);

  const modalStyle = {margin: 0};

  return (
    <Modal
      ref={modalRef}
      isVisible={isOpen}
      onModalHide={onClose}
      hideModalContentWhileAnimating
      useNativeDriverForBackdrop
      style={modalStyle}
      useNativeDriver
      propagateSwipe>
      <Wrapper testID="drawer-wrapper">
        {/* Close Button */}
        <AnimatedCloseWrapper style={{opacity: closeButtonOpacity}}>
          <TouchableOpacity
            testID="drawer-close-button"
            disabled={shouldShowSecondaryContent}
            onPress={onCloseModal}>
            <Icon file={IconCloseXCircle} />
          </TouchableOpacity>
        </AnimatedCloseWrapper>

        {/* Sections */}
        <SectionWrapper>
          {/* Header */}
          <Header.Wrapper>
            {shouldShowSecondaryContent ? (
              <Animated.View
                style={{
                  opacity: headerBackOpacity,
                  transform: [{translateX: headerBackTranslateX}],
                }}>
                <Header.BackAction testID="drawer-back-action">
                  <Link onPress={onBackToPrimaryContent}>
                    <Icon file={IconChevronLeft} />
                  </Link>
                </Header.BackAction>
              </Animated.View>
            ) : (
              <Animated.View
                style={{
                  opacity: headerContentOpacity,
                  transform: [{translateX: headerContentTranslateX}],
                }}>
                <Header.Title variant="h3">Filters</Header.Title>

                <Header.Action testID="drawer-clear-filters-action">
                  <Link onPress={onClearFilters} label="Clear Filters" small />
                </Header.Action>
              </Animated.View>
            )}
          </Header.Wrapper>

          {/* Content */}
          <AnimatedWrapper
            style={{transform: [{translateX: contentWrapperTranslateX}]}}>
            {/* Primary Content */}
            <PrimaryContentWrapper testID="drawer-primary-content">
              {primaryChildren}

              {/* Footer */}
              <FooterWrapper>
                <SafeAreaView>
                  <Button
                    color="success"
                    testID="drawer-apply-filters-button"
                    onPress={onApplyFilters}>
                    Apply Filters
                  </Button>
                </SafeAreaView>
              </FooterWrapper>
            </PrimaryContentWrapper>

            {/* Secondary Content */}
            <SecondaryContentWrapper testID="drawer-secondary-content">
              {secondaryChildren}
            </SecondaryContentWrapper>
          </AnimatedWrapper>
        </SectionWrapper>
      </Wrapper>
    </Modal>
  );
};

// Exports
export default React.memo(FilterDrawer);
