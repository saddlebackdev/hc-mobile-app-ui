// Modules
import {ImageProps} from 'react-native';

// Styled Wrapper
export interface IStyledWrapper {
  onPress?: any;
}

// Styled Image
export interface IStyledImage extends ImageProps {
  onPress?: any;
}

// Props
export interface IProps {
  /** URL of the image */
  uri: string | undefined;

  /** Function to be called when the avatar is pressed */
  onPress?: any;
}
