import styled, { css } from 'styled-components';
import { pxToRem } from '../utils/utils';

const primaryBlue = css`
  ${({ theme }) => theme.color['primary-blue']};
`;

const CustomButton = styled.button`
  /* 공통 스타일 */
  background: ${primaryBlue};
  box-shadow: ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)} 0 rgba(0, 0, 0, 0.15);
  color: #fff;
  font-family: NotoSansCJKkr;
  font-size: 1.125rem;
  height: ${({ height }) => pxToRem(height)};
  width: ${({ width }) => pxToRem(width)};

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

export default function Button({ children, width, ...rest }) {
  return (
    <CustomButton width={width} {...rest}>
      {children}
    </CustomButton>
  );
}
