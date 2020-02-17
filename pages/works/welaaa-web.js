import React from 'react';
import Layout from '../../components/Layout';
import { NextSeo } from 'next-seo';

const title = 'Welaaa Web Service - 그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescriptio =
  '(주)인플루엔셜의 스마트러닝 서비스인 `윌라`의 웹 서비스를 구축했습니다. React, next.js, Sass, SSR, AWS, Elastic Beanstalk';
const ogTitle = 'Welaaa Web Service - 그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com/works/welaaa-web';
const ogImage =
  'https://www.grotesq.com/assets/images/works/welaaa-web/welaaa-1.png';
const ogImageWidth = 2116;
const ogImageHeight = 1608;
const ogDescription =
  '(주)인플루엔셜의 스마트러닝 서비스인 `윌라`의 웹 서비스를 구축했습니다. React, next.js, Sass, SSR, AWS, Elastic Beanstalk';

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
        <span>Welaaa Web Service</span>
      </h1>

      <div className="container">
        <img
          className="gq-image-landscape"
          src="/assets/images/works/welaaa-web/w-w-1.png"
          alt=""
        />

        <p className="mt-5">
          (주)인플루엔셜의 스마트러닝 서비스인 `윌라`의 웹 서비스를
          제작했습니다.
          <br />
          앱과 웹이 동일한 API를 참조하도록 설계 되었기 때문에, 웹 서비스는 웹
          애플리케이션과 같은 형태로 구현 되었습니다.
          <br />
          React 기반의 SPA처럼 동작하면서도 SEO 대응을 위한 서버사이드 렌더링을
          고려해 next.js 기반으로 구축되었습니다.
        </p>
      </div>
    </div>

    <div className="gq-section">
      <div className="container">
        <img
          className="gq-image-landscape"
          src="/assets/images/works/welaaa-web/welaaa-1.png"
          alt=""
        />

        <p className="mt-5">
          윌라 웹 서비스는 반응형으로 구축되었습니다.
          <br />
          단일 컨텐츠로 스마트폰, 태블릿, 데스크탑을 모두 커버하기 때문에
          유지보수 단계에서도 단일 컨텐츠 변경으로 모든 디바이스에 반영할 수
          있도록 작업 되어 있습니다.
          <br />
          벡터 그래픽을 최대한 많이 배치했기 때문에, 고해상도 디스플레이에서도
          깔끔하게 표현됩니다.
        </p>
      </div>
    </div>

    <div className="gq-section gq-section--dark">
      <div className="container">
        <img
          className="gq-image-landscape"
          src="/assets/images/works/welaaa-web/w-w-3.png"
          alt=""
        />

        <p className="mt-5">
          결제는 아임포트를 이용해 구축되었습니다. 아임포트를 통해 데스크탑과
          모바일에서 모두 최적화된 UX를 제공합니다.
          <br />
          배포는 아마존 웹서비스의 엘라스틱 빈스톡을 이용해 이루어집니다.
          오토스케일링과 로드밸런서를 통해 트래픽 부하를 분산합니다.
          <br />
          인스턴스 롤링 배포를 통해 메인터넌스 없는 무중단 운영이 가능하도록
          설계되어 있습니다.
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
                  <li>next.js</li>
                  <li>ExpressJS</li>
                  <li>Server-side Rendering</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">Frontend</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>ReactJS</li>
                  <li>MobX</li>
                  <li>Sass</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">etc</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>Amazon Web Services</li>
                  <li>Elastic Beanstalk</li>
                  <li>Iamport Payments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
