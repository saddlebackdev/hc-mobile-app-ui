// Styled Body
export interface IStyledBody {
  $isVisible: boolean;
}

// Props
export interface IProps {
  /** Title for the accordion. */
  title: string;

  /** Renders the accordion in open state when true. */
  isOpen?: boolean;
}
