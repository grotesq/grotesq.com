import React from 'react';
import Layout from '../Layout';
import TweenMax from 'gsap';
import { NextSeo } from 'next-seo';

const title = '그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescription =
  '컨설턴트, 기획, 디자인, 개발, 인프라 구축, 출시, 유지보수에 이르기까지 제품 출시와 관리를 위한 모든 작업을 수행할 수 있는 전문 개발사입니다.';
const ogTitle = '그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com';
const ogImage = 'https://www.grotesq.com/assets/images/social.png';
const ogImageWidth = 1200;
const ogImageHeight = 1200;
const ogDescription =
  '그로테스큐 스튜디오는 컨설턴트, 기획, 디자인, 개발, 인프라 구축, 출시, 유지보수에 이르기까지 제품 출시와 관리를 위한 모든 작업을 수행할 수 있는 전문 개발사입니다.';

export default props => {
  React.useEffect(() => {
    TweenMax.from('#visual-bar-0', 0.7, { opacity: 0 });
    TweenMax.from('#visual-bar-1', 1.1, { opacity: 0, delay: 0.4 });
    TweenMax.from('#visual-bar-2', 1, { opacity: 0, delay: 0.5 });
    TweenMax.from('#visual-bar-3', 1.1, { opacity: 0, delay: 0.4 });
    TweenMax.from('#visual-bar-4', 0.7, { opacity: 0, delay: 0.6 });
    TweenMax.from('#visual-bar-5', 0.8, { opacity: 0, delay: 0.7 });
    TweenMax.from('#visual-bar-6', 1.4, { opacity: 0, delay: 0.5 });
    TweenMax.from('#visual-center', 0.9, { opacity: 0, delay: 0.5 });
    TweenMax.from('#visual-cloud', 1, { opacity: 0, delay: 0.7 });
    TweenMax.from('#visual-left', 0.9, { opacity: 0, delay: 0.6 });
    TweenMax.from('#visual-right', 0.9, { opacity: 0, delay: 0.6 });
    TweenMax.from('#visual-desktop', 1.1, { opacity: 0, delay: 0.7 });
    TweenMax.from('#visual-gear', 1.2, { opacity: 0, delay: 1 });
    TweenMax.from('#visual-code', 1.2, { opacity: 0, delay: 0.7 });
    TweenMax.from('#visual-bubble', 1.4, { opacity: 0, delay: 0.8 });
  }, []);
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
      <div className="gq-visual-banner">
        <div className="container">
          <h2 className="text-center font-poiret">
            <span>// Welcome to the Studio GrotesQ //</span>
          </h2>
          <p className="text-center font-poiret">
            We are an awesome developer group.
          </p>
          <div id="visual-banner-wrap">
            <div id="visual-bar-0" className="visual-content">
              <img src="/assets/images/visual/visual-bar-0.png" alt="" />
            </div>
            <div id="visual-bar-1" className="visual-content">
              <img src="/assets/images/visual/visual-bar-1.png" alt="" />
            </div>
            <div id="visual-bar-2" className="visual-content">
              <img src="/assets/images/visual/visual-bar-2.png" alt="" />
            </div>
            <div id="visual-bar-3" className="visual-content">
              <img src="/assets/images/visual/visual-bar-3.png" alt="" />
            </div>
            <div id="visual-bar-4" className="visual-content">
              <img src="/assets/images/visual/visual-bar-4.png" alt="" />
            </div>
            <div id="visual-bar-5" className="visual-content">
              <img src="/assets/images/visual/visual-bar-5.png" alt="" />
            </div>
            <div id="visual-bar-6" className="visual-content">
              <img src="/assets/images/visual/visual-bar-6.png" alt="" />
            </div>
            <div id="visual-gear" className="visual-content">
              <img src="/assets/images/visual/visual-gear.png" alt="" />
            </div>
            <div id="visual-bubble" className="visual-content">
              <img src="/assets/images/visual/visual-bubble.png" alt="" />
            </div>
            <div id="visual-cloud" className="visual-content">
              <img src="/assets/images/visual/visual-cloud.png" alt="" />
            </div>
            <div id="visual-center" className="visual-content">
              <img src="/assets/images/visual/visual-center.png" alt="" />
            </div>
            <div id="visual-desktop" className="visual-content">
              <img src="/assets/images/visual/visual-desktop.png" alt="" />
            </div>
            <div id="visual-left" className="visual-content">
              <img src="/assets/images/visual/visual-left.png" alt="" />
            </div>
            <div id="visual-code" className="visual-content">
              <img src="/assets/images/visual/visual-code.png" alt="" />
            </div>
            <div id="visual-right" className="visual-content">
              <img src="/assets/images/visual/visual-right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="gq-about">
        <div className="container">
          <div className="h3-wrap">
            <h3 className="text-center font-poiret">
              <span className="black-span-title">Who we are</span>
            </h3>
            <p className="text-center font-poiret">About Studio GrotesQ.</p>
          </div>
          <p className="text-center" id="about-text">
            <strong>그로테스큐 스튜디오</strong>는 원하시는 어떤 작업이든 턴키로
            개발할 수 있는 전문 개발사입니다.
            <br />
            컨설턴트, 기획부터 디자인, 개발, 출시, 유지보수에 이르기까지 제품
            출시와 관리를 위한 모든 작업을 수행합니다.
            <br />
            <br />
            - 개발/마케팅 컨설턴트
            <br />
            - 클라우드 서버 설치 및 운영
            <br />
            - CMS 개발
            <br />
            - 웹사이트 개발
            <br />
            - 데스크탑/모바일 애플리케이션 개발
            <br />- 솔루션 설치 및 커스터마이징
          </p>
          <div className="h3-wrap">
            <h3 className="text-center font-poiret">
              <span className="black-span-title">Tech</span>
            </h3>
          </div>
          <p className="text-center">
            개발사는 기술을 통해 사회에 기여할 수 있다는 믿음으로, 항상 최신 기술을 연구하고 선도하기 위해 노력합니다.
            <br />
            <br />
            - React
            <br />
            - React Native
            <br />
            - Next.js
            <br />- Flutter
            <br />
            - Vue.js
            <br />
            - Laravel on Modern PHP
            <br />
            - Django on Python
            <br />
            - Amazon Web Services
            <br />- Serverless
          </p>

          <div className="text-center">
            <img src="/assets/images/about/about-image.png" alt="about-image" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
