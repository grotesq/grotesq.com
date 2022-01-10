import styled, { css } from 'styled-components';
import { pxToRem } from '../utils/utils';

const CustomButton = styled.button`
  background: ${({ theme }) => theme.color['primary-blue']};
  color: #fff;
  min-width: ${({ width }) => pxToRem(width)};
  min-height: ${({ height }) => pxToRem(height)};
  font-size: ${pxToRem(18)};
  padding: ${pxToRem(21)} ${pxToRem(52)};
  line-height: 1.67;
  box-shadow: ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)} 0 rgba(0, 0, 0, 0.15);
  ${({ round }) =>
    round &&
    css`
      border-radius: ${pxToRem(50)};
    `}
`;

export default function Button({ children, width, height, border, round }) {
  return (
    <CustomButton width={width} height={height} round>
      {children}
    </CustomButton>
  );
}
