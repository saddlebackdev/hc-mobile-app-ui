// Interfaces
import {ITheme} from './theme-provider.types';

// Default Theme
export const defaultTheme: ITheme = {
  colors: {
    // Brand
    primaryLight: '#00AEFF',
    primaryDark: '#1C93C4',
    secondaryLight: '#134174',
    secondaryDark: '#00254D',

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
    grayFive: '#384D5D',
    graySix: '#1C2352',
  },
  typography: {
    // Default System Fonts
  },
  spacing: {
    minorScale: 6,
    majorScale: 12,
  },
};

// Exports
export default defaultTheme;
