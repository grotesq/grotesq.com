import styled, { css } from 'styled-components';
import { pxToRem } from '../utils/utils';
interface ButtonProps {
  children?: React.ReactNode;
  color?: string;
  width?: string;
  height?: string;
  border?: boolean;
  round?: boolean;
}


const primaryBlue = css`
  ${({ theme }) => theme.color['primary-blue']};
`;

const CustomButton = styled.button<ButtonProps>`
  /* 공통 스타일 */
  background: ${primaryBlue};
  box-shadow: ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)} 0 rgba(0, 0, 0, 0.15);
  color: #fff;
  font-size: 1.125rem;
  ${({ height }) =>
    height &&
    css`
      height: ${pxToRem(height)};
    `};
  ${({ width }) =>
    width &&
    css`
      width: ${pxToRem(width)};
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
      background: ${color};
      box-shadow: none;
      color: ${primaryBlue};
    `};
`;

export default function Button({ children, width, height, ...rest }: ButtonProps & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <CustomButton width={width} height={height} {...rest}>
      {children}
    </CustomButton>
  );
}
