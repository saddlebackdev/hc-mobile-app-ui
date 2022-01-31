// Action
export interface IAction {
  label: string;
}

// Props
export interface IProps {
  isOpen: boolean;
  intent?: 'danger' | 'success';

  leftButtonLabel?: string;
  leftButtonCallback: any;
  leftButtonColor?: string;

  rightButtonLabel?: string;
  rightButtonCallback?: any;
  rightButtonColor?: string;
}
