import styled from 'styled-components';

const FooterContainer = styled.footer`
  ${({ theme }) => theme.flexCenter};
  height: 9.625rem;
  font-weight: 500;
  line-height: 1.86;
  p {
    font-size: 0.875rem;
    color: #757b94;
  }
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    padding: 2rem 1.7rem;
    p {
      font-size: 0.75rem;
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
          그로테스큐 / 대표: 김나람 / <a href="mailto:naram.kim@grotesq.com">naram.kim@grotesq.com</a>
        </p>
        <Copyright>{`Copyright © 2017-${new Date().getFullYear()} GrotesQ, All rights reserved.`}</Copyright>
      </div>
    </FooterContainer>
  );
}
