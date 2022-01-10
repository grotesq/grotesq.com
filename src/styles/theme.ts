import { DefaultTheme } from "styled-components";

const deviceSizes: Record<string, string> = {
  'xs': "375px",
  'sm': "640px",
  'md': "768px",
  'lg': "1024px",
  'xl': "1280px",
  '2xl': "1536px"
};

const mediaQuery = (sizeName: string) => {
  return `screen and (max-width: ${deviceSizes[sizeName]})`
}

export const theme: DefaultTheme = {
  color: {
    'primary-blue': "#4a63fe",
  },
  mediaQuery
};
