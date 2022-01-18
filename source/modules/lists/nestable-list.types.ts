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
  /** A unique ID for this item. */
  id: string | number;

  /** If true, disables the item. Defaults to false */
  disabled?: boolean;

  /** Function to be called when this item is pressed. */
  onPress: any;

  /** Label for the item */
  label: string;
}

// Item
export interface IItem extends IItemChild {
  /**  */
  children?: Array<IItemChild>;
}

// Props
export interface IProps {
  /** List items to be shown. */
  items: Array<IItem>;
}
