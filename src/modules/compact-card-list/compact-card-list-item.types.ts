import * as React from 'react';
import {GestureResponderEvent} from 'react-native';

// Gradient Color Prop
interface GradientColorProp {
  /** color of gradient */
  color: string;

  /** offset of gradient. the offset should be passed from 0 to 1 containing decimal values if pass multiple colors. */
  offset: number;
}

// Gradient Style Prop
interface GradientStyleProp {
  /** list of gradient colors */
  gradientColors: GradientColorProp[];

  /** gradient colors shown in horizontal */
  horizontal?: boolean;
}

export interface FooterWrapperProp {
  /** footer element of Card */
  footerElement?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

export interface HeaderWrapperProp {
  /** header element of Card */
  headerElement?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  /** color of the title */
  titleColor?: string;
}

// Compact Card List Item Props
export type IProps = {
  /** header element of Card */
  headerElement?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  /** footer element of Card */
  footerElement?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  /** right element of Card */
  rightElement?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  /** expanded element of Card */
  expandedElement?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;

  /** gradient view style of Card View */
  cardGradientViewStyle?: GradientStyleProp;

  /** gradient view style of left box */
  leftGradientViewStyle: GradientStyleProp;

  /** icon for left box */
  icon: string | null;

  /** title of Card */
  title: string;

  //red marker beside User Name
  redMarker?: boolean;

  /** on press event of Card */
  onPress?: ((event: GestureResponderEvent) => void) | undefined;

  /** get shrink and expand icon at the place of chevronUp and chevronDown */
  useShrinkExpandIcon?: boolean;
};
