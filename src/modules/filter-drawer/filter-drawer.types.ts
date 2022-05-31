// Interfaces
export interface IProps {
  /** Function to be called when "Apply Filters" button is pressed. */
  onApplyFilters: Function;

  /** Function to be called when "Close" button is pressed. */
  onClearFilters: Function;

  /** Function to be called when "Back" button is pressed in secondary view. */
  onBackToPrimaryContent: Function;

  /** React elements to be rendered in the primary view. */
  primaryChildren: React.createElement;

  /** React elements to be rendered in the secondary view. */
  secondaryChildren: React.createElement;

  /** Boolean indicating whether the secondary view is visible. */
  shouldShowSecondaryContent: boolean;

  /** Function to be called when "Close" button is pressed. */
  onClose: Function;

  /** Boolean indicating whether the filter drawer is open. */
  isOpen: boolean;
}
