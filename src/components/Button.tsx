import styled, { css } from 'styled-components';
import { pxToRem } from '../utils/utils';

const primaryBlue = css`
  ${({ theme }) => theme.color['primary-blue']};
`;

const CustomButton = styled.button`
  background: ${primaryBlue};
  color: #fff;
  width: ${({ width }) => pxToRem(width)};
  height: ${({ height }) => pxToRem(height)};
  padding: ${pxToRem(21)} ${pxToRem(52)};
  line-height: 1.67;
  box-shadow: ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)} 0 rgba(0, 0, 0, 0.15);
  border-radius: ${pxToRem(50)};
`;

export default function Button({ children, width, height, border = false, round }) {
  return (
    <CustomButton width={width} height={height} round border={border}>
      {children}
    </CustomButton>
  );
}
