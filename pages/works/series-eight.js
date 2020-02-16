import React from 'react';
import Layout from '../../components/Layout';
import { NextSeo } from 'next-seo';

const title = 'Series Eight - 그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescription =
  '가방 렌탈 서비스 시리즈 에잇의 개발을 진행했습니다. Laravel, Vue.js';
const ogTitle = 'Series Eight - 그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com/works/series-eight/';
const ogImage =
  'https://www.grotesq.com/assets/images/works/series-eight/series-eight-w-1.png';
const ogImageWidth = 1000;
const ogImageHeight = 500;
const ogDescription =
  '가방 렌탈 서비스 시리즈 에잇의 개발을 진행했습니다. Laravel, Vue.js';

export default () => (
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
    <div className="gq-section gq-section--dark">
      <h1>
        <span>Series Eight</span>
      </h1>

      <div className="container">
        <div className="text-center">
          <img
            src="/assets/images/works/series-eight/series-eight-w-1.png"
            alt=""
            className="gq-image-landscape"
          />
        </div>

        <p className="mt-5">
          가방 렌탈 서비스 시리즈 에잇의 개발을 진행했습니다.
          <br />
          사용자들이 최대한 편하고 빠르게 가방을 검색하고 예약할 수 있도록 UX
          개선에 노력했습니다.
        </p>
      </div>
    </div>

    <div className="gq-section">
      <div className="container">
        <div className="text-center">
          <img
            src="/assets/images/works/series-eight/series-eight-w-2.png"
            alt=""
            className="gq-image-landscape"
          />
        </div>

        <p className="mt-5">
          반응형으로 제작되어 모든 디바이스에서 동일한 컨텐츠를 최적화된 형태로
          경험할 수 있습니다.
          <br />
          주문/결제 화면은 Vue.js로 개발되어 번거로운 과정을 최소화하고
          자연스러운 흐름으로 주문하고 결제할 수 있습니다.
        </p>
      </div>
    </div>

    <div className="gq-section gq-section--dark">
      <div className="container">
        <div className="text-center">
          <img
            src="/assets/images/works/series-eight/series-eight-admin.png"
            alt=""
            className="gq-image-landscape"
          />
        </div>

        <p className="mt-5">
          자체적으로 구축된 물류 시스템으로 운영됩니다.
          <br />
          배송 시스템도 자체적으로 운영하기 때문에, 배송요원과 사무담당자의 빠른
          커뮤니케이션이 중요했습니다. 관리 시스템 자체도 반응형으로 구현되어
          물류 상태가 실시간으로 공유될 수 있도록 구축했습니다.
        </p>
      </div>
    </div>

    <div className="gq-section">
      <div className="container">
        <h2>
          <span>Technical Summary</span>
        </h2>

        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">Backend</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>Laravel Framework</li>
                  <li>API Base Structure</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">Frontend</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>Vue.js</li>
                  <li>Sass + BEM</li>
                  <li>Responsive Web</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">etc</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>Kakao Biztalk</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
