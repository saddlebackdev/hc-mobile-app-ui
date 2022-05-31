// Interfaces
export interface IProps {
  /** Function to be called when "Apply Filters" button is pressed. */
  onApplyFilters: () => void;

  /** Function to be called when "Close" button is pressed. */
  onClearFilters: () => void;

  /** Function to be called when "Back" button is pressed in secondary view. */
  onBackToPrimaryContent: () => void;

  /** React elements to be rendered in the primary view. */
  primaryChildren: React.ReactElement;

  /** React elements to be rendered in the secondary view. */
  secondaryChildren: React.ReactElement;

  /** Boolean indicating whether the secondary view is visible. */
  shouldShowSecondaryContent: boolean;

  /** Function to be called when "Close" button is pressed. */
  onClose: () => void;

  /** Boolean indicating whether the filter drawer is open. */
  isOpen: boolean;
}
