// Item
export interface IItem {
  id: string | number;
  photoUrl?: string;
  title: string;
  subTitle?: string;
  description?: string;
  tags?: string | Array<string>;
}

// Props
export interface IProps {
  /**  */
  items: Array<IItem>;
}
