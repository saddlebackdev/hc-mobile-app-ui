// Modules
import React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components/native';

// Types
import {IProps} from './theme-provider.types';

// Default Theme
import {defaultTheme} from './default-theme';

// Component
export const ThemeProvider: React.FC<IProps> = ({
  children,
  theme,
}): React.ReactElement => {
  return (
    <StyledThemeProvider theme={theme || defaultTheme}>
      {children}
    </StyledThemeProvider>
  );
};

// Exports
export default ThemeProvider;
