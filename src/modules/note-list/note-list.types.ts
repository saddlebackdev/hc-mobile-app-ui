export interface IProps {
  /** Function to be called when clicked on card */
  onDotMenuClicked?: () => void;

  /** Pass note date */
  notedate?: any;

  /** Pass category Name */
  categoryName?: string | undefined;

  /** Pass note subject */
  subject?: string | undefined;

  /** Pass description */
  description?: string | undefined;

  /** Pass created By Name */
  createdByName?: string | undefined;

  /** Add Custom view on left icons */
  leftElement?: React.ReactElement | null | undefined;
}
