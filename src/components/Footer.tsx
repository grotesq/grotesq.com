import Link from 'next/link';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  height: 154px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Footer() {
    return(
      <FooterContainer>
        <div>
          <p>그로테스큐 스튜디오 / 대표: 김나람 / unknown@grotesq.com</p>
          <p>Copyright © 2017-2020 GrotesQ, All rights reserved.</p>
        </div>
      </FooterContainer>
    )
}
