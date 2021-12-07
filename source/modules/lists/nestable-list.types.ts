// Styled Child
export interface IStyledChild {
  $isLastChild?: boolean;
}

// Parent Item Props
export interface IParentItemProps {
  /** Function to be called when this item is pressed. */
  onPress: any;

  /** Label for this item. */
  label: string;
}

// Child Item Props
export interface IChildItemProps {
  /** Function to be called when this item is pressed. */
  onPress: any;

  /**  */
  isLastChild?: boolean;

  /** Label for this item. */
  label: string;
}

// Item Child
export interface IItemChild {
  /** Function to be called when this item is pressed. */
  id: string | number;
  /** Function to be called when this item is pressed. */
  disabled?: boolean;
  /** Function to be called when this item is pressed. */
  onPress: any;
  /** Function to be called when this item is pressed. */
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
  /** List items to be shown. */
  items: Array<IItem>;
}
