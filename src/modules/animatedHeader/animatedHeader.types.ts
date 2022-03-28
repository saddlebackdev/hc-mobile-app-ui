import {Animated, ViewStyle} from 'react-native';

export interface IAnimatedProps {
  opacity?: Animated.AnimatedInterpolation;
  translateY?: Animated.AnimatedInterpolation;
}

export interface IAnimatedHeader {
  searchTerm?: string | undefined;
  scrollOffsetY: Animated.Value;
  tagHeight: number;
  containerStyle: ViewStyle;
  itemStyle: ViewStyle;
  H_MAX_HEIGHT: number;
  children: React.ReactElement;
}
