import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout'
import styled, { css } from 'styled-components';

const flexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export default function Home() {
  const MainSection = styled.section`
    ${flexCenter};
    background: #8EB695;
    height: 980px;
    text-align: center;
  `
  const WorkflowSection = styled.section`
    ${flexCenter};
    background: #AB92BF;
    height: 4342px;
  `
  const ClientSection = styled.section`
    ${flexCenter};
    background: #FDAFAB;
    height: 711px;
  `
  const PortfolioSection = styled.section`
    ${flexCenter};
    background: #FAD4AE;
    height: 1477px;
  `   
  const ContactSection = styled.section`
    ${flexCenter};
    background: #D9F1F1;
    height: 250px;
  `
  return (
    <BaseLayout>
      <Head>
        <title>메인 :: 그로테스큐 GrotesQ</title>
      </Head>
      <main>
        <MainSection>
          <div>
            <div>
              Studio GrotesQ
            </div>
            <div>
              <h1>서비스 하고 싶은 <strong>아이디어가 있으신가요?</strong></h1>
              <h1>어떤 기술을 활용하여 서비스 제작을 해야 할지<strong>막막하신가요?</strong></h1>
            </div>
            <div>
              <p>그로테스큐 스튜디오는 기획, 디자인부터 앱, 플랫폼 서비스 런칭까지 도와드립니다.</p>
              <p>가지고 계신 아이디어를 전문적인 컨설팅을 통해 구체화시켜드립니다.</p>
              <p>어려운 전문용어를 이해하지 못할까 봐 걱정하지 마세요. 비전문가도 쉽게 이해할 수 있는 컨설팅을 진행합니다.</p>
              <p>효과적인 제작 과정을 통하여 안정성&접근성 높은 결과물을 제작합니다.</p>
            </div>
            <div>
              <button type="button">프로젝트 문의하기</button>
            </div>
          </div>
        </MainSection>
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
