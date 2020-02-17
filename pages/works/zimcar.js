import React from 'react';
import Layout from '../../components/Layout';
import { NextSeo } from 'next-seo';

const title = '짐카: 이사 말고 짐카 - 그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescription = '1인 가구 이사 서비스 짐카 서비스를 개발했습니다.';
const ogTitle = '짐카: 이사 말고 짐카 - 그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com/works/zimcar';
const ogImage =
  'https://www.grotesq.com/assets/images/works/thumbnail/zimcar.png';
const ogImageWidth = 1000;
const ogImageHeight = 500;
const ogDescription = '1인 가구 이사 서비스 짐카 서비스를 개발했습니다.';

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
        <span>짐카</span>
      </h1>

      <div className="container">
        <div className="text-center">
          <img
            src="/assets/images/works/zimcar/zc-3.png"
            alt=""
            className="gq-image-landscape"
          />
        </div>

        <p className="mt-5">
          1인 가구 이사 서비스를 제공하는 짐카의 서비스를 개발했습니다.
          <br />
          Typeform으로 신청받아 스프레드시트로 수기 관리를 하는 형태를 고도화해
          신청부터 배차까지 전산화하고 많은 부분을 자동화했습니다.
        </p>
      </div>
    </div>

    <div className="gq-section">
      <div className="container">
        <div className="text-center">
          <img
            src="/assets/images/works/zimcar/zc-2.png"
            alt=""
            className="gq-image-landscape"
          />
        </div>

        <p className="mt-5">
          AngularJS로 개발되어 Cordova로 패키징 되었습니다.
          <br />
          백엔드는 Laravel로 구축되었고 MongoDB에 데이터를 누적해 데이터 분석에
          활용됩니다.
        </p>
      </div>
    </div>

    <div className="gq-section gq-section--dark">
      <div className="container">
        <div className="text-center">
          <img
            src="/assets/images/works/zimcar/zc-1.png"
            alt=""
            className="gq-image-landscape"
          />
        </div>
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
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">Frontend</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>AngularJS</li>
                  <li>Cordova</li>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
