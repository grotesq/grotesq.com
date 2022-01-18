import styled, { css } from 'styled-components';
import Gallery from '../Gallery';

const OurWorksSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  padding-top: 7.435rem;
  padding-bottom: 4.437rem;
  @media ${({ theme }) => theme.mediaQuery('sm')} {
    padding-top: 3.75rem;
    padding-bottom: 0;
  }
`;

const SubTitle1 = styled.h1`
  ${({ theme }) => theme.subTitle1};
`;

const Description = styled.div`
  font-size: 1.125rem;
  line-height: 1.67;

  @media ${({ theme }) => theme.mediaQuery('sm')} {
    p {
      font-size: 0.875rem;
      line-height: 1.57;
      font-weight: 300;
    }
  }
`;

export default function OurWorks() {
  return (
    <OurWorksSection className="px-5 xl:px-40">
      <SubTitle1>OUR WORKS</SubTitle1>
      <Description>
        <p>그로테스큐 스튜디오의 주요 프로젝트 입니다.</p>
        <p>완벽한 서비스를 제공하기 위해서 항상 신기술을 연구하고, 견고한 내부 인프라를 구축해왔습니다.</p>
      </Description>
      <Gallery />
    </OurWorksSection>
  );
}
