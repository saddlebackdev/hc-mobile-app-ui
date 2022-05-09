// Modules
import * as React from 'react';
import {
  Platform
} from 'react-native';
import Styled from 'styled-components/native';
import LinearGradientView from '../linear-gradient/linear-gradient-view';

// Types
import { IProps, FooterWrapperProp, HeaderWrapperProp } from './compact-card-list-item.types';

// Shared
import Heading from '../heading/heading';
import { minorScale } from '../scales';
import Icon from '../icon/icon-external';
import defaultTheme from '../theming/default-theme';

// Constants
const STANDARD_RADIUS = 8
const MAIN_WRAPPER_MARGIN = minorScale(1)
const ICON_BOX_SIZE = 38

const viewShadow = Platform.select({
  android: { elevation: 4 },
  ios: {
    shadowColor: defaultTheme.colors.grayFive,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});

// Styles
const StyledWrapper = Styled.View`
  margin-vertical: ${MAIN_WRAPPER_MARGIN}px;
`;

const StyledCardLink = Styled.TouchableOpacity``;

const StyledImageBackgroundWrapper = Styled.ImageBackground`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: ${ICON_BOX_SIZE / 2}px;
`;

const StyledInnerWrapper = Styled.View`
  flex-direction: row;
  border-radius: ${STANDARD_RADIUS}px;
  margin-left: ${minorScale(4)}px;    
`;

const StyledChildWrapper = Styled.View`
  flex: 1;
  padding: ${minorScale(2)}px;
`;

const StyledHeaderWrapper = Styled(Heading) <HeaderWrapperProp>`
  color: ${props => (props.innerWrapperBg ? props.theme.colors.white : `${props.titleColor}`)};
  margin-top: ${props => (props.headerElement ? `${MAIN_WRAPPER_MARGIN}px` : 0)};
`;

const StyledIconWrapper = Styled(Icon)``;

const StyledfooterWrapper = Styled.View<FooterWrapperProp>`
  margin-top: ${props => (props.footerElement ? `${MAIN_WRAPPER_MARGIN}px` : 0)}}
`;

const StyledLinearGradientWrapper = Styled(LinearGradientView)``;

export const CompactCardListItem: React.FC<IProps> = ({
  onPress,
  innerWrapperBg,
  leftGradientViewStyle,
  icon,
  headerElement,
  footerElement,
  title,
  titleColor
}): React.ReactElement => (
  <StyledWrapper testID={"compact-card"}>
    {/* Main Wrapper */}
    <StyledCardLink activeOpacity={0.75} testID="link" onPress={onPress}>
      {/* Background Image if exists */}
      {innerWrapperBg && <StyledImageBackgroundWrapper
        imageStyle={{ borderRadius: STANDARD_RADIUS }}
        source={innerWrapperBg}
        style={[viewShadow, { elevation: 0 }]}
      />}
      {/* Inner Wrapper */}
      <StyledInnerWrapper style={[viewShadow, { backgroundColor: innerWrapperBg ? 'transparent' : defaultTheme.colors.white, elevation: innerWrapperBg ? 0 : 4 }]}>
        {/* icon Box*/}
        <StyledLinearGradientWrapper
          gradientColors={leftGradientViewStyle.gradientColors}
          horizontal={leftGradientViewStyle.horizontal}
          viewStyle={{
            width: ICON_BOX_SIZE,
            height: ICON_BOX_SIZE,
            marginTop: 12,
            marginLeft: -ICON_BOX_SIZE / 2,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <StyledIconWrapper testID="icon" file={icon} size={16} color={defaultTheme.colors.white} />
        </StyledLinearGradientWrapper>
        {/* card contents*/}
        <StyledChildWrapper>
          {/* Sub Header Optional Child Components */}
          {headerElement}
          {/* Base Title Header Components */}
          <StyledHeaderWrapper testID="title" innerWrapperBg={innerWrapperBg} titleColor={titleColor} headerElement={headerElement} variant="h4">{title}</StyledHeaderWrapper>
          {/* Bottom Optional child Components */}
          <StyledfooterWrapper footerElement={footerElement}>{footerElement}</StyledfooterWrapper>
        </StyledChildWrapper>
      </StyledInnerWrapper>
    </StyledCardLink>
  </StyledWrapper>
);
export default CompactCardListItem;
