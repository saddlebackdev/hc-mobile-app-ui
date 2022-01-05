// Modules
import {ReactElement} from 'react';

// Styled Tile Container
export interface IStyledTileContainer {
  $isCentered: boolean;
  $color?: string;
}
export interface IStyledTileContent {
  $isCentered: boolean;
}
export interface IStyledTileTitle {
  $isCentered: boolean;
}

// Styled Tile
export interface IStyledTile {
  $width: number;
  $height: number;
  $disabled?: boolean;
}

// Item
export interface IItem {
  /** Unique ID for the tile. */
  id: string | number;

  /** Size in pixels to be used as the width and height of the tile. */
  size?: number;

  /** A React element to be rendered inside tile. */
  content?: ReactElement;

  /** Color of the tile. Should be a color name from the theme. Defaults to secondaryDark. */
  color?: string;

  /** Title for the tile. */
  title: string;

  /** Function to be called when the tile is pressed. */
  onPress?: any;

  /** Flag to determine whether the tile is active or disabled. */
  disabled?: boolean;

  /** Flag to determine whether the tile is visible or not. */
  hidden?: boolean;
}

// Props
export interface IProps {
  /** Arary of tiles to be rendered. */
  items: Array<IItem>;

  /** Center the tile items both horizontally and vertically. */
  centered?: boolean;

  /** Number of colums to be rendered. */
  columns?: number;
}
