// Modules
import 'styled-components/native';

// Types
import {ITheme} from './modules/theming/theme-provider.types';

// Styled Components
declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
