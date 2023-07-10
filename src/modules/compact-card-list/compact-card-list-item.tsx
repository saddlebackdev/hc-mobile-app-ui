// Modules
import * as React from 'react';
import {Platform, StyleSheet, ViewStyle} from 'react-native';
import Styled from 'styled-components/native';
import LinearGradientView from '../linear-gradient/linear-gradient-view';

// Types
import {
  IProps,
  FooterWrapperProp,
  HeaderWrapperProp,
} from './compact-card-list-item.types';

// Shared
import Heading from '../heading/heading';
import {minorScale} from '../scales';
import IconExternal from '../icon/icon-external';
import Icon from '../icon/icon';
import defaultTheme from '../theming/default-theme';

// Constants
const STANDARD_RADIUS = 8;
const MAIN_WRAPPER_MARGIN = minorScale(1.1);
const ICON_BOX_SIZE = 38;
const ICON_BOX_LEFT = 28;

const viewShadow = Platform.select({
  android: {elevation: 4},
  ios: {
    shadowColor: defaultTheme.colors.grayFive,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

const linearGradientViewStyle = StyleSheet.flatten<ViewStyle>({
  width: ICON_BOX_SIZE,
  height: ICON_BOX_SIZE,
  marginTop: 12,
  marginLeft: -ICON_BOX_SIZE / 2,
  justifyContent: 'center',
  alignItems: 'center',
});

const cardLinearGradientViewStyle = StyleSheet.flatten<ViewStyle>({
  height: '100%',
  alignItems: 'flex-end',
});

// Styles
const StyledWrapper = Styled.View`
  margin-vertical: ${MAIN_WRAPPER_MARGIN}px;
`;

const innerContainerStyle = StyleSheet.flatten([viewShadow]);

const StyledCardLink = Styled.TouchableOpacity(({theme}) => [
  `
    border-radius: ${STANDARD_RADIUS}px;
    margin-left: ${minorScale(4)}px;
    background-color: ${theme.colors.white}};
    `,
]);

const StyledCardGradientWrapper = Styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const StyledChildWrapper = Styled.View`
  flex: 1;
  padding: ${minorScale(2)}px;
  elevation: 4;
`;

const StyledHeaderWrapper = Styled(Heading)<HeaderWrapperProp>`
  margin-top: ${({headerElement}) => {
    return headerElement ? `${MAIN_WRAPPER_MARGIN}px` : 0;
  }};
`;

const StyledIconWrapper = Styled(IconExternal)``;

const StyledfooterWrapper = Styled.View<FooterWrapperProp>`
  margin-top: ${({footerElement}) => {
    return footerElement ? `${MAIN_WRAPPER_MARGIN}px` : 0;
  }};
`;

const StyledLinearGradientWrapper = Styled(LinearGradientView)``;

const StyledRightElement = Styled.View`
  padding-right: ${minorScale(2)}px;
`;

const StyledExpandLink = Styled.TouchableOpacity`
  justify-content: center;
  padding-right: ${minorScale(2)}px;
`;

// Styles
const ExpandableElement = Styled.View`
  padding-left: ${ICON_BOX_LEFT}px;
  padding-right: ${minorScale(2)}px;
`;

const StyledRedDotWrapper = Styled.View`
  background-color: red;
  width: ${minorScale(2)}px;
  height: ${minorScale(2)}px;
  border-radius: ${minorScale(2)}px;
  margin-top: ${minorScale(1)}px;
  margin-left: ${minorScale(1)}px;
`;

const StyledNameMarkerWrapper = Styled.View`
  flex-direction: row;
`;

const StyledSubWrapper = Styled.View`
     flex-direction: row;
`;

export const CompactCardListItem: React.FC<IProps> = ({
  onPress,
  cardGradientViewStyle,
  leftGradientViewStyle,
  icon,
  headerElement,
  footerElement,
  rightElement,
  expandedElement,
  title,
  redMarker,
  useShrinkExpandIcon = false,
}): React.ReactElement => {
  // State
  const [isCardExpanded, setCardExpanded] = React.useState<boolean>(false);

  // On Toggle
  const _onToggle = () => {
    setCardExpanded(!isCardExpanded);
  };

  React.useEffect(() => {
    setCardExpanded(false);
  }, []);

  const _getRightIcon = () => {
    if (isCardExpanded) {
      return useShrinkExpandIcon ? 'shrink' : 'chevronUp';
    }
    return useShrinkExpandIcon ? 'expand' : 'chevronDown';
  };

  return (
    <StyledWrapper testID={'compact-card'}>
      {/* Main Wrapper */}
      <StyledCardLink
        activeOpacity={0.75}
        testID="link"
        onPress={expandedElement ? () => _onToggle() : onPress}
        style={innerContainerStyle}>
        {/* Background Image if exists */}
        {cardGradientViewStyle && (
          <StyledCardGradientWrapper>
            <StyledLinearGradientWrapper
              gradientColors={cardGradientViewStyle.gradientColors}
              viewStyle={cardLinearGradientViewStyle}>
              <StyledIconWrapper
                file={icon}
                size={109}
                color={'rgba(255, 255, 255, 0.1)'}
              />
            </StyledLinearGradientWrapper>
          </StyledCardGradientWrapper>
        )}
        <StyledSubWrapper>
          {/* icon Box*/}
          <StyledLinearGradientWrapper
            gradientColors={leftGradientViewStyle.gradientColors}
            horizontal={leftGradientViewStyle.horizontal}
            viewStyle={linearGradientViewStyle}>
            <StyledIconWrapper
              testID="icon"
              file={icon}
              size={16}
              color={defaultTheme.colors.white}
            />
          </StyledLinearGradientWrapper>
          {/* card contents*/}
          <StyledChildWrapper>
            {/* Sub Header Optional Child Components */}
            {headerElement}
            {/* Base Title Header Components */}
            <StyledNameMarkerWrapper>
              <StyledHeaderWrapper
                testID="title"
                inversed={!!cardGradientViewStyle}
                headerElement={headerElement}
                variant="h4">
                {title}
              </StyledHeaderWrapper>
              {redMarker === true && <StyledRedDotWrapper />}
            </StyledNameMarkerWrapper>
            {/* Bottom Optional child Components */}
            <StyledfooterWrapper footerElement={footerElement}>
              {footerElement}
            </StyledfooterWrapper>
          </StyledChildWrapper>
          {/* Right Optional child Components */}
          {rightElement && (
            <StyledRightElement>{rightElement}</StyledRightElement>
          )}
          {expandedElement && (
            <StyledExpandLink onPress={() => _onToggle()}>
              <Icon type={_getRightIcon()} size={16} />
            </StyledExpandLink>
          )}
        </StyledSubWrapper>
        {isCardExpanded && (
          <ExpandableElement>{expandedElement}</ExpandableElement>
        )}
      </StyledCardLink>
    </StyledWrapper>
  );
};
export default CompactCardListItem;
