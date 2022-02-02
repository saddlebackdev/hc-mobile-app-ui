// Modules
import 'styled-components/native';

// Types
import {ITheme} from '../modules/theming/theme-provider.types';

// Styled Components
declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

// SVG Files
declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
