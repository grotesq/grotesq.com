import React from 'react';
import Layout from '../../Layout';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';

const title = 'Recruit - 그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescription = '그로테스큐 스튜디오에서 디자이너를 찾습니다.';
const ogTitle = 'Recruit - 그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com/recruit/20-web-designer';
const ogImage = 'https://www.grotesq.com/assets/images/social.png';
const ogImageWidth = 1200;
const ogImageHeight = 1200;
const ogDescription = '그로테스큐 스튜디오에서 디자이너를 찾습니다.';

export default () => {
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

          <div className="h3-wrap">
            <h3 className="font-noto">
              <span className="black-span-title">저희는 이런 고민을 하고 있습니다.</span>
            </h3>
          </div>
          <p>
            웹 기술은 성숙해 가는데 아직도 20년 30년 전의 방법론이 현재의 작업자들을 괴롭힙니다.<br/>
            앱에는 앱에 맞는 디자인 정책이 필요하지만 웹에서 축적된 방법론을 앱 스크린에 우겨넣기만 하려고 합니다.<br/>
            디자이너를 사내 하청처럼 취급하고 단순 생산직처럼 다루는 회사들이 아직도 너무나 많습니다.<br/>
            협업을 위한 도구들이 많이 개발되지만, 여전히 도입을 꺼리고 사일로 업무를 진행하는 곳들이 있습니다.<br/>
            저희는 좀 더 진보되고 나아진 UI/UX 디자인 업무에 대한 방법을 늘 고민하고 있습니다.
          </p>
          <div className="h3-wrap">
            <h3 className="font-noto">
              <span className="black-span-title">모집 분야</span>
            </h3>
          </div>
          <p>- UI/UX 디자이너 신입 or 초급</p>
          <div className="h3-wrap">
            <h3 className="font-noto">
              <span className="black-span-title">요약</span>
            </h3>
          </div>
          <p>
            <strong>
              - 회사에 나오면 돈 쓸 일이 없도록 만들어 저축을 많이 할 수 있도록
              하는 것이 목표
            </strong>
            <br />
            <br />
            - 식대 지급. 식대 제한 없음
            <br />
            - 커피는 사내에서 네스프레소 머신으로
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
            <strong>- 회사에 필요한 인재는 회사가 가르쳐서 업무에 투입</strong>
            <br />
            <br />
            - 입사 후 교육부터 진행
            <br />- 실무와 교육을 계속 반복/병행
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
            - Sketch, Figma, FramerX 같은 생산성 향상 도구의 적극적 도입
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
          <p>
            - UI/UX 디자이너로 첫 취업을 준비중이거나 타 직군에서 이직을 준비하는
            신입 디자이너
            <br />- 1~2년 정도 경력이 있는 초급 디자이너
          </p>
          <div className="h3-wrap">
            <h3 className="font-noto">
              <span className="black-span-title">무슨 일을 하게 되나요?</span>
            </h3>
          </div>
          <p>
            사내에서 진행하는 프로젝트들의 디자인 업무를 기본적으로 수행하시게 됩니다.
            <br />
            저희 외주 업무는 주로 개발 업무 위주지만 가끔 디자인이 포함된 프로젝트를 진행하기도 합니다.
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
            - 희망 연봉 (내규에 따름.. 같이 적지 마시고 반드시 기입해주세요)
            <br />
            <br />을{' '}
            <a href="mailto:unknown@grotesq.com">unknown@grotesq.com</a>
            으로 보내주세요.
          </p>
        </div>
      </div>
    </Layout>
  );
};
