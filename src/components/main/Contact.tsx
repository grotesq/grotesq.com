import styled, { css } from 'styled-components';
import { pxToRem } from '../../utils/utils';
import Button from '../Button';

const ContactSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  height: 250px;
  color: #fff;
  padding-top: ${pxToRem(60)};
  padding-bottom: ${pxToRem(49)};
  background-image: url('/assets/image/main/contact/background-1.svg'),
    url('/assets/image/main/contact/background-2.svg'), linear-gradient(127deg, #5870ff 22%, #6d51ff 100%);
  line-height: 1.5;
`;
const Title = styled.h1`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  font-size: ${pxToRem(30)};
  padding-bottom: ${pxToRem(15)};
  line-height: 1;
`;

const SubTitle = styled.div`
  font-family: 'Poppins', sans-serif;
`;

export default function Contact() {
  return (
    <ContactSection>
      <div>
        <SubTitle>Ready to get started?</SubTitle>
        <Title>프로젝트를 문의하세요.</Title>
        <Button width="150" height="50" round color="white">
          문의하기
        </Button>
      </div>
    </ContactSection>
  );
}
