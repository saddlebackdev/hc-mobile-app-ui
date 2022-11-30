import {LayoutChangeEvent} from 'react-native';

// Interfaces
export interface IProps {
  /** Function to be called when "Cancel" button is pressed. */
  onCancel: () => void;

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

  /** Boolean indicating whether the "Cancel" button is visible. */
  shouldShowCancelButton?: boolean;

  /** Boolean indicating whether the "Clear Filters" button is visible. */
  shouldShowClearFiltersButton?: boolean;

  /** Boolean indicating whether the secondary view is visible. */
  shouldShowSecondaryContent: boolean;

  /** Title to be shown on the secondary view. */
  secondaryViewTitle?: string;

  /** Function to be called when "Close" button is pressed. */
  onClose: () => void;

  /** Function to be called when "Back button" button is pressed. */
  onRequestClose: () => void;
  /** Boolean indicating whether the filter drawer is open. */
  isOpen: boolean;

  /** String to show label of filter button. */
  filterButtonLabel?: string;

  /** Boolean indicating whether the filter button is visible. */
  shouldShowFilterButton?: boolean;

  /** Title to be shown on the header. */
  headerTitle?: string;

  /** Function to be called when "secondary screen is" mounted. */
  onLayout: ((event: LayoutChangeEvent) => void) | undefined;

  /** Boolean indicating whether secondary header needs to be sticky at top. */
  stickySecondaryHeader: boolean;
}
