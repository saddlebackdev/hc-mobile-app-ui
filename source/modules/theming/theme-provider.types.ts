// Theme
export interface ITheme {
  colors: {
    // Brand
    primaryLight: string;
    primaryDark: string;
    secondaryLight?: string;
    secondaryDark?: string;

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
    grayOne?: string;
    grayTwo?: string;
    grayThree?: string;
    grayFour?: string;
    grayFive?: string;
    graySix?: string;
  };
  typography: {
    // Sans
    sansRegular?: string;
    sansItalics?: string;
    sansSemiBold?: string;
    sansBold?: string;

    // Serif
    serifRegular?: string;
    serifItalics?: string;
    serifSemiBold?: string;
    serifBold?: string;

    // Mono
    monoRegular?: string;
    monoItalics?: string;
    monoSemiBold?: string;
    monoBold?: string;
  };
  spacing: {
    minorScale: number;
    majorScale: number;
  };
}

// Props
export interface IProps {
  children: React.ReactNode;
  theme: ITheme;
}
