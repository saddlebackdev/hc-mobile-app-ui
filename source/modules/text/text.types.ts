// Modules
import {TextProps} from 'react-native';

// Props
export interface IProps extends TextProps {
  /** If true, inverses the color of text */
  inversed?: boolean;

  /** If true, renders the text as muted */
  muted?: boolean;

  /** If true, renders the text as a subtitle */
  subtitle?: boolean;

  /** If true, renders the text as a caption */
  caption?: boolean;

  /** Font family to use. */
  font?: 'primary' | 'secondary' | string;

  /** Weight of the font. */
  weight?: 300 | 400 | 500 | 600 | 700 | 800;

  /** Determines the alignment of the text. Can be left, center or right. Defaults to left */
  alignment?: 'left' | 'center' | 'right';
}
