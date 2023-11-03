// Modules
import {ReactElement} from 'react';

// Styled Tile Icon Wrapper
export interface IStyledTileIconWrapper {
  $color?: string;
  $radius?: number;
}

export interface IStyledCardWrapper {
  $radius?: number;
}

// Props
export interface IProps {
  /** Flag to specify whether the card is open or not. */
  isOpen: boolean;

  /** Color of the tile on the left. Should be a color name from the theme. Defaults to secondaryDark. */
  tileColor?: string;

  /** A react element to be rendered inside the colored tile on the left.  */
  tileContent: ReactElement;

  /** Border radius of the tile. */
  radius?: number;

  /** Subtitle for the card */
  subTitle?: string;

  /** Title for the card. */
  title: string;

  /** Toggle function for the tile. */
  onPress: any;

  /** Inversed variant for the tile when collapsed. */
  inversed?: boolean;

  /** A react element to be rendered beside the card subtitle when closed. */
  subTitleMarker?: ReactElement;

  /** A react element to be rendered beside the card title when closed. */
  titleMarker?: ReactElement;
}
