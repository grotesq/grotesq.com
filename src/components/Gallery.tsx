import Image from 'next/image';
import styled, { css } from 'styled-components';
import { pxToRem } from '../utils/utils';
import Thumbnail1 from '/public/assets/image/main/portfolios/thumbnail-1.jpg';
import Thumbnail2 from '/public/assets/image/main/portfolios/thumbnail-2.jpg';
import Thumbnail3 from '/public/assets/image/main/portfolios/thumbnail-3.jpg';
import Thumbnail4 from '/public/assets/image/main/portfolios/thumbnail-4.jpg';
import Thumbnail5 from '/public/assets/image/main/portfolios/thumbnail-5.jpg';
import Thumbnail6 from '/public/assets/image/main/portfolios/thumbnail-6.jpg';
import Thumbnail7 from '/public/assets/image/works/thumbnail-7.jpg';
import Thumbnail8 from '/public/assets/image/works/thumbnail-8.jpg';
import Thumbnail9 from '/public/assets/image/works/thumbnail-9.jpg';
import Thumbnail10 from '/public/assets/image/works/thumbnail-10.jpg';
import Thumbnail11 from '/public/assets/image/works/thumbnail-11.jpg';

const THUMBNAIL_INFOS = [
  {
    src: Thumbnail1,
    title: '스마트 러닝 서비스 윌라 2.0 리뉴얼',
  },
  {
    src: Thumbnail2,
    title: '인천공항사규 App',
  },
  {
    src: Thumbnail3,
    title: '바른성장 기록 App',
  },
  {
    src: Thumbnail4,
    title: '스팀 연동 게임 커뮤니티 App',
  },
  {
    src: Thumbnail5,
    title: '양업고등학교 홈페이지',
  },
  {
    src: Thumbnail6,
    title: '동물상 테스트 App',
  },
  {
    src: Thumbnail7,
    title: 'Series Eight 홈페이지',
  },
  {
    src: Thumbnail8,
    title: '심수회전 기획',
  },
  {
    src: Thumbnail9,
    title: '아이유의 후루룩칼국수',
  },
  {
    src: Thumbnail10,
    title: 'Light Wall in Folly',
  },
  {
    src: Thumbnail11,
    title: '이사 말고 짐카',
  },
];

const GalleryContainer = styled.div`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  padding-top: 3.75rem;
  padding-bottom: 5rem;
  @media ${({ theme }) => theme.mediaQuery('sm')} {
    padding-top: 2.5rem;
    padding-bottom: 3rem;
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

export default function Gallery({ location }: { location: string | undefined }) {
  return (
    <GalleryContainer>
      <div className="grid sm:grid-cols-3 gap-x-5 gap-y-8 sm:gap-y-16 ">
        {location === 'main'
          ? THUMBNAIL_INFOS.slice(0, 6).map((thumb) => (
              <GalleryItem src={thumb.src} title={thumb.title} key={thumb.title} />
            ))
          : THUMBNAIL_INFOS.map((thumb) => <GalleryItem src={thumb.src} title={thumb.title} key={thumb.title} />)}
      </div>
    </GalleryContainer>
  );
}
