import Link from 'next/link';
import styled from 'styled-components';
import { pxToRem } from '../utils/utils';

const FooterContainer = styled.footer`
  ${({ theme }) => theme.flexCenter};
  height: 9.625rem;
  font-weight: 500;
  line-height: 1.86;
  p {
    font-size: ${pxToRem(14)};
    color: #757b94;
  }
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    padding: 2rem 1.7rem;
    p {
      font-size: ${pxToRem(12)};
    }
  }
`;

const Copyright = styled.p`
  font-weight: 100;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <p>
          그로테스큐 스튜디오 / 대표: 김나람 / <a href="mailto:unknown@grotesq.com">unknown@grotesq.com</a>
        </p>
        <Copyright>{`Copyright © 2017-${new Date().getFullYear()} GrotesQ, All rights reserved.`}</Copyright>
      </div>
    </FooterContainer>
  );
}
