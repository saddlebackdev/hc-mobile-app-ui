// Types
import {IProps as ICardListItemProps} from './card-list-item.types';

export interface ICardListItem extends ICardListItemProps {
  /** A unique ID for this list item. */
  id: string | number;
}

// Props
export interface IProps {
  /** List items to be shown. */
  items: Array<ICardListItem>;
}
