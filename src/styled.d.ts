// import original module declarations
import 'styled-components';

interface ColorMap {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: ColorMap;
      gray: ColorMap;
      red: ColorMap;
      green: ColorMap;
    };
    spacing: {
      '0': string;
      px: string;
      '0.5': string;
      '1': string;
      '1.5': string;
      '2': string;
      '2.5': string;
      '3': string;
      '3.5': string;
      '4': string;
      '5': string;
      '6': string;
      '7': string;
      '8': string;
      '9': string;
      '10': string;
      '11': string;
      '12': string;
      '14': string;
      '16': string;
      '20': string;
      '24': string;
      '28': string;
      '32': string;
      '36': string;
      '40': string;
      '44': string;
      '48': string;
      '52': string;
      '56': string;
      '60': string;
      '64': string;
      '72': string;
      '80': string;
      '96': string;
    };
  }
}
