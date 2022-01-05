// Item
export interface ICardListItemProps {
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
}
export interface ICardListItem extends ICardListItemProps {
  /** A unique ID for this list item. */
  id: string | number;
}

// Props
export interface IProps {
  /** List items to be shown. */
  items: Array<ICardListItem>;
}
