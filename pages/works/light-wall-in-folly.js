import React from 'react';
import Layout from '../../components/Layout';
import { NextSeo } from 'next-seo';

const title = 'Light Wall in Folly - 그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescriptio =
  '도심 예술 조형인 폴리 중 `꿈집`의 내부 벽면을 미디어 월로 채우는 전시 기획의 파일럿 전시. 유니티로 구현된 인터렉션 미디어 아트 프로젝트입니다.';
const ogTitle = 'Light Wall in Folly - 그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com/works/light-wall-in-folly';
const ogImage = 'https://img.youtube.com/vi/Rh1QAW_7z2I/maxresdefault.jpg';
const ogImageWidth = 1280;
const ogImageHeight = 720;
const ogDescription =
  '도심 예술 조형인 폴리 중 `꿈집`의 내부 벽면을 미디어 월로 채우는 전시 기획의 파일럿 전시. 유니티로 구현된 인터렉션 미디어 아트 프로젝트입니다.';

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
        <span>Light Wall in Folly</span>
      </h1>

      <div className="container">
        <div className="gq-youtube-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Rh1QAW_7z2I?rel=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <p className="mt-5">
          광주 아시아 문화 전당에서 진행한 전시 프로젝트입니다.
          <br />
          도심 예술 조형인 폴리 중 `꿈집`의 내부 벽면을 미디어 월로 채우는
          기획으로, 아시아 문화 전당 내부에 축소판의 공간을 만들어 전시했습니다.
          <br />
          사용자의 입력에 반응해 움직이고, 여러 사용자의 입력을 동시에 받아 서로
          교감하듯 반응합니다.
        </p>

        <p>
          유니티 3D로 만들어졌으며 화면 출력을 담당하는 호스트 애플리케이션과
          사용자 입력을 담당하는 게스트 애플리케이션으로 구성됩니다.
          <br />
          호스트와 게스트는 소켓 통신으로 연결되며, 전시에서는 LAN 상에
          구현되었으나 어떤 형태의 소켓이든 연결할 수 있습니다.
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
                  <li>Unity</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">Hardware</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>Microsoft Surface</li>
                  <li>IBM compatible PC</li>
                  <li>Beam projector &times; 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
