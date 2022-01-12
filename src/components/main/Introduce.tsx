import Link from 'next/link';
import styled from 'styled-components';
import Button from '../Button';
import { pxToRem } from '../../utils/utils';

const IntroduceSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  background: rgb(26, 28, 35, 0.8);
  color: #fff;
  height: 980px;
  @media ${({ theme }) => theme.mediaQuery('sm')} {
    padding-right: ${pxToRem(48)};
    padding-left: ${pxToRem(47)};
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
    line-height: 1.88;
  }
  padding-bottom: ${pxToRem(100)};
`;

export default function Introduce() {
  return (
    <IntroduceSection>
      <div>
        <SubTitleBlue>Studio GrotesQ</SubTitleBlue>
        <div>
          <MainTitle>
            서비스 하고 싶은 <strong>아이디어가 있으신가요?</strong> <br />
            어떤 기술을 활용하여 서비스 제작을 해야 할지 <strong>막막하신가요?</strong>
          </MainTitle>
        </div>
        <Description>
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
          <Button width="240" height="70" round>
            프로젝트 문의하기
          </Button>
        </div>
      </div>
    </IntroduceSection>
  );
}
