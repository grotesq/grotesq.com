import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout'
import styled, { css } from 'styled-components';
import Introduce from '../components/main/Introduce';
import WorkFlow from '../components/main/WorkFlow';
import Clients from '../components/main/Clients';
import Portfolio from '../components/main/Portfolios';
import Contact from '../components/main/Contact';

export default function Home() {
  const PortfolioSection = styled.section`
    ${({ theme }) => theme.flexCenter};
    background: #fad4ae;
    height: 1477px;
  `;
  const ContactSection = styled.section`
    ${({ theme }) => theme.flexCenter};
    background: #d9f1f1;
    height: 250px;
  `;
  return (
    <BaseLayout>
      <Head>
        <title>메인 :: 그로테스큐 GrotesQ</title>
      </Head>
      <main>
        <Introduce />
        <WorkFlow />
        <Clients />
        <Portfolio />
        <Contact />
      </main>
    </BaseLayout>
  );
}
