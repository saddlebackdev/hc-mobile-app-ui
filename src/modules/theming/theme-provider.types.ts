// Theme
export interface ITheme {
  /** Colors for the theme */
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

  /** Typography for the theme */
  typography: {
    faces: {
      // Primary
      primaryLight: string;
      primaryRegular: string;
      primarySemiBold: string;
      primaryBold: string;

      // Secondary
      secondaryRegular: string;
      secondaryLight: string;
      secondarySemiBold: string;
      secondaryBold: string;
    };
    sizes: {
      small: number;
      regular: number;
      text: {
        body1: number;
        body2: number;
        caption: number;
        button: number;
        subtitle1: number;
        subtitle2: number;
      };
      headings: {
        h1: number;
        h2: number;
        h3: number;
        h4: number;
        h5: number;
        h6: number;
      };
    };
  };
}

// Props
export interface IProps {
  theme?: ITheme;
}
