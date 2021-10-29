// Modules
import {TextProps} from 'react-native';

// Props
export interface IProps extends TextProps {
  /** If true, inverses the color of text */
  inversed?: boolean;

  /** If true, renders the text as muted */
  isMuted?: boolean;

  /** If true, renders the text as a subtitle */
  isSubtitle?: boolean;

  /** If true, renders the text as a caption */
  isCaption?: boolean;

  /** Determines the alignment of the text. Can be left, center or right. Defaults to left */
  alignment?: 'left' | 'center' | 'right';
}
