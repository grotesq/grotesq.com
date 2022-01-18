import styled, { css } from 'styled-components';
import { pxToRem } from '../utils/utils';
interface ButtonProps {
  children?: React.ReactNode;
  color?: string;
  size?: string;
  border?: boolean;
  round?: boolean;
  fill?: boolean | string;
}

const primaryBlue = css`
  ${({ theme }) => theme.color['primary-blue']};
`;

const CustomButton = styled.button<ButtonProps>`
  /* 공통 스타일 */
  background: ${primaryBlue};
  box-shadow: ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)} 0 rgba(0, 0, 0, 0.15);
  color: #fff;
  ${({ size }) =>
    size === 'lg' &&
    css`
      width: 17.5rem;
      height: 4.375rem;
      font-size: 1.125rem;
      @media ${({ theme }) => theme.mediaQuery('sm')} {
        width: 15rem;
        height: 3.37rem;
        font-size: 0.938rem;
      }
    `};
  ${({ size }) =>
    size === 'md' &&
    css`
      width: 15.5rem;
      height: 4.375rem;
      font-size: 1.125rem;
      @media ${({ theme }) => theme.mediaQuery('sm')} {
        width: 15rem;
        height: 3.37rem;
        font-size: 0.938rem;
      }
    `};
  ${({ size }) =>
    size === 'sm' &&
    css`
      width: 9.375rem;
      height: 3.125rem;
      font-size: 1rem;
    `};

  /* round */
  ${({ round }) =>
    round &&
    css`
      border-radius: ${pxToRem(50)};
    `};

  /* border */
  ${({ border }) =>
    border &&
    css`
      background: none;
      border: 2px solid ${primaryBlue};
      box-shadow: none;
      color: ${primaryBlue};
    `};

  /* color */
  ${({ color }) =>
    color &&
    css`
      background: none;
      box-shadow: none;
      color: ${color};
      border: 2px solid ${color};
    `};

  /* fill */
  ${({ fill, color }) =>
    fill &&
    css`
      background: ${color};
      color: ${primaryBlue};
      box-shadow: none;
    `};
`;

export default function Button({ children, size, ...rest }: ButtonProps & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <CustomButton size={size} {...rest}>
      {children}
    </CustomButton>
  );
}
