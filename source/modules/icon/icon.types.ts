// Props
export interface IProps {
  size?: number;

  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'muted'
    | 'white';

  type: 'chevronDown' | 'calendar' | 'date';
}
