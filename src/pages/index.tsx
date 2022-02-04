import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout';
import Introduce from '../components/main/Introduce';
import WorkFlow from '../components/main/WorkFlow';
import Clients from '../components/main/Clients';
import Portfolio from '../components/main/Portfolio';
import Contact from '../components/Contact';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo title="메인" />
      <BaseLayout>
        <main>
          <Introduce />
          <WorkFlow />
          <Clients />
          <Portfolio />
          <Contact />
        </main>
      </BaseLayout>
    </>
  );
}
