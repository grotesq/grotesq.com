import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout'
import styled, { css } from 'styled-components';
import Introduce from '../components/main/Introduce';

export default function Home() {
  const WorkflowSection = styled.section`
    ${({ theme }) => theme.flexCenter};
    background: #ab92bf;
    height: 4342px;
  `;
  const ClientSection = styled.section`
    ${({ theme }) => theme.flexCenter};
    background: #fdafab;
    height: 711px;
  `;
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
        <WorkflowSection></WorkflowSection>
        <ClientSection>
          <div>
            <h1>OUR CLIENTS</h1>
            <p>그로테스큐 스튜디오와 함께한 고객사입니다.</p>
          </div>
        </ClientSection>
        <PortfolioSection>
          <div>
            <h1>PORTFOLIOS</h1>
            <p>그로테스큐 스튜디오의 주요 프로젝트 입니다.</p>
            <p>완벽한 서비스를 제공하기 위해서 항상 신기술을 연구하고, 견고한 내부 인프라를 구축해왔습니다.</p>
          </div>
        </PortfolioSection>
        <ContactSection>
          <div>
            <div>Ready to get started?</div>
            <div>프로젝트를 문의하세요.</div>
            <button type="button">문의하기</button>
          </div>
        </ContactSection>
      </main>
    </BaseLayout>
  );
}
