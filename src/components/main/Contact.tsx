import styled, { css } from 'styled-components';
import { pxToRem } from '../../utils/utils';
import Button from '../Button';

const ContactSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  height: 250px;
  color: #fff;
  padding-top: ${pxToRem(60)};
  padding-bottom: ${pxToRem(49)};
  background-image: linear-gradient(127deg, #5870ff 22%, #6d51ff 100%);
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
        <button className="bg-white rounded-full text-primary-blue py-4 px-11">문의하기</button>
      </div>
    </ContactSection>
  );
}
