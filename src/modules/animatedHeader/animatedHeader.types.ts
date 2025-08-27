import {Animated, ViewStyle} from 'react-native';

export interface IAnimatedProps {
  opacity?: Animated.AnimatedInterpolation<string | number>;
  translateY?: Animated.AnimatedInterpolation<string | number>;
}

export interface IAnimatedHeader {
  searchTerm?: string | undefined;
  scrollOffsetY: Animated.Value;
  tagHeight: number;
  restoreOldPositions: boolean;
  containerStyle: ViewStyle;
  itemStyle: ViewStyle;
  H_MAX_HEIGHT: number;
  children: React.ReactElement;
}
