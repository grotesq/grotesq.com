import React from 'react';
import Layout from '../../components/Layout';
import { NextSeo } from 'next-seo';

const title = 'Welaaa App 2.0 - 그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescription =
  '(주)인플루엔셜의 스마트러닝 서비스인 `윌라`의 앱을 리뉴얼했습니다. React Native, Firebase, Native 연동';
const ogTitle = 'Welaaa App 2.0 - 그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com/works/welaaa-app-v2/';
const ogImage =
  'https://www.grotesq.com/assets/images/works/welaaa-app-v2/welaaa-app.png';
const ogImageWidth = 1656;
const ogImageHeight = 1096;
const ogDescription =
  '(주)인플루엔셜의 스마트러닝 서비스인 `윌라`의 앱을 리뉴얼했습니다. React Native, Firebase, Native 연동';

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
        <span>Welaaa App 2.0</span>
      </h1>

      <div className="container">
        <div className="text-center">
          <img
            className="gq-image-portrait"
            src="/assets/images/works/welaaa-app-v2/welaaa-1.png"
            alt=""
          />
          <img
            className="gq-image-portrait d-none d-md-inline"
            src="/assets/images/works/welaaa-app-v2/welaaa-2.png"
            alt=""
          />
          <img
            className="gq-image-portrait"
            src="/assets/images/works/welaaa-app-v2/welaaa-3.png"
            alt=""
          />
        </div>

        <p className="mt-5">
          (주)인플루엔셜의 스마트러닝 서비스인 `윌라`의 앱을 리뉴얼했습니다.
          <br />
          기존의 웹뷰 하이브리드 방식에서 네이티브 방식으로 전면 개편했습니다.
          <br />
          개편을 통해 앱 진입 속도가 초기 로딩 속도, 뷰 반응 속도 등이 크게
          개선되었습니다.
        </p>
      </div>
    </div>

    <div className="gq-section">
      <div className="container">
        <div className="text-center">
          <img
            src="/assets/images/works/welaaa-app-v2/welaaa-4.png"
            alt=""
            className="gq-image-portrait"
          />
          <img
            src="/assets/images/works/welaaa-app-v2/welaaa-5.png"
            alt=""
            className="gq-image-portrait"
          />
        </div>
        <p className="mt-5">
          리액트 네이티브를 이용해 네이티브 뷰단을 구성함으로써 사용자 경험을
          극대화 했습니다.
          <br />
          전역 상태 관리를 위해 mobx를 사용하고, prettier 패키지 등을 통해 협업
          효율성을 높였습니다.
          <br />
          윌라 서비스에는 DRM이 적용된 컨텐츠 제공을 위해 Inka Entworks 의
          PallyCon 솔루션을 활용하고 있습니다. Pallycon SDK는 네이티브 언어에
          대해서만 제공되기 때문에, 네이티브로 만들어진 플레이어가 브릿지를 통해
          리액트 네이티브와 연동될 수 있도록 작업되었습니다.
        </p>
      </div>
    </div>

    <div className="gq-section gq-section--dark">
      <div className="container">
        <div className="text-center">
          <img
            src="/assets/images/works/welaaa-app-v2/welaaa-6.png"
            alt=""
            className="gq-image-portrait"
          />
          <img
            src="/assets/images/works/welaaa-app-v2/welaaa-7.png"
            alt=""
            className="gq-image-portrait"
          />
        </div>
        <p className="mt-5">
          파이어베이스의 Analytics, Crashlytics, Cloud Messaging 등이
          연동되었습니다.
          <br />
          정기결제의 경우 아임포트의 빌키 인증 방식이 사용되었습니다.
          <br />
          단건 결제의 경우 iOS는 앱스토어의 인앱결제로, 안드로이드는 아임포트를
          이용하도록 분기되었습니다.
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
              <div className="card-header">Application</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>React Native</li>
                  <li>MobX</li>
                  <li>Native Interlocking</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">etc</div>
              <div className="card-body">
                <ul className="list-unstyled">
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
