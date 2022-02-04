import styled, { css } from 'styled-components';
import Image from 'next/image';
import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout';
import Contact from '../components/Contact';
import OurWorks from '../components/works/OurWorks';
import Carousel from '../components/works/Carousel';

export default function Works() {
  return (
    <BaseLayout>
      <Head>
        <title>포트폴리오 :: 그로테스큐 GrotesQ</title>
        <meta property="og:title" content="포트폴리오 :: 그로테스큐 GrotesQ" />
        <meta
          property="og:description"
          content="그로테스큐 스튜디오의 주요 프로젝트 입니다.
                  완벽한 서비스를 제공하기 위해서 항상 신기술을 연구하고, 견고한 내부 인프라를 구축해왔습니다."
        />
        <meta
          name="description"
          content="그로테스큐 스튜디오의 주요 프로젝트 입니다.
                  완벽한 서비스를 제공하기 위해서 항상 신기술을 연구하고, 견고한 내부 인프라를 구축해왔습니다."
        />
      </Head>
      <main>
        <Carousel />
        <OurWorks />
        <Contact />
      </main>
    </BaseLayout>
  );
}
