import styled, { css } from 'styled-components';

const ContactSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  height: 250px;
`;

export default function Contact() {
  return (
    <ContactSection>
      <div>
        <div>Ready to get started?</div>
        <div>프로젝트를 문의하세요.</div>
        <button type="button">문의하기</button>
      </div>
    </ContactSection>
  );
}
