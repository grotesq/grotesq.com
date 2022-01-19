import { DefaultTheme, css } from 'styled-components';
import { pxToRem } from '../utils/utils';

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

const mediaQuery = (sizeName: string) => {
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
  font-size: ${pxToRem(22)};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  letter-spacing: 0.275rem;
  line-height: 1.5;

  @media ${(props) => props.theme.mediaQuery('sm')} {
    font-size: 1rem;
    letter-spacing: 0.2rem;
    line-height: 1.56;
  }
`;

const subTitleBlue = css`
  color: ${color['primary-blue']};
  font-size: ${pxToRem(22)};
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

const subTitle1 = css`
  color: ${(props) => props.theme['black']};
  font-family: 'Poppins', sans-serif;
  font-size: ${pxToRem(50)};
  font-weight: 600;
  line-height: 1.52;
  padding-bottom: ${pxToRem(18)};
  @media ${(props) => props.theme.mediaQuery('sm')} {
    font-size: ${pxToRem(30)};
  }
`;

export const theme: DefaultTheme = {
  color,
  mediaQuery,
  flexCenter,
  subTitleBlue,
  subTitle1,
  logoTitle,
};
