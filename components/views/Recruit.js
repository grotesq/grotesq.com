import React from 'react';
import Layout from '../Layout';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import Link from 'next/link';
import Title from '../ui/Title';

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

const Recruit = () => {
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
        {/*<h2 className="text-center font-poiret">*/}
        {/*  <span> Recruit </span>*/}
        {/*</h2>*/}
        <Title>
          <h1>Recruit</h1>
        </Title>
        <div className="container">
          <div className="text-center">
            <img
              src="/assets/images/about/about-image.png"
              style={{ maxWidth: '100%', marginBottom: '2rem' }}
              alt="about-image"
            />
          </div>
          <Title textAlign={'left'}>
            <h3 className="font-noto">모집중</h3>
          </Title>
          <div>
            <ul>
              <li>
                <a
                  href={
                    'https://www.notion.so/grotesq/iOS-Android-React-Native-9917b375a8404b84964a701b6fc859c7'
                  }
                  target={'_blank'}
                >
                  앱 개발자 (iOS, Android, React Native) 구인
                </a>
              </li>
            </ul>
          </div>
          <Title textAlign={'left'}>
            <h3 className="font-noto">지난 공고</h3>
          </Title>
          <div>
            <ul>
              <li>
                <a
                  href={
                    'https://www.notion.so/grotesq/2021-1-2-d45419fa3d4e42b0a41b44dae5162a68'
                  }
                  target={'_blank'}
                >
                  2021 백엔드 경력직(주니어/1~2년차)
                </a>
              </li>
              <li>
                <a
                  href={
                    'https://www.notion.so/grotesq/2021-1-2-f403aaadfbed474588d188b3ae466de4'
                  }
                  target={'_blank'}
                >
                  2021 퍼블리셔/프론트엔드 경력직(주니어/1~2년차)
                </a>
              </li>
              <li>
                <Link href={'/recruit/20-frontend-senior'}>
                  <a>프론트엔드 개발자 (경력)</a>
                </Link>
              </li>
              <li>
                <Link href={'/recruit/20-internship'}>
                  <a>인턴십</a>
                </Link>
              </li>
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

export default Recruit;
