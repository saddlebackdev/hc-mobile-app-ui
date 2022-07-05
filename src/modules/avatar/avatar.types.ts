// Modules
import React from 'react';
import {ImageProps} from 'react-native';

// Styled Wrapper
export interface IStyledWrapper {
  onPress?: any;

  $size: number;
}

// Styled Initials Wrapper
export interface IStyledInitialsWrapper {
  $borderRadius: number;
}
export interface IStyledInitialsText {
  $size: number;
}

// Styled Marker
export interface IStyledMarker {
  $offsetBottom: number;
  $offsetRight: number;
}

// Styled Image
export interface IStyledImage extends ImageProps {
  onPress?: any;

  $borderRadius: number;
}

// Props
export interface IProps {
  /** URL of the image */
  uri?: string | null;

  /** React element to be rendered over the bottom-right corner of the image/icon. */
  marker?: React.ReactElement;

  /** Position of marker from right side. */
  markerOffsetRight?: number;

  /** Size of the avatar. */
  size?: 'tile' | 'profile' | number;

  /** Position of marker from bottom. */
  markerOffsetBottom?: number;

  /** Renders a white icon instead of a black. */
  inversed?: boolean;

  /** Adds border radius of the specified size. */
  radius?: 'none' | 'small' | 'full';

  /** Shows the initials as placeholder when image is unavailable. */
  initials?: string | null;

  /** Function to be called when the avatar is pressed. */
  onPress?: any;
}
