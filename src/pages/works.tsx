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
      </Head>
      <main>
        <Carousel />
        <OurWorks />
        <Contact />
      </main>
    </BaseLayout>
  );
}
