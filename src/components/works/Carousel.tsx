import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import Button from '../../components/Button';

interface SlideProps {
  imgSrc: string;
  title: string[];
  titleColor: 'default' | 'white';
  description: string[];
  url: string;
}

const slideInfos: SlideProps[] = [
  {
    imgSrc: '/assets/image/works/slide-1.jpg',
    title: ['스마트러닝 윌라 웹서비스 리뉴얼'],
    titleColor: 'default',
    description: [
      "(주)인플루엔셜의 스마트러닝 서비스인 '윌라'의 앱을 리뉴얼했습니다.",
      '기존의 웹뷰 하이브리드 방식에서 네이티브 방식으로 전면 개편했습니다.',
      '개편을 통해 앱 진입 속도가 초기 로딩 속도, 뷰 반응 속도 등이 크게 개선되었습니다.',
    ],
    url: 'https://grotesq.notion.site/Welaaa-9e1730db8c434008b021d8ca97cc6b8a',
  },
  {
    imgSrc: '/assets/image/works/slide-2.png',
    title: ['스티팝 웹, B2B 서비스'],
    titleColor: 'white',
    description: [
      '스티팝은 다양한 스티커 콘텐츠를 제공하는 API 서비스로, 글로벌 유저의 원활한 이용을 위해',
      '직관적인 카테고리와 명확한 플로우의 공식 웹 페이지를 제작했습니다. 또한 기업과 앱 개발자가',
      '버튼 하나로 손쉽게 스티커를 판매하고 관리할 수 있는 대시보드를 제작했습니다. ',
    ],
    url: 'https://grotesq.notion.site/0aa35d7fc9fb462c96e69136a0bedab4',
  },
  {
    imgSrc: '/assets/image/works/slide-3.png',
    title: ['내손안의약국 리뉴얼'],
    titleColor: 'white',
    description: [
      '내손안의약국은 나와 가족들의 건강을 보다 쉽고 편하게 케어할 수 있는 약국 중심의',
      '건강관리 서비스입니다. 정확한 복약 알림과 건강상태를 알려주는 파미톡,',
      '가족 구성원간의 정보 공유 등 ‘일상속 건강체크’라는 고객맞춤 서비스를 리뉴얼했습니다.',
    ],
    url: 'https://grotesq.notion.site/a5b6c76f6ead479f8078a5916a7f3e74',
  },
];
const mobileSlideInfos: SlideProps[] = [
  {
    imgSrc: '/assets/image/works/slide-1.jpg',
    title: ['스마트러닝', '윌라 웹서비스 리뉴얼'],
    titleColor: 'default',
    description: [
      '(주)인플루엔셜의 스마트러닝 서비스인',
      "'윌라'의 앱을 리뉴얼했습니다.",
      '기존의 웹뷰 하이브리드 방식에서',
      '네이티브 방식으로 전면 개편했습니다.',
      '개편을 통해 앱 진입 속도가 초기 로딩 속도,',
      '뷰 반응 속도 등이 크게 개선되었습니다.',
    ],
    url: 'https://grotesq.notion.site/Welaaa-9e1730db8c434008b021d8ca97cc6b8a',
  },
  {
    imgSrc: '/assets/image/works/mb_slide-2.png',
    title: ['스티팝 웹,', 'B2B 서비스'],
    titleColor: 'white',
    description: [
      '스티팝은 다양한 스티커 콘텐츠를 제공하는',
      'API 서비스로, 글로벌 유저의 원활한 이용을 위해',
      '직관적인 카테고리와 명확한 플로우의',
      '공식 웹 페이지를 제작했습니다. 또한 기업과',
      '앱 개발자가 버튼 하나로 손쉽게 스티커를',
      '판매하고 관리할 수 있는 대시보드를 제작했습니다. ',
    ],
    url: 'https://grotesq.notion.site/0aa35d7fc9fb462c96e69136a0bedab4',
  },
  {
    imgSrc: '/assets/image/works/mb_slide-3.png',
    title: ['내손안의약국', '리뉴얼'],
    titleColor: 'white',
    description: [
      '내손안의약국은 나와 가족들의 건강을 보다 쉽고',
      '편하게 케어할 수 있는 약국 중심의 건강관리',
      '서비스입니다. 정확한 복약 알림과 건강상태를 알려주는',
      '파미톡, 가족 구성원간의 정보 공유 등 ‘일상속 건강체크’',
      '라는 고객맞춤 서비스를 리뉴얼했습니다.',
    ],
    url: 'https://grotesq.notion.site/a5b6c76f6ead479f8078a5916a7f3e74',
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
  const { title, titleColor, imgSrc, description, url } = slideinfo;
  return (
    <SlideBackground className="px-7" imgSrc={imgSrc}>
      <LogoTitle color={titleColor}>GrotesQ</LogoTitle>
      <MainTitle>
        {title.map((content, i) => (
          <div key={i}>{content}</div>
        ))}
      </MainTitle>
      <Description>
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
  color: ${(props) => (props.color === 'white' ? props.theme.color['white'] : props.theme.color['primary-blue'])};
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
    min-height: 12em;
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
  const randomSlideIndex = Math.floor(Math.random() * slideInfos.length);

  SwiperCore.use([Autoplay, Navigation]);
  return (
    <SwiperSection>
      <Swiper
        className="hidden sm:flex"
        autoHeight={true}
        slidesPerView={1}
        navigation={ true }
        initialSlide={randomSlideIndex}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {
          slideInfos.map((slide) => (
              <SwiperSlide key={slide.title[0]}>
                <SlideContaier slideinfo={slide} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        className="flex sm:hidden"
        autoHeight={true}
        slidesPerView={1}
        navigation={ true }
        initialSlide={randomSlideIndex}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {
          mobileSlideInfos.map((slide) => (
              <SwiperSlide key={slide.title[0]}>
                <SlideContaier slideinfo={slide} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </SwiperSection>
  );
}
