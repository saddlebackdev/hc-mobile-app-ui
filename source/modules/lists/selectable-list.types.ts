// Styled Item
export interface IStyledItem {
  $isSelected?: boolean;
}

export interface IListItemProps {
  label: string;
  isSelected: boolean;
  onPress: any;
}

// Item
export interface IItem {
  id: string | number;
  label: string;
  onPress: any;
}

// Props
export interface IProps {
  /**  */
  items: Array<IItem>;

  /**  */
  selected: string | number;
}
