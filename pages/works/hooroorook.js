import React from "react";
import Layout from "../../components/Layout";
import { NextSeo } from "next-seo";

const title = "아이유의 후루룩 칼국수 - 그로테스큐 스튜디오 || Studio GrotesQ";
const metaDescription =
  "인터렉티브 무비 컨텐츠였던 아이유의 후루룩 칼국수 프로젝트를 진행했습니다.";
const ogTitle = "아이유의 후루룩 칼국수 - 그로테스큐 스튜디오 || Studio GrotesQ";
const ogUrl = "https://www.grotesq.com/works/hooroorook/";
const ogImage =
  "https://www.grotesq.com/assets/images/works/thumbnail/hooroorook.png";
const ogImageWidth = 1000;
const ogImageHeight = 500;
const ogDescription =
  "인터렉티브 무비 컨텐츠였던 아이유의 후루룩 칼국수 프로젝트를 진행했습니다.";

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
            alt: ogTitle
          }
        ],
        site_name: "그로테스큐 스튜디오 || Studio GrotesQ"
      }}
    />
    <div className="gq-section gq-section--dark">
      <h1>
        <span>아이유의 후루룩 칼국수</span>
      </h1>

      <div className="container">
        <div className="text-center">
          <img
            src="/assets/images/works/hooroorook/hrr-screen-1(1600-559).png"
            alt=""
            className="gq-image-landscape"
          />
        </div>

        <p className="mt-5">
          농심에서 진행한 아이유의 후루룩 칼국수 프로모션 프로젝트를
          진행했습니다.
          <br />
          대규모 트래픽이 예상되어 미리 로드밸런싱 처리를 진행했고, 프로모션
          첫날에만 100만명이 넘는 사용자들이 몰렸지만 원활하게 서비스
          되었습니다.
        </p>
      </div>
    </div>

    <div className="gq-section">
      <div className="container">
        <div className="text-center">
          <img
            src="/assets/images/works/hooroorook/hrr-screen-7(1600-847).png"
            alt=""
            className="gq-image-landscape"
          />
        </div>

        <p className="mt-5">
          사용자의 입력이 컨텐츠에 반영되는 인터렉티브 무비 형태로
          작업되었습니다.
          <br />
          사진 등을 영상에 실시간으로 합성하기 위한 VFX 기술등이 도입되었습니다.
          <br />
          영상에 대한 빠른 처리를 위해 AVM 기반의 Action Script 3.0으로 개발
          되었습니다.
        </p>
      </div>
    </div>

    <div className="gq-section gq-section--dark">
      <div className="container">
        <div className="text-center">
          <img
            src="/assets/images/works/hooroorook/hrr-screen-8.png"
            alt=""
            className="gq-image-landscape"
          />
        </div>

        <p className="mt-5">박보검님의 풋풋한 모습들도 볼 수 있습니다.</p>
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
                  <li>Code Igniter</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">Frontend</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>Flash</li>
                  <li>Action Script 3.0</li>
                  <li>VFX</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-header">etc</div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>Hardware Load Balancing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
