// Styled Item
export interface IStyledItem {
  $isSelected?: boolean;
}

export interface IListItemProps {
  /** Label for this list item. */
  label: string;

  /** Flag to specify whether this item is selected or not. */
  isSelected: boolean;

  /** Function to be called when this item is pressed. */
  onPress: any;
}

// Item
export interface IItem {
  /** A unique ID for this item. */
  id: string | number;

  /** Label for this list item. */
  label: string;

  /** Function to be called when this item is pressed. */
  onPress: any;
}

// Props
export interface IProps {
  /** List items to be shown. */
  items: Array<IItem>;

  /** ID of the currently selected item. */
  selected: string | number | Array<string | number>;

  /** Flag to specify whether to show divider is shown or not. */
  noDivider?: boolean;
}
