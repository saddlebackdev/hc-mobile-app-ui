// Styled Wrapper
export interface IStyledWrapper {
  $hasTopMargin: boolean;
  $hasBottomMargin: boolean;
}

// Notification
export interface IProps {
  /** Title of the notification. */
  title: string;

  /** Subtitle for the notification. */
  subtitle?: string;

  /** If true, shows a red dot alongside the title. */
  isUnread?: boolean;

  /** A custom icon to be rendered in the notification. */
  iconFile?: any;

  /** Function to be called when pressed. */
  onPress?: (notification) => void;
}
