import { DefaultTheme, css } from 'styled-components';

const color = {
  'primary-blue': '#4a63fe',
  black: '#000000',
  white: '#ffffff',
};

const deviceSizes: Record<string, string> = {
  xs: '375px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

const mediaQueryMax = (sizeName: string) => {
  return `screen and (max-width: ${deviceSizes[sizeName]})`;
};

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const logoTitle = css`
  color: ${color['primary-blue']};
  font-size: 1.375rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 0.275rem;
  line-height: 1.5;
  @media ${(props) => props.theme.mediaQueryMax('sm')} {
    font-size: 1rem;
    letter-spacing: 0.2rem;
    line-height: 1.56;
  }
`;

const subTitleBlue = css`
  color: ${color['primary-blue']};
  font-size: 1.375rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

const subTitle1 = css`
  color: ${color['black']};
  font-family: 'Poppins', sans-serif;
  font-size: 3.125rem;
  font-weight: 600;
  line-height: 1.52;
  padding-bottom: 1.125rem;
  @media ${(props) => props.theme.mediaQueryMax('sm')} {
    font-size: 1.875rem;
  }
`;

const background = {
  gradient70: 'linear-gradient(rgb(26, 28, 35, 0.7), rgb(26, 28, 35, 0.7))',
  gradient80: 'linear-gradient(rgb(26, 28, 35, 0.8), rgb(26, 28, 35, 0.8))',
};

export const theme: DefaultTheme = {
  color,
  mediaQueryMax,
  background,
  flexCenter,
  subTitleBlue,
  subTitle1,
  logoTitle,
};
