import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import Styled from 'styled-components/native';
import {majorScale} from '../scales';
import {IAnimatedProps, IAnimatedHeader} from './animatedHeader.types';

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
    top: 0;
    shadow-color: ${({theme}) => theme.colors.black};
    shadow-offset: {width: 0, height: 4};
    shadow-radius: 4.65;
    shadowOpacity: 0.3;
    elevation: 8;
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
  scrollOffsetY,
  tagHeight,
  containerStyle,
  itemStyle,
  H_MAX_HEIGHT,
  restoreOldPositions,
  children,
}): React.ReactElement => {
  const hMaxHeight = H_MAX_HEIGHT + tagHeight;

  let {opacity: newOpacity, translateY} = getNewInterpolationValue(
    hMaxHeight,
    scrollOffsetY,
  );

  if (restoreOldPositions) {
    newOpacity = oldOpacity;
    translateY = oldTranslateY;
  }

  const finalContainerStyle = StyleSheet.flatten([
    {
      transform: [{translateY}],
    },
    containerStyle,
  ]);

  const wrapperStyle = StyleSheet.flatten([{newOpacity}, itemStyle]);

  oldOpacity = newOpacity;
  oldTranslateY = translateY;

  return (
    <AnimatedContainer style={finalContainerStyle}>
      <AnimatedStyledItemWrapper style={wrapperStyle}>
        {children}
      </AnimatedStyledItemWrapper>
    </AnimatedContainer>
  );
};

export default AnimatedHeader;
