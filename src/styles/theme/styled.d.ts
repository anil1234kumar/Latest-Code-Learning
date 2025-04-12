import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      tertiary: string;
      danger: string;
      success: string;
      background: string;
      backgroundMain: string;
      white: string;
      main: string;
    };
    backgrounds: {
      white: string;
    };
  }
}
