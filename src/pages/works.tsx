import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout';
import styled from 'styled-components';
import Contact from '../components/Contact';

const Carousel = styled.section``;

const OurWorks = styled.section``;

export default function Works() {
  return (
    <BaseLayout>
      <Head>
        <title>포트폴리오 :: 그로테스큐 GrotesQ</title>
      </Head>
      <main>
        <Carousel></Carousel>
        <Contact />
      </main>
    </BaseLayout>
  );
}
