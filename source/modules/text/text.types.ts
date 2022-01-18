// Modules
import {TextProps} from 'react-native';

// Props
export interface IProps extends TextProps {
  /** If true, inverses the color of text */
  inversed?: boolean;

  /** If true, renders the text as muted */
  muted?: boolean;

  /** Determines the variant of the text. */
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'subtitle1'
    | 'subtitle2';

  /** Font family to use. */
  font?: 'primary' | 'secondary' | string;

  /** Renders the text in italics. */
  italic?: boolean;

  /** Weight of the font. */
  weight?: 400 | 600 | 700 | 'regular' | 'semiBold' | 'bold';

  /** Determines the alignment of the text. Can be left, center or right. Defaults to left */
  alignment?: 'left' | 'center' | 'right';
}
