export interface MainTheme {
  colors: {
    black: string;
    white: string;
    dark50: string;
    dark100: string;
    dark200: string;
    dark300: string;
    dark400: string;
    dark500: string;
    dark600: string;
    dark700: string;
    dark800: string;
    dark900: string;
    one: string;
    two: string;
    green: string;
    three: string;
  };
  space: number[];
}

// theme.js
export const theme: MainTheme = {
  colors: {
    black: "#000e1a",
    white: "#fff",
    dark50: "#18181b",
    dark100: "#27272a",
    dark200: "#3f3f46",
    dark300: "#52525b",
    dark400: "#71717a",
    dark500: "#a1a1aa",
    dark600: "#d4d4d8",
    dark700: "#e4e4e7",
    dark800: "#f4f4f5",
    dark900: "#fafafa",
    one: "#BFAEA5",
    two: "#BFAEA5",
    green: "#478978",
    three: "#DED4CF",
  },
  space: [
    0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 48, 64, 80, 96, 128,
    160, 192, 224, 256, 288, 320, 384,
  ],
};
