// Modules
import {ReactElement} from 'react';

// Styled Tile Icon Wrapper
export interface IStyledTileIconWrapper {
  $color?: string;
}

// Props
export interface IProps {
  /** Flag to specify whether the card is open or not. */
  isOpen: boolean;

  /** Color of the tile on the left. Should be a color name from the theme. Defaults to secondaryDark. */
  tileColor?: string;

  /** A react element to be rendered inside the colored tile on the left.  */
  tileContent: ReactElement;

  /** Subtitle for the card */
  subTitle?: string;

  /** Title for the card. */
  title: string;

  /** Toggle function for the tile. */
  onPress: any;

  /** Inversed variant for the tile when collapsed. */
  inversed?: boolean;
}
