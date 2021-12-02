// Styled Child
export interface IStyledChild {
  $isLastChild?: boolean;
}

// Parent Item Props
export interface IParentItemProps {
  onPress: any;
  label: string;
}

// Child Item Props
export interface IChildItemProps {
  onPress: any;
  isLastChild?: boolean;
  label: string;
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
