import React from 'react';
import Layout from '../../components/Layout';
import { NextSeo } from 'next-seo';

const title =
  '전설은 살아있다 : 40년 우정을 낚다, 심수회 - 그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescription =
  '한국을 대표하는 만화가 10인의 40년 넘게 지속된 우정과 추억을 ‘낚시’라는 공통의 매개체를 통해 돌아보는 전시 입니다.';
const ogTitle =
  '전설은 살아있다 : 40년 우정을 낚다, 심수회 - 그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com/works/sim-su-hoi/';
const ogImage =
  'https://www.grotesq.com/assets/images/works/sim-su-hoi/sim-su-hoi-cover.jpg';
const ogImageWidth = 1280;
const ogImageHeight = 720;
const ogDescription =
  '한국을 대표하는 만화가 10인의 40년 넘게 지속된 우정과 추억을 ‘낚시’라는 공통의 매개체를 통해 돌아보는 전시 입니다.';

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
        <span>전설은 살아있다 : 40년 우정을 낚다, 심수회</span>
      </h1>

      <div className="container">
        <div className="gq-youtube-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BiRXyN8VRt0?rel=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <p className="mt-5">
          제 19회 부천국제 만화축제 에서 진행한 전시 프로젝트입니다. 한국을
          대표하는 만화가 10인의 40년 넘게 지속된 우정과 추억을 ‘낚시’라는
          공통의 매개체를 통해 돌아보는 전시를 기획했습니다.
          <br />
        </p>
      </div>
    </div>
    <div className="gq-section">
      <div className="container">
        <p className="text-center">
          <img
            src="https://www.grotesq.com/assets/images/works/sim-su-hoi/sim-su-hoi-poster.jpg"
            alt=""
            className="gq-image-landscape"
          />
        </p>
      </div>
    </div>
    <div className="gq-section gq-section--dark">
      <div className="container">
        <p>
          전시 기획, 디자인을 총괄했으며, FTV와 협업하여 '
          <a href="https://www.youtube.com/watch?v=AChEDeZWdtY" target="_blank">
            낚시인피플
          </a>
          '도 함께 기획했습니다.
        </p>
        <div className="gq-youtube-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AChEDeZWdtY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
              <div className="card-header">Exhibition</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>Managing Direct</li>
                  <li>Exhibition Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
