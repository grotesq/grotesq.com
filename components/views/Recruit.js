import React from 'react';
import Layout from '../Layout';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import Link from 'next/link';

const title = 'Recruit - 그로테스큐 스튜디오 || Studio GrotesQ';
const metaDescription = '그로테스큐 스튜디오의 구인 정보입니다.';
const ogTitle = 'Recruit - 그로테스큐 스튜디오 || Studio GrotesQ';
const ogUrl = 'https://www.grotesq.com/recruit';
const ogImage = 'https://www.grotesq.com/assets/images/social.png';
const ogImageWidth = 1200;
const ogImageHeight = 1200;
const ogDescription = '그로테스큐 스튜디오의 구인 정보입니다.';

const FoldButton = styled.button`
  background: transparent;
  border: none;
  padding-left: 0;
  padding-right: 0;
`;

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
              <span className="black-span-title">모집중</span>
            </h3>
          </div>
          <div>
            <ul>
              <li>현재 모집중인 공고가 없습니다.</li>
            </ul>
          </div>
          <div className="h3-wrap">
            <h3 className="font-noto">
              <span className="black-span-title">지난 공고</span>
            </h3>
          </div>
          <div>
            <ul>
                <li>
                    <Link href={'/recruit/20-june-publisher'}>
                        <a>웹 퍼블리셔 (정규직)</a>
                    </Link>
                </li>
              <li>
                <Link href={'/recruit/20-april-backend-contractor'}>
                  <a>백엔드 개발자 (계약직)</a>
                </Link>
              </li>
              <li>
                <Link href={'/recruit/20-april-frontend-contractor'}>
                  <a>프론트엔드 개발자 (계약직)</a>
                </Link>
              </li>
              <li>
                <Link href={'/recruit/20-web-designer'}>
                  <a>웹 디자이너 신입 or 초급</a>
                </Link>
              </li>
              <li>
                <Link href={'/recruit/20-frontend-developer'}>
                  <a>프론트엔드 개발자 신입 or 초급</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};
