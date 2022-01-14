import Image from 'next/image';
import styled, { css } from 'styled-components';
import Button from '../Button';
import { pxToRem } from '../../utils/utils';
import Thumbnail1 from '/public/assets/image/main/portfolios/thumbnail-1.png';
import Thumbnail2 from '/public/assets/image/main/portfolios/thumbnail-2.png';
import Thumbnail3 from '/public/assets/image/main/portfolios/thumbnail-3.png';
import Thumbnail4 from '/public/assets/image/main/portfolios/thumbnail-4.png';
import Thumbnail5 from '/public/assets/image/main/portfolios/thumbnail-5.png';
import Thumbnail6 from '/public/assets/image/main/portfolios/thumbnail-6.png';

const THUMBNAIL_INFOS = [
  {
    src: Thumbnail1,
    alt: '스마트 러닝 서비스 윌라 2.0 리뉴얼',
    title: '스마트 러닝 서비스 윌라 2.0 리뉴얼',
  },
  {
    src: Thumbnail2,
    alt: '인천공항사규 App',
    title: '인천공항사규 App',
  },
  {
    src: Thumbnail3,
    alt: '바른성장 기록 App',
    title: '바른성장 기록 App',
  },
  {
    src: Thumbnail4,
    alt: '스팀 연동 게임 커뮤니티 App',
    title: '스팀 연동 게임 커뮤니티 App',
  },
  {
    src: Thumbnail5,
    alt: '양업고등학교 홈페이지',
    title: '양업고등학교 홈페이지',
  },
  {
    src: Thumbnail6,
    alt: '동물상 테스트 App',
    title: '동물상 테스트 App',
  },
];

const PortfolioSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
`;

const SubTitle1 = styled.h1`
  ${({ theme }) => theme.subTitle1};
`;

const Description = styled.div`
  padding-bottom: ${pxToRem(60)};
  p {
    color: #000;
    font-size: ${pxToRem(18)};
    line-height: 1.67;
    @media ${({ theme }) => theme.mediaQuery('sm')} {
      font-size: ${pxToRem(14)};
    }
  }
`;

function GalleryItem({ src, title }: { src: string | StaticImageData; title: string }) {
  return (
    <div>
      <Image src={src} alt={title} />
      <p className="pt-[1.125rem] text-sm md:text-xl">{title}</p>
    </div>
  );
}

export default function Portfolio() {
  return (
    <PortfolioSection className="pt-28 pb-7 px-5 sm:pt-40 sm:pb-25">
      <SubTitle1>PORTFOLIOS</SubTitle1>
      <Description>
        <p>그로테스큐 스튜디오의 주요 프로젝트 입니다.</p>
        <p>완벽한 서비스를 제공하기 위해서 항상 신기술을 연구하고, 견고한 내부 인프라를 구축해왔습니다.</p>
      </Description>
      <div className="grid md:grid-cols-3 gap-x-5 gap-y-8 sm:gap-y-16 pb-12 sm:pb-20 ">
        {THUMBNAIL_INFOS.map((thumb) => (
          <GalleryItem src={thumb.src} title={thumb.title} key={thumb.title} />
        ))}
      </div>
      <div>
        <Button className="text-sm leading-7 sm:text-lg" width="280" height="70" round border>
          프로젝트 전체보기
        </Button>
      </div>
    </PortfolioSection>
  );
}
