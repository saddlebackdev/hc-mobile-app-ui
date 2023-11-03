// Modules
import {ReactElement} from 'react';

export interface IStyledPhoto {
  $radius: number;
}
// Item
export interface IProps {
  /** URL of photo to be shown on the left. */
  photoUrl?: string;

  /** Border radius of the Card. */
  radius?: number;

  /** Fallback photo in case photoUrl is not present. */
  fallbackImage?: any;

  /** placeHolder Image for placeholder. */
  placeHolderImage?: any;

  /** Title for this list item. */
  title: string;

  /** Subtitle for this list item. */
  subTitle?: string;

  /** eventDate for this list item. */
  eventDate?: string;

  /** eventTime for this list item. */
  eventTime?: string;

  /** Subtitle for this list item. */
  timePeriod?: ReactElement;

  /** Description for this list item. */
  description?: string;

  /** List of tags for this item. */
  tags?: Array<string>;

  /** Function to be called when the item is pressed. */
  onPress: any;

  /** A React element to be rendered below the card photo. */
  marker?: ReactElement;
}
