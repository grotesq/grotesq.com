import Button from '../../components/Button';
import Gallery from '../../components/Gallery';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../utils/utils';
import Link from 'next/link';

const PortfolioSection = styled.section`
  width: 100%;
  text-align: center;
  padding-top: 10.438rem;
  padding-bottom: 6.25rem;
  padding-left: 10rem;
  padding-right: 10rem;
  @media ${({ theme }) => theme.mediaQuery('sm')} {
    padding-top: 3.75rem;
    padding-bottom: 1.875rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

const SubTitle1 = styled.h1`
  ${({ theme }) => theme.subTitle1};
  padding-bottom: 0;
`;

const Description = styled.div`
  p {
    color: #000;
    font-size: ${pxToRem(18)};
    line-height: 1.67;
    @media ${({ theme }) => theme.mediaQuery('sm')} {
      font-size: ${pxToRem(14)};
    }
  }
`;

export default function Portfolio() {
  return (
    <PortfolioSection className="">
      <SubTitle1>OUR WORKS</SubTitle1>
      <Description>
        <p>그로테스큐 스튜디오의 주요 프로젝트 입니다.</p>
        <p>완벽한 서비스를 제공하기 위해서 항상 신기술을 연구하고, 견고한 내부 인프라를 구축해왔습니다.</p>
      </Description>
      <Gallery location="main" />
      <Link href="/works">
        <Button className="text-sm leading-7 sm:text-lg" width="280" height="70" round border>
          프로젝트 전체보기
        </Button>
      </Link>
    </PortfolioSection>
  );
}
