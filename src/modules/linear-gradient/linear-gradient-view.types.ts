import { StyleProp, ViewStyle } from "react-native"

// Gradient Color Prop
interface GradientColorProp {
  /** color of gradient */
  color: string;

  /** offset of gradient. the offset should be passed from 0 to 1 containing decimal values if pass multiple colors. */
  offset: number;
}

// Linear Gradient View Prop
export interface IProps {
  /** list of gradient colors */
  gradientColors: GradientColorProp[];

  /** style of gradient view */
  viewStyle?: StyleProp<ViewStyle> | undefined;

  /** radius of gradient view */
  radius?: number;

  /** gradient colors shown in horizontal */
  horizontal?: boolean;
}
