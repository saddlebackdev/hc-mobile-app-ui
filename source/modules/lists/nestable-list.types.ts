// Styled Child
export interface IStyledChild {
  $isLastChild?: boolean;
}

// Item Child
export interface IItemChild {
  id: string | number;
  disabled?: boolean;
  onPress: any;
  label: string;
}

// Item
export interface IItem {
  id: string | number;
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
