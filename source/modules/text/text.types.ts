// Modules
import {TextProps} from 'react-native';

// Props
export interface IProps extends TextProps {
  inversed?: boolean;
  isMuted?: boolean;
  isSubtitle?: boolean;
  isCaption?: boolean;
  alignment?: 'left' | 'center' | 'right';
}
