import styled, { css } from 'styled-components';
import { pxToRem } from '../utils/utils';

const primaryBlue = css`
  ${({ theme }) => theme.color['primary-blue']};
`;

const CustomButton = styled.button`
  /* 공통 스타일 */
  font-family: NotoSansCJKkr;
  font-size: 1.125rem;
  width: ${({ width }) => pxToRem(width)};
  height: ${({ height }) => pxToRem(height)};
  background: ${primaryBlue};
  color: #fff;
  box-shadow: ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)} 0 rgba(0, 0, 0, 0.15);

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
      color: ${primaryBlue};
      border: 2px solid ${primaryBlue};
      box-shadow: none;
    `};

  /* color */
  ${({ color }) =>
    color &&
    css`
      background: ${color};
      color: ${primaryBlue};
      box-shadow: none;
    `};
`;

export default function Button({ children, width, ...rest }) {
  return (
    <CustomButton width={width} {...rest}>
      {children}
    </CustomButton>
  );
}
