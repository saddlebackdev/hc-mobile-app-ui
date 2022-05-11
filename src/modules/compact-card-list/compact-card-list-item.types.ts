import * as React from 'react';
import {ImageSourcePropType, GestureResponderEvent} from 'react-native';

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

export interface InnerWrapperProp {
  /** background image of Card if exists or it will display white color */
  innerWrapperBg?: ImageSourcePropType;
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

  /** background image of Card if exists or it will display white color */
  innerWrapperBg?: ImageSourcePropType;

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

  /** gradient view style of left box */
  leftGradientViewStyle: GradientStyleProp;

  /** icon for left box */
  icon: string | null;

  /** title of Card */
  title: string;

  /** background image of Card if exists or it will display white color */
  innerWrapperBg?: ImageSourcePropType;

  /** on press event of Card */
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};
