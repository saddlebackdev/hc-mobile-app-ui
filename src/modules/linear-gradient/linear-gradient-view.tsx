// Modules
import * as React from 'react';
import {Platform, StyleSheet} from 'react-native';
import Svg, {Defs, LinearGradient, Rect, Stop} from 'react-native-svg';
import Styled from 'styled-components/native';

// Types
import {IProps} from './linear-gradient-view.types';

// Shared
import defaultTheme from '../theming/default-theme';

// Constants
const STANDARD_RADIUS = 8;

const viewShadow = Platform.select({
  android: {elevation: 4},
  ios: {
    shadowColor: defaultTheme.colors.grayFive,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

// Styles
const StyledWrapper = Styled.View``;

// Component
export const LinearGradientView: React.FC<IProps> = ({
  gradientColors,
  radius = STANDARD_RADIUS,
  horizontal,
  viewStyle,
  ...props
}): React.ReactElement => (
  // main wrapper with shadow
  <StyledWrapper testID={'linear-gradient'} style={[viewShadow, viewStyle]}>
    {/* svg view wrapper */}
    <Svg style={StyleSheet.absoluteFillObject}>
      <Defs>
        {/* linear gradient background wrapper */}
        <LinearGradient
          id="grad"
          x1="0%"
          y1="0%"
          x2={horizontal ? '100%' : '0%'}
          y2={horizontal ? '0%' : '100%'}>
          {gradientColors?.map((item, index) => {
            return (
              <Stop key={index} offset={item.offset} stopColor={item.color} />
            );
          })}
        </LinearGradient>
      </Defs>
      <Rect width={'100%'} height={'100%'} rx={radius} fill="url(#grad)" />
    </Svg>
    {/* child element */}
    {props.children}
  </StyledWrapper>
);
export default LinearGradientView;
