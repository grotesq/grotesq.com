import React from 'react';
import Layout from '../../Layout';
import { NextSeo } from 'next-seo';
import Title from '../../ui/Title';

const title = 'Recruit - 그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescription =
  '그로테스큐 스튜디오에서 경력직 프론트엔드 개발자를 찾습니다.';
const ogTitle = 'Recruit - 그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com/recruit/20-frontend-senior';
const ogImage = 'https://www.grotesq.com/assets/images/social.png';
const ogImageWidth = 1200;
const ogImageHeight = 1200;
const ogDescription =
  '그로테스큐 스튜디오에서 경력직 프론트엔드 개발자를 찾습니다.';

export default () => {
  const [fold, setFold] = React.useState(true);
  return (
    <Layout>
      <NextSeo
        title={title}
        description={metaDescription}
        openGraph={{
          url: ogUrl,
          title: ogTitle,
          description: ogDescription,
          images: [
            {
              url: ogImage,
              width: ogImageWidth,
              height: ogImageHeight,
              alt: ogTitle,
            },
          ],
          site_name: '그로테스큐 스튜디오 || Studio GrotesQ',
        }}
      />
      <div className="gq-section">
        <Title>
          <h2 className="font-poiret">Recruit</h2>
        </Title>
        <div className="container">
          <div className="text-center">
            <img
              src="/assets/images/about/about-image.png"
              style={{ maxWidth: '100%', marginBottom: '2rem' }}
              alt="about-image"
            />
          </div>
          <Title textAlign="left">
            <h3 className="font-noto">요약</h3>
          </Title>
          <p>
            많은 분들의 도움으로 코로나 19 여파에도 불구하고 2020년 그로테스큐는
            많은 성장을 이루었습니다.
            <br />
            2021년에는 더 많은 일들을 할 수 있게 될 것 같습니다. 현재 내부
            리소스 가용률이 거의 임계치에 달해, 업무를 같이 진행할 수 있는
            경력직 개발자를 충원하고자 합니다.
          </p>
          <Title textAlign="left">
            <h3 className="font-noto">모집 분야</h3>
          </Title>
          <p>- 프론트엔드 개발자 (경력)</p>
          <p>
            - 채용은 블라인드로 진행됩니다.
            <br />- 원격 근무 가능합니다. 협의된 작업 방식을 따라주신다면
            우주에서 근무하셔도 무관합니다.
          </p>
          <Title textAlign="left">
            <h3 className="font-noto">무슨 일을 하게 되나요?</h3>
          </Title>
          <p>
            저희 업무는 90%가 리액트와 리액트 네이티브입니다. 리액트와 리액트
            네이티브에 대한 경험이 있으시다면 우대합니다.
            <br />
            혹은 유사한 다른 라이브러리/프레임워크에 대한 경험이 있고 그래서
            리액트에 빠르게 적응할 수 있을거라 생각하신다면 지원해주세요.
          </p>
          <Title textAlign="left">
            <h3 className="font-noto">장점</h3>
          </Title>
          <p>
            <strong>
              - 회사에 나오면 돈 쓸 일이 없도록 만들어 저축을 많이 할 수 있도록
              하는 것이 목표
            </strong>
            <br />
            <br />
            - 식대 지급. 식대 제한 없음
            <br />
            - 커피는 사내에서 네스프레소 머신으로 무제한 제공
            <br />
            - 각종 간식 지원. 원하는 종류 신청 가능
            <br />
            - 연봉과 별개로 퇴직금 지급. 소멸 정책 없이 1개월만 근무해도 지급
            <br />
            - 재택 근무 가능. 유연한 휴가 제도
            <br />
            - 서적 구매, 인강 구매 등 교육비 지원
            <br />
            - 창립 후 지금까지 연봉 인상률 10% 유지중
            <br />
            - 연 2회 워크샵. 락 페스티벌 단체 관람, 해외 노마드 워킹 체험 등
            다양한 프로그램으로 진행
            <br />
            <br />
            <strong>- 좋은 회사가 되기 위해 노력중</strong>
            <br />
            <br />
            - 탄력 근무제 시행 (8~12시 사이 출근 후 8시간 근무 + 1시간 식사)
            <br />
            - 정해진 시간만 근무하기
            <br />
            - 생산성 향상 위해 지속적으로 프로세스 개선중
            <br />
            - 인터넷 익스플로러 프로젝트 안하기
            <br />
            <br />
            <strong>- 기타 장점</strong>
            <br />
            <br />- 카카오맵 기준 강남역 4번출구에서 도보 6분거리에 위치
          </p>
          <Title textAlign="left">
            <h3 className="font-noto">지원방법</h3>
          </Title>
          <p>
            - 이번 채용은 블라인드로 진행되어 이력서는 받지 않습니다.
            <br />
            - 포트폴리오
            <br />
            - 희망 연봉 (내규에 따름.. 같이 적지 마시고 반드시 기입해주세요)
            <br />
            <br />을{' '}
            <a href="mailto:naram.kim@grotesq.com">naram.kim@grotesq.com</a>
            으로 보내주세요.
          </p>
        </div>
      </div>
    </Layout>
  );
};
