// Modules
import * as React from 'react';
import Styled from 'styled-components/native';
import Modal from 'react-native-modal';
import {
  Animated,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

// Props
import {IProps} from './filter-drawer.types';

// Shared
import Link from '../link/link';
import Button from '../button/button';
import ButtonGroup from '../button-group/button-group';
import Icon from '../icon/icon-external';
import Heading from '../heading/heading';
import {majorScale} from '../scales';

// Images
import IconCloseXCircle from '../../images/close-x-circle.svg';
import IconChevronLeft from '../../images/chevron-left.svg';

// Styles
export const Wrapper = Styled.View`
  width: 100%; height: 100%;
  backgroundColor: ${({theme}) => theme.colors.white};
  margin-top: ${majorScale(12)}px;
  borderTopRightRadius: 12px;
  borderTopLeftRadius: 12px;
  overflow: hidden;
`;
export const CloseButtonWrapper = Styled.View`
  position: absolute;
  maxWidth: 32px; maxHeight: 32px;
  right: ${majorScale(1)}px;
  top: ${majorScale(1)}px;
  zIndex: 10;
`;
export const SectionWrapper = Styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items flex-start;
`;
export const Header = {
  Wrapper: Styled.View`
    width: 100%;
    justify-content: flex-start;
    padding-horizontal: ${majorScale(2)}px;
    padding-bottom: ${majorScale(4)}px;
    padding-top: ${majorScale(3)}px;
  `,
  Title: Styled(Heading)`
    padding-right: ${majorScale(2)}px;
    margin-bottom: ${majorScale(1)}px;
  `,
  Action: Styled.View``,
  BackAction: Styled.View`
    flex-direction: row;
    margin-left: -${majorScale(0.25)}px;
    align-items: center;
  `,
  BackActionTitle: Styled.View`
    margin-left: ${majorScale(1)}px;
  `,
};
export const ContentWrapper = Styled.View`
  width: 100%; height: 100%;
  flexGrow: 1;
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
  padding-bottom: ${majorScale(8)}px;
`;
export const SecondaryViewHeader = {
  Wrapper: Styled.View``,
  ActionWrapper: Styled.View``,
  TitleWrapper: Styled.View``,
};

// Dimensions
const {width: windowWidth} = Dimensions.get('window');

// Component
export const FilterDrawer: React.FC<IProps> = ({
  onCancel,
  onApplyFilters,
  onClearFilters,
  onBackToPrimaryContent = null,
  shouldShowCancelButton = false,
  shouldShowClearFiltersButton = false,
  shouldShowSecondaryContent = false,
  secondaryViewTitle = null,
  primaryChildren = null,
  secondaryChildren = null,
  isOpen = false,
  shouldShowFilterButton = true,
  onClose,
  onRequestClose,
  filterButtonLabel = 'Apply Filters',
  headerTitle = 'Filters',
  onLayout,
  stickySecondaryHeader = false,
}): React.ReactElement => {
  // Refs
  const modalRef = React.useRef(null);

  // State
  const [closeButtonOpacity] = React.useState(new Animated.Value(1));
  const [contentWrapperTranslateX] = React.useState(new Animated.Value(0));
  const [headerContentTranslateX] = React.useState(new Animated.Value(0));
  const [headerContentOpacity] = React.useState(new Animated.Value(1));
  const [headerBackOpacity] = React.useState(new Animated.Value(1));
  const [headerBackTranslateX] = React.useState(
    new Animated.Value(windowWidth),
  );

  // On Show Primary Content
  const onShowPrimaryContent = (): void => {
    Animated.parallel([
      // Content Wrapper
      Animated.timing(contentWrapperTranslateX, {
        toValue: 0,
        useNativeDriver: true,
        duration: 300,
      }),

      // Close Button
      Animated.timing(closeButtonOpacity, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }),

      // Header Content
      Animated.timing(headerContentTranslateX, {
        toValue: 0,
        useNativeDriver: true,
        duration: 300,
      }),
      Animated.timing(headerContentOpacity, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }),

      // Header Back
      Animated.timing(headerBackTranslateX, {
        toValue: -windowWidth,
        useNativeDriver: true,
        duration: 300,
      }),
      Animated.timing(headerBackOpacity, {
        toValue: 0,
        useNativeDriver: true,
        duration: 300,
      }),
    ]).start();
  };

  // On Show Secondary Content
  const onShowSecondaryContent = (): void => {
    Animated.parallel([
      // Header Back
      Animated.timing(headerBackOpacity, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }),
      Animated.timing(headerBackTranslateX, {
        toValue: 0,
        useNativeDriver: true,
        duration: 300,
      }),

      // Header Content
      Animated.timing(headerContentOpacity, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }),
      Animated.timing(headerContentTranslateX, {
        toValue: -windowWidth,
        useNativeDriver: true,
        duration: 300,
      }),

      // Close Button
      Animated.timing(closeButtonOpacity, {
        toValue: 0,
        useNativeDriver: true,
        duration: 300,
      }),

      // Content Wrapper
      Animated.timing(contentWrapperTranslateX, {
        toValue: -windowWidth,
        useNativeDriver: true,
        duration: 300,
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
  const AnimatedCloseWrapper =
    Animated.createAnimatedComponent(CloseButtonWrapper);

  const modalStyle = {margin: 0};

  return (
    <Modal
      ref={modalRef}
      isVisible={isOpen}
      onModalHide={onClose}
      onBackButtonPress={onRequestClose}
      hideModalContentWhileAnimating
      useNativeDriverForBackdrop
      style={modalStyle}
      useNativeDriver
      propagateSwipe>
      <Wrapper testID="drawer-wrapper">
        {/* Sections */}
        <SectionWrapper>
          {/* Content */}
          <AnimatedWrapper
            style={{transform: [{translateX: contentWrapperTranslateX}]}}>
            {/* Primary Content */}
            <PrimaryContentWrapper testID="drawer-primary-content">
              <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <Header.Wrapper>
                  <Animated.View
                    style={{
                      opacity: headerContentOpacity,
                      transform: [{translateX: headerContentTranslateX}],
                    }}>
                    <Header.Title variant="h2">{headerTitle}</Header.Title>

                    {shouldShowClearFiltersButton && (
                      <Header.Action testID="drawer-clear-filters-action">
                        <Link
                          onPress={onClearFilters}
                          label="Clear Filters"
                          small
                        />
                      </Header.Action>
                    )}
                  </Animated.View>
                </Header.Wrapper>

                {primaryChildren}
              </ScrollView>

              {/* Footer */}
              <FooterWrapper>
                <SafeAreaView>
                  <ButtonGroup>
                    {shouldShowCancelButton && (
                      <Button
                        color="secondary"
                        appearance="outline"
                        testID="drawer-cancel-filters-button"
                        onPress={onCancel}>
                        Cancel
                      </Button>
                    )}

                    {shouldShowFilterButton && (
                      <Button
                        color="success"
                        testID="drawer-apply-filters-button"
                        onPress={onApplyFilters}>
                        {filterButtonLabel}
                      </Button>
                    )}
                  </ButtonGroup>
                </SafeAreaView>
              </FooterWrapper>
            </PrimaryContentWrapper>
          </AnimatedWrapper>
          <AnimatedWrapper
            style={{transform: [{translateX: contentWrapperTranslateX}]}}>
            {/* Secondary Content */}
            <SecondaryContentWrapper testID="drawer-secondary-content">
              <ScrollView showsVerticalScrollIndicator={false} onLayout={onLayout} >
                {/* Header */}
                <Header.Wrapper>
                  <Animated.View
                    style={{
                      opacity: headerBackOpacity,
                      transform: [{translateX: headerBackTranslateX}],
                    }}>
                    <Header.BackAction testID="drawer-back-action">
                      <Link onPress={onBackToPrimaryContent}>
                        <Icon file={IconChevronLeft} />
                      </Link>

                      {secondaryViewTitle ? (
                        <Header.BackActionTitle>
                          <Heading variant="h2">{secondaryViewTitle}</Heading>
                        </Header.BackActionTitle>
                      ) : null}
                    </Header.BackAction>
                  </Animated.View>
                </Header.Wrapper>
                {!stickySecondaryHeader ? secondaryChildren : null}
              </ScrollView>
              {stickySecondaryHeader ? secondaryChildren : null}
            </SecondaryContentWrapper>
          </AnimatedWrapper>
        </SectionWrapper>

        {/* Close Button */}
        <AnimatedCloseWrapper style={{opacity: closeButtonOpacity}}>
          <TouchableOpacity
            testID="drawer-close-button"
            disabled={shouldShowSecondaryContent}
            onPress={onCloseModal}>
            <Icon file={IconCloseXCircle} size={32} />
          </TouchableOpacity>
        </AnimatedCloseWrapper>
      </Wrapper>
    </Modal>
  );
};

// Exports
export default React.memo(FilterDrawer);
