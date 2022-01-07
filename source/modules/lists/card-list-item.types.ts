// Modules
import {ReactElement} from 'react';

// Item
export interface IProps {
  /** URL of photo to be shown on the left. */
  photoUrl?: string;

  /** Fallback photo in case photoUrl is not present. */
  fallbackImage?: any;

  /** Title for this list item. */
  title: string;

  /** Subtitle for this list item. */
  subTitle?: string;

  /** Description for this list item. */
  description?: string;

  /** List of tags for this item. */
  tags?: Array<string>;

  /** Function to be called when the item is pressed. */
  onPress: any;

  /** A React element to be rendered below the card photo. */
  marker?: ReactElement;
}
