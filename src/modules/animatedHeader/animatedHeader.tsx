import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import Styled from 'styled-components/native';
import {DeviceUtils} from '../utilities';
import {majorScale} from '../scales';
import {IAnimatedProps, IAnimatedHeader} from './animatedHeader.types';

let oldSearchTerm: string | undefined = '';
let oldOpacity: Animated.AnimatedInterpolation | undefined;
let oldTranslateY: Animated.AnimatedInterpolation | undefined;

const getNewInterpolationValue = (
  hMaxHeight: number,
  scrollOffsetY: Animated.Value,
): IAnimatedProps => {
  const minScroll = 10;

  const clampedScrollY = scrollOffsetY?.interpolate({
    inputRange: [minScroll, minScroll + 1],
    outputRange: [0, 1],
    extrapolateLeft: 'clamp',
  });

  const minusScrollY = Animated.multiply(clampedScrollY, -1);

  const translateY = Animated.diffClamp(minusScrollY, -hMaxHeight, 0);

  const opacity = translateY.interpolate({
    inputRange: [-hMaxHeight, 0],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return {opacity, translateY};
};

const StyledContainer = Styled.View`
    position: 'absolute';
    left: 0;
    right: 0;
    shadowColor: ${({theme}) => theme.colors.grayOne};
    box-shadow: 4.65px 0px 4px black;
    backgroundColor: ${({theme}) => theme.colors.grayOne};
    paddingBottom: ${majorScale(1)}px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(StyledContainer);

const StyledItemWrapper = Styled.View`
    paddingTop: ${majorScale(1)}px;
    paddingHorizontal: ${majorScale(2)}px;
`;

const AnimatedStyledItemWrapper =
  Animated.createAnimatedComponent(StyledItemWrapper);

const AnimatedHeader: React.FC<IAnimatedHeader> = ({
  searchTerm,
  scrollOffsetY,
  tagHeight,
  containerStyle,
  itemStyle,
  H_MAX_HEIGHT,
  children,
}): React.ReactElement => {
  const hMaxHeight = H_MAX_HEIGHT + tagHeight;

  let {opacity, translateY} = getNewInterpolationValue(
    hMaxHeight,
    scrollOffsetY,
  );

  if (oldSearchTerm !== searchTerm) {
    opacity = oldOpacity;
    translateY = oldTranslateY;
  }

  const finalContainerStyle = StyleSheet.flatten([
    {
      shadowOpacity: 0.3,
      elevation: 8,
      top: DeviceUtils.isAndroid() ? 56 : 0,
      transform: [{translateY}],
    },
    containerStyle,
  ]);

  const searchBoxWrapperStyle = StyleSheet.flatten([{opacity}, itemStyle]);

  oldSearchTerm = searchTerm;
  oldOpacity = opacity;
  oldTranslateY = translateY;

  return (
    <AnimatedContainer style={finalContainerStyle}>
      <AnimatedStyledItemWrapper style={searchBoxWrapperStyle}>
        {children}
      </AnimatedStyledItemWrapper>
    </AnimatedContainer>
  );
};

export default AnimatedHeader;
