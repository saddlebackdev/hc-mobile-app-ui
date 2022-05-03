import {AccessibilityProps} from 'react-native';

// Props
export interface IProps extends AccessibilityProps {
  /** Determines if the prompt is open or not. */
  isOpen: boolean;

  /** Sets the color of the confirm button. */
  intent?: 'danger' | 'success';

  /** Label of the left button. */
  leftButtonLabel?: string;

  /** Function to be call when the left button is pressed. */
  leftButtonCallback: any;

  /** Color of the left button. */
  leftButtonColor?: string;

  /** Label of the right button. */
  rightButtonLabel?: string;

  /** Function to be call when the right button is pressed. */
  rightButtonCallback?: any;

  /** Color of the right button. This gets overridden if an "intent" is specified. */
  rightButtonColor?: string;

  /** Used to locate this view in end-to-end tests. */
  testID?: string;
}
