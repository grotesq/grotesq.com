import React from 'react';
import Layout from '../../Layout';
import { NextSeo } from 'next-seo';

const title = 'Recruit - 그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescription =
  '그로테스큐 스튜디오에서 마크업 개발자(퍼블리셔)를 찾습니다.';
const ogTitle = 'Recruit - 그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com/recruit/20-june-publisher';
const ogImage = 'https://www.grotesq.com/assets/images/social.png';
const ogImageWidth = 1200;
const ogImageHeight = 1200;
const ogDescription =
  '그로테스큐 스튜디오에서 마크업 개발자(퍼블리셔)를 찾습니다.';

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
        <h2 className="text-center font-poiret">
          <span> Recruit </span>
        </h2>
        <div className="container">
          <div className="text-center">
            <img
              src="/assets/images/about/about-image.png"
              style={{ maxWidth: '100%', marginBottom: '2rem' }}
              alt="about-image"
            />
          </div>
          <>
            <div className="h3-wrap">
              <h3 className="font-noto">
                <span className="black-span-title">감사 말씀</span>
              </h3>
            </div>
            <p>
              저희 같은 작은 회사에서 사람을 구하는 일은 언제나 기대보다는
              불안이, 희망 보다는 걱정이 앞서는 일입니다.
              <br />
              단 한명의 지원자라도 있으면 좋겠다고 생각하고 올린 채용에 굉장히
              많은 분들이 지원해주셔서 무척 감사하고 행복했습니다.
              <br />
              많은 분들의 지원으로 무사히 채용을 마쳤습니다. 채용되신 분들에게는
              감사와 축하를, 채용되지 못하신 분들에게는 깊은 위로의 말씀을
              전합니다.
              <br />
              <br />
              <br />
              {fold && (
                <a
                  href={'#'}
                  onClick={e => {
                    e.preventDefault();
                    setFold(!fold);
                  }}
                >
                  [ 지난 채용 공고 내용 보기 ]
                </a>
              )}
            </p>
            {!fold && (
              <>
                <div className="h3-wrap">
                  <h3 className="font-noto">
                    <span className="black-span-title">모집 분야</span>
                  </h3>
                </div>
                <p>- 웹/앱 마크업 개발자(퍼블리셔) 초급</p>
                <div className="h3-wrap">
                  <h3 className="font-noto">
                    <span className="black-span-title">요약</span>
                  </h3>
                </div>
                <p>
                  <strong>
                    - 회사에 나오면 돈 쓸 일이 없도록 만들어 저축을 많이 할 수
                    있도록 하는 것이 목표
                  </strong>
                  <br />
                  <br />
                  - 식대 지급. 식대 제한 없음
                  <br />
                  - 커피는 사내에서 네스프레소 머신으로
                  <br />
                  - 각종 간식 지원. 원하는 종류 신청 가능
                  <br />
                  - 연봉과 별개로 퇴직금 지급. 소멸 정책 없이 1개월만 근무해도
                  지급
                  <br />
                  - 재택 근무 가능. 유연한 휴가 제도
                  <br />
                  - 서적 구매, 인강 구매 등 교육비 지원
                  <br />
                  - 창립 후 지금까지 연봉 인상률 10% 유지중
                  <br />
                  - 연 2회 워크샵. 락 페스티벌 단체 관람, 해외 노마드 워킹 체험
                  등 다양한 프로그램으로 진행 (코로나 19로 인해 난항을 겪고
                  있으나 해결책을 찾는 중...)
                  <br />
                  <br />
                  <strong>- 끊임없이 공부하는 회사</strong>
                  <br />
                  <br />
                  - 사내 교육 프로그램 다수 운영
                  <br />
                  - 세미나, 컨퍼런스, 코딩 강의 등 사외 교육 프로그램 지원
                  <br />
                  - 실험 목적의 사내 토이 프로젝트 수행
                  <br />- 실무와 교육을 계속 반복/병행
                  <br />
                  <br />
                  <strong>- 좋은 회사가 되기 위해 노력중</strong>
                  <br />
                  <br />
                  - 탄력 근무제 시행 (8~12시 사이 출근 후 8시간 근무 + 1시간
                  식사)
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
                  <br />- 카카오맵 기준 강남역 1번출구에서 도보 6분거리에 위치
                </p>
                <div className="h3-wrap">
                  <h3 className="font-noto">
                    <span className="black-span-title">지원 자격</span>
                  </h3>
                </div>
                <p>- 웹/앱 마크업 개발자(퍼블리셔) 초급</p>
                <div className="h3-wrap">
                  <h3 className="font-noto">
                    <span className="black-span-title">필수 조건</span>
                  </h3>
                </div>
                <p>
                  - 시맨틱한 HTML 작성
                  <br />
                  - CSS3에 대한 이해
                  <br />- DOM 제어를 위한 기초 Javascript 이해
                </p>
                <div className="h3-wrap">
                  <h3 className="font-noto">
                    <span className="black-span-title">우대 조건</span>
                  </h3>
                </div>
                <p>
                  <strong>
                    다음 목록은 필수는 아니지만 한 가지라도 해당사항이
                    있으시다면 저희에게 너무 반가운 부분입니다.
                  </strong>
                  <br />
                  <br />
                  - Nunjucks를 이용한 프로젝트 경험 보유
                  <br />
                  - OOCSS에 대한 이해
                  <br />
                  - GSAP 등 애니메이션 라이브러리 활용 가능
                  <br />
                  - React 프레임워크 상에서 직접 퍼블리싱 가능
                  <br />- 향후 프론트엔드 개발을 병행/전직할 의사가 있으신 분
                </p>
                <div className="h3-wrap">
                  <h3 className="font-noto">
                    <span className="black-span-title">
                      무슨 일을 하게 되나요?
                    </span>
                  </h3>
                </div>
                <p>
                  저희 업무는 90%가 리액트/리액트 네이티브입니다. 그 외에는
                  Vue.js, AngularJS 등입니다.
                  <br />
                  프론트엔드 개발에 필요한 마크업을 작성해 주시게 됩니다.
                </p>
                <div className="h3-wrap">
                  <h3 className="font-noto">
                    <span className="black-span-title">지원방법</span>
                  </h3>
                </div>
                <p>
                  - 이력서 (개인 정보를 최소한으로 담은 이력서를 보내주세요)
                  <br />
                  - 포트폴리오
                  <br />
                  - 희망 연봉 (내규에 따름.. 같이 적지 마시고 반드시
                  기입해주세요)
                  <br />
                  <br />을{' '}
                  <a href="mailto:unknown@grotesq.com">unknown@grotesq.com</a>
                  으로 보내주세요.
                </p>
              </>
            )}
          </>
        </div>
      </div>
    </Layout>
  );
};
