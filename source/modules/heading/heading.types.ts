// Props
export interface IProps {
  /** If true, inverses the color of text */
  inversed?: boolean;

  /** Determines the alignment of the text. Can be left, center or right. Defaults to left */
  alignment?: 'left' | 'center' | 'right';

  /** Determines the variant of the heading. Can be h1, h2, h3, h4, h5 or h6. Defaults to h1 */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
