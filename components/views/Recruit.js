import React from 'react';
import Layout from '../Layout';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';

const title = 'Recruit - 그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescription = '그로테스큐 스튜디오에서 개발자를 찾습니다.';
const ogTitle = 'Recruit - 그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com/recruit';
const ogImage = 'https://www.grotesq.com/assets/images/social.png';
const ogImageWidth = 1200;
const ogImageHeight = 1200;
const ogDescription = '그로테스큐 스튜디오에서 개발자를 찾습니다.';

const FoldButton = styled.button`
  background: transparent;
  border: none;
  padding-left: 0;
  padding-right: 0;
`;

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
          <div className="h3-wrap">
            <h3 className="font-noto">
              <span className="black-span-title">감사 말씀</span>
            </h3>
          </div>
          <p>
            저희 같은 작은 회사에서 사람을 구하는 일은 언제나 기대보다는 불안이,
            희망 보다는 걱정이 앞서는 일입니다.
            <br />
            단 한명의 지원자라도 있으면 좋겠다고 생각하고 올린 채용에 굉장히
            많은 분들이 지원해주셔서 무척 감사하고 행복했습니다.
            <br />
            무사히 채용을 마쳤고, 채용되신 분들에게는 감사와 축하를, 채용되지
            못하신 분들에게는 깊은 위로의 말씀을 전합니다.
            <br />
            <br />
            <br />
            {fold && (
              <FoldButton onClick={() => setFold(!fold)}>
                [ 지난 채용 공고 내용 보기 ]
              </FoldButton>
            )}
          </p>
          {!fold && (
            <>
              <div className="h3-wrap">
                <h3 className="font-noto">
                  <span className="black-span-title">모집 분야</span>
                </h3>
              </div>
              <p>- 프론트엔드 개발자 신입 or 초급</p>
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
                - 연 2회 워크샵. 락 페스티벌 단체 관람, 해외 노마드 워킹 체험 등
                다양한 프로그램으로 진행
                <br />
                <br />
                <strong>
                  - 회사에 필요한 인재는 회사가 가르쳐서 업무에 투입
                </strong>
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
              <p>
                - 프론트엔드 개발로 첫 취업을 준비중이거나 타 직군에서 이직을
                준비하는 신입 개발자
                <br />- 1~2년 정도 경력이 있는 초급 개발자
              </p>
              <div className="h3-wrap">
                <h3 className="font-noto">
                  <span className="black-span-title">
                    무슨 일을 하게 되나요?
                  </span>
                </h3>
              </div>
              <p>
                저희 업무는 90%가 리액트입니다. 우선 리액트를 학습하고 리액트
                기반의 다른 프레임워크들을 학습합니다.
                <br />
                어느정도 학습이 진행된 후에는 가벼운 실전 프로젝트에 투입됩니다.
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
              <p>
                {!fold && (
                    <FoldButton onClick={() => setFold(!fold)}>
                      [ 다시 접기 ]
                    </FoldButton>
                )}
              </p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};
