// Item
export interface ICardListItemProps {
  photoUrl?: string;
  title: string;
  subTitle?: string;
  description?: string;
  tags?: Array<string>;
  onPress: any;
}
export interface ICardListItem extends ICardListItemProps {
  id: string | number;
}

// Props
export interface IProps {
  /**  */
  items: Array<ICardListItem>;
}
