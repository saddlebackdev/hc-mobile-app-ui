// Interfaces
import {ITheme} from './theme-provider.types';

// Default Theme
export const defaultTheme: ITheme = {
  colors: {
    // Brand
    primaryLight: '#00AEFF',
    primaryDark: '#1C93C4',
    secondaryLight: '#1C2530',
    secondaryDark: '#1C2530',

    // Intents
    infoLight: '#00AEEF',
    infoDark: '#1C93C4',
    successLight: '#54CD86',
    successDark: '#398F5D',
    warningLight: '#F99E49',
    warningDark: '#C96D20',
    dangerLight: '#EE4335',
    dangerDark: '#C2241A',

    // Monotone
    white: '#FFFFFF',
    black: '#000000',
    grayOne: '#F6F7F8',
    grayTwo: '#EDF1F5',
    grayThree: '#DBE0E3',
    grayFour: '#97A4AB',
    grayFive: '#38424D',
    graySix: '#1C2530',
  },
  typography: {
    faces: {
      primary: 'System',
      secondary: 'System',
    },
    sizes: {
      small: 14,
      regular: 16,
      text: {
        body1: 18,
        body2: 16,
        caption: 14,
        button: 16,
        subtitle1: 16,
        subtitle2: 14,
      },
      headings: {
        h1: 24,
        h2: 20,
        h3: 18,
        h4: 16,
        h5: 16,
        h6: 14,
      },
    },
  },
};

// Exports
export default defaultTheme;
