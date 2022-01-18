// Styled Parent
export interface IStyledParent {
  $horizontalPadding?: number;
}

// Styled Child Container
export interface IStyledChildContainer {
  $horizontalPadding?: number;
}

// Styled Child
export interface IStyledChild {
  $isLastChild?: boolean;
  $horizontalPadding?: number;
}

// Parent Item Props
export interface IParentItemProps {
  /** Function to be called when this item is pressed. */
  onPress: any;

  /** Label for this item. */
  label: string;

  /** */
  horizontalPadding?: number;
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

  /** Horizontal padding for parent item. */
  parentPadding?: number;

  /** Horizontal padding for child item. */
  childPadding?: number;
}
