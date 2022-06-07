import type {CircleProps} from 'react-native-svg';

export interface UseAnimatedValueProps {
  value: number;
  initialValue?: number;
  radius?: number;
  maxValue?: number;
  activeStrokeWidth?: number;
  inActiveStrokeWidth?: number;
  clockwise?: boolean;
}

export interface UseCircleValuesProps {
  radius: number;
  activeStrokeWidth: number;
  inActiveStrokeWidth: number;
}

export type StrokeLineCapType = 'butt' | 'round' | 'square';

export type DashedStrokeConfigType = {
  /**
   * The total number of dashes to draw.
   */
  count: number;
  /**
   * The width of each dash.
   */
  width: number;
};

export type CircleGradientProps = {
  /**
   * active progress circle color. Use this to change the
   * color of the progress ring.
   *
   * @default '#2ecc71'
   */
  activeStrokeColor?: string;
  /**
   * active progress secondary color. Use this to provide a
   * gradient effect. The circle will be drawn with gradient
   * activeStrokeColor and activeStrokeSecondaryColor.
   *
   * @default null
   */
  activeStrokeSecondaryColor?: string | null;
};

export interface DashedCircleProps {
  circleCircumference: number;
  inActiveStrokeWidth: number;
  activeStrokeWidth: number;
  inactiveCircleRadius: number;
  activeCircleRadius: number;
  dashedStrokeConfig?: DashedStrokeConfigType;
}

export interface ProgressCircleProps {
  animatedCircleProps: CircleProps;
}

export interface MainViewProps {
  radius: number;
}

export interface IProgressValue {
  /**
   * progress percentage of the circle. Any change in
   * this value will trigger the animation.
   */
  value?: number;
  strokeColor?: string;
  clockwise?: boolean;
}

export interface IProps {
  /**
   * progress circle background color. Use this to
   * change the background color of the progress circle.
   *
   * @default 'transparent'
   */
  circleBackgroundColor?: string;
  /**
   * progress circle radius. This is useful if you want
   * to adjust the size of the progress circle.
   *
   * @default 60
   */
  radius?: number;
  /**
   * progress stroke line cap.
   */
  strokeLinecap?: StrokeLineCapType;
  /**
   * inactive progress circle color. Use this to change
   * the color of inactive circle.
   *
   * @default 'rgba(0,0,0,0.3)'
   */
  inActiveStrokeColor?: string;
  /**
   * inactive progress circle opacity value. This is useful if
   * you want to change the opacity of the inactive circle.
   *
   * @default 1
   */
  inActiveStrokeOpacity?: number;
  /**
   * active progress circle stroke width. Use this to change the
   * stroke width of the active progress circle.
   *
   * @default 10
   */
  activeStrokeWidth?: number;
  /**
   * inactive progress circle stroke width. Use this to change the
   * stroke width of the inactive progress circle.
   *
   * @default 10
   */
  inActiveStrokeWidth?: number;
  /**
   * This is useful if you want to display the progress circle as dashed lines.
   * The dashed stroke count and stroke width can be customized.
   * Based on these values and the radius of the circle,
   * the dash gap between each dashes will be calculated automatically.
   */
  dashedStrokeConfig?: DashedStrokeConfigType;
  /**
   * progress maximum value. The percentage calculation is
   * based on the maximum value provided.
   *
   * @default 100
   */
  maxValue?: number;
  /**
   * change direction of progress ring. By default the progress
   * ring will be drawn clockwise. If you want to draw the progress
   * ring counter clockwise, set this to false.
   *
   * @default true
   */
  clockwise?: boolean;

  progressValues: IProgressValue[];
}
