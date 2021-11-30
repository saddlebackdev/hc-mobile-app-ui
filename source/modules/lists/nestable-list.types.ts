// Styled Child
export interface IStyledChild {
  $isLastChild?: boolean;
}

// Item Child
export interface IItemChild {
  id: string;
  disabled?: boolean;
  onPress: any;
  label: string;
}

// Item
export interface IItem {
  id: string;
  label: string;
  children?: Array<IItemChild>;
  disabled?: boolean;
  onPress: any;
}

// Props
export interface IProps {
  /**  */
  items: Array<IItem>;
}
