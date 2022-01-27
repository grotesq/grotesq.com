import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import Button from '../../components/Button';

interface SlideProps {
  imgSrc: string;
  title: string;
  description: string[];
  url: string;
}

const slideInfos: SlideProps[] = [
  {
    imgSrc: '/assets/image/works/slide-1.jpg',
    title: '스마트러닝 윌라 웹서비스 리뉴얼',
    description: [
      "(주)인플루엔셜의 스마트러닝 서비스인 '윌라'의 앱을 리뉴얼했습니다.",
      '기존의 웹뷰 하이브리드 방식에서 네이티브 방식으로 전면 개편했습니다.',
      '개편을 통해 앱 진입 속도가 초기 로딩 속도, 뷰 반응 속도 등이 크게 개선되었습니다.',
    ],
    url: 'https://grotesq.notion.site/Welaaa-9e1730db8c434008b021d8ca97cc6b8a',
  },
];

const SlideBackground = styled.article<{ imgSrc: string }>`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  background: ${(props) => `${props.theme.background['gradient80']}, url(${props.imgSrc})`};
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 17.438rem;
  padding-bottom: 17.5rem;
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    background-position: left 2% center;
    padding-top: 7.9rem;
    padding-bottom: 9.3rem;
  }
`;

export function SlideContaier({ slideinfo }: { slideinfo: SlideProps }) {
  const { title, imgSrc, description, url } = slideinfo;

  return (
    <SlideBackground className="px-12" imgSrc={imgSrc}>
      <LogoTitle>Studio GrotesQ</LogoTitle>
      <MainTitle>{title}</MainTitle>
      <Description className="px-3">
        {description.map((sentence, i) => (
          <p key={i}>{sentence}</p>
        ))}
      </Description>
      <Button onClick={() => window.open(`${url}`)} round border color="white" size="md">
        프로젝트 살펴보기
      </Button>
    </SlideBackground>
  );
}

const MainTitle = styled.h1`
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    font-size: 2rem;
    padding-bottom: 1.3rem;
    line-height: 1.25;
  }
  font-size: 3.375rem;
  line-height: 1.2;
  color: ${(props) => props.theme.color['white']};
  font-weight: 900;
  padding-bottom: 1.75rem;
`;

const LogoTitle = styled.div`
  ${({ theme }) => theme['logoTitle']};
  padding-bottom: 1.75rem;
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    padding-bottom: 1rem;
  }
`;

const SubTitle1 = styled.h1`
  ${({ theme }) => theme.subTitle1};
`;

const Description = styled.div`
  font-size: 1rem;
  line-height: 1.88;
  padding-bottom: 6.25rem;
  color: ${(props) => props.theme.color['white']};
  opacity: 0.8;
  font-weight: 300;

  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    padding-bottom: 3.75rem;
    p {
      font-size: 0.875rem;
      letter-spacing: -0.017rem;
      line-height: 1.57;
    }
  }
`;

const SwiperSection = styled.section`
  .swiper {
    .swiper-button-prev {
      left: 8vw;
    }
    .swiper-button-next {
      left: 92vw;
    }
    .swiper-button-prev:after,
    .swiper-button-next:after {
      font-size: 3.5vw;
    }
  }
  @media ${({ theme }) => theme.mediaQueryMax('md')} {
    .swiper {
      .swiper-button-prev,
      .swiper-button-next {
        color: ${(props) => props.theme.color['white']};
        top: 94%;
        left: 80%;
        padding-left: 0;
        padding-right: 0;
      }
      .swiper-button-next {
        left: 93%;
        justify-content: space-between;
      }
      .swiper-button-prev:after,
      .swiper-button-next:after {
        font-size: 0.875rem;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: ${(props) => props.theme.color['white']};
  }
`;

export default function Carousel() {
  SwiperCore.use([Autoplay, Navigation]);
  return (
    <SwiperSection>
      <Swiper
        slidesPerView={1}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <SlideContaier slideinfo={slideInfos[0]} />
        </SwiperSlide>
      </Swiper>
    </SwiperSection>
  );
}
