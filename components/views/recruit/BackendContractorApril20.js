import React from 'react';
import Layout from '../../Layout';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';

const title = 'Recruit - 그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescription =
  '그로테스큐 스튜디오에서 계약직 백엔드 개발자를 찾습니다.';
const ogTitle = '백엔드 개발자를 찾습니다 - 그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com/recruit/20-april-backend-contractor';
const ogImage = 'https://www.grotesq.com/assets/images/social.png';
const ogImageWidth = 1200;
const ogImageHeight = 1200;
const ogDescription =
  '그로테스큐 스튜디오에서 계약직 백엔드 개발자를 찾습니다.';

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
              <span className="black-span-title">
                계약직 백엔드 개발자를 모집하고 있습니다
              </span>
            </h3>
          </div>
          <p>
            최근 감사하게도 많은 기술 문의와 프로젝트 문의를 받게 되었고,
            일시적으로 증가한 프로젝트를 소화하기 위해 계약직 개발자를 모집하고
            있습니다.
          </p>
          <div className="h3-wrap">
            <h3 className="font-noto">
              <span className="black-span-title">모집 분야</span>
            </h3>
          </div>
          <p>- 백엔드 개발자 (중급-고급)</p>
          <div className="h3-wrap">
            <h3 className="font-noto">
              <span className="black-span-title">요약</span>
            </h3>
          </div>
          <p>
            <strong>- 작업하실 내용</strong>
            <br />
            <br />
            - Restful API 개발
            <br />
            - ORM 기반 작업
            <br />
            - 관리자 페이지 개발 (템플릿 사용)
            <br />
            - Git Flow 기반 프로젝트 관리
            <br />
            - 평균 1일 1회 코드 리뷰
            <br />
            <br />
            <strong>- 조건</strong>
            <br />
            <br />
            - 월 500 전후 (조정 가능)
            <br />- 4대보험가입 / 원천징수 선택 가능
            <br />- 탄력 근무제 시행
            <br />- 식대 지급
            <br />
            <br />
            <strong>- 회사 위치</strong>
            <br />
            <br />- 강남역 사거리
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
            <br />을{' '}
            <a href="mailto:unknown@grotesq.com">unknown@grotesq.com</a>
            으로 보내주세요.<br/>
            궁금하신 내용이 있으면 문의 메일만 먼저 주셔도 됩니다.
          </p>
        </div>
      </div>
    </Layout>
  );
};
