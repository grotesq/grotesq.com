import Link from 'next/link';
import styled from 'styled-components';
import Button from '../Button';
import { pxToRem } from '../../utils/utils';

const IntroduceSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  background: linear-gradient(rgb(26, 28, 35, 0.8), rgb(26, 28, 35, 0.8)),
    url('/assets/image/main/introduce/background-1.jpg');
  background-size: cover;
  color: #fff;
`;

const LogoTitle = styled.div`
  ${({ theme }) => theme['logoTitle']};
  padding-bottom: 2rem;
  @media ${({ theme }) => theme.mediaQuery('sm')} {
    padding-bottom: 1.25rem;
  }
`;

const MainTitle = styled.h1`
  font-size: ${pxToRem(48)};
  font-weight: 100;
  letter-spacing: ${pxToRem(-0.96)};
  line-height: 1.35;
  padding-bottom: ${pxToRem(31)};
  & strong {
    font-weight: 900;
  }
  @media ${({ theme }) => theme.mediaQuery('sm')} {
    font-size: ${pxToRem(28)};
  }
`;

const SubTitleBlue = styled.div`
  ${({ theme }) => theme.subTitleBlue};
  letter-spacing: ${pxToRem(4.4)};
  padding-bottom: ${pxToRem(35)};
`;

const Description = styled.div`
  p {
    font-weight: 300;
    opacity: 0.8;
  }
`;

export default function Introduce() {
  return (
    <IntroduceSection className="pt-32 pb-28 px-12 lg:pt-62 lg:pb-52">
      <div>
        <LogoTitle>Studio GrotesQ</LogoTitle>
        <div>
          <MainTitle className="leading-6 sm:leading-5 ">
            서비스 하고 싶은 <strong>아이디어가 있으신가요?</strong> <br />
            어떤 기술을 활용하여 서비스 제작을 해야 할지 <strong>막막하신가요?</strong>
          </MainTitle>
        </div>
        <Description className="pb-15 text-sm leading-6 sm:pb-25 sm:text-base sm:leading-7">
          <p>그로테스큐 스튜디오는 기획, 디자인부터 앱, 플랫폼 서비스 런칭까지 도와드립니다.</p>
          <div className="hidden sm:block">
            <p>가지고 계신 아이디어를 전문적인 컨설팅을 통해 구체화시켜드립니다.</p>
            <p>
              어려운 전문용어를 이해하지 못할까 봐 걱정하지 마세요. 비전문가도 쉽게 이해할 수 있는 컨설팅을 진행합니다.
            </p>
            <p>효과적인 제작 과정을 통하여 안정성&접근성 높은 결과물을 제작합니다.</p>
          </div>
        </Description>
        <div>
          <Button
            className="text-sm leading-8 sm:text-lg"
            size="md"
            round
            onClick={() => (window.location.href = 'mailto:unknown@grotesq.com')}
          >
            프로젝트 문의하기
          </Button>
        </div>
      </div>
    </IntroduceSection>
  );
}
