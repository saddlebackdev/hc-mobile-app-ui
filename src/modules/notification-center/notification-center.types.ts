// Group Wrapper
export interface IGroupWrapper {
  $hasBottomBorder?: boolean;
}

// Notification
export interface INotification {
  id: string | number;
  title: string;
  subtitle?: string;
  createDate: number;
  isUnread?: boolean;
  icon: any;
}

// Props
export interface IProps {
  /** List of notifications */
  notifications: Array<INotification>;

  /** If true, show the switch to enable/disable notifications. */
  showNotificationStatusSwitch: boolean;

  /** if true, enable/disable notification switch is set to true. */
  areNotificationsEnabled: boolean;

  /** Function to be called when notification switch is set to false. (On disable notifications) */
  onTurnOffNotifications: Function;

  /** Function to be called when notification switch is set to true. (On enable notifications) */
  onTurnOnNotifications: Function;

  /** React element to be used a the trigger to open and close the component. */
  triggerJsx: React.ReactElement;

  /** If true, shows a red dot on the trigger. */
  hasUnreadNotifications: boolean;

  /** Function to be called when a notification is clicked. */
  onPressNotification: (notification) => void;
}
