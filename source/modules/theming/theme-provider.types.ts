// Theme
export interface ITheme {
  colors: {
    // Brand
    primaryLight: string;
    primaryDark: string;
    secondaryLight: string;
    secondaryDark: string;

    // Intents
    infoLight: string;
    infoDark: string;
    successLight: string;
    successDark: string;
    warningLight: string;
    warningDark: string;
    dangerLight: string;
    dangerDark: string;

    // Monotone
    white: string;
    black: string;
    grayOne: string;
    grayTwo: string;
    grayThree: string;
    grayFour: string;
    grayFive: string;
    graySix: string;
  };
  typography: {
    primary?: {
      regular: string;
      italics?: string;
      semiBold?: string;
      bold?: string;
    };
    secondary?: {
      regular: string;
      italics?: string;
      semiBold?: string;
      bold?: string;
    };
    tertiary?: {
      regular: string;
      italics?: string;
      semiBold?: string;
      bold?: string;
    };
    sizes: {
      small: number;
      regular: number;
      headings: {
        h1: number;
        h2: number;
        h3: number;
        h4: number;
        h5: number;
      };
    };
  };
  spacing: {
    minorScale: number;
    majorScale: number;
  };
}

// Props
export interface IProps {
  children: React.ReactNode;
  theme?: ITheme;
}
