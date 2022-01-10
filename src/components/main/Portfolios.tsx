import styled, { css } from 'styled-components';

const PortfolioSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  height: 1477px;
`;

export default function Portfolio() {
  return (
    <PortfolioSection>
      <div>
        <h1>PORTFOLIOS</h1>
        <p>그로테스큐 스튜디오의 주요 프로젝트 입니다.</p>
        <p>완벽한 서비스를 제공하기 위해서 항상 신기술을 연구하고, 견고한 내부 인프라를 구축해왔습니다.</p>
      </div>
    </PortfolioSection>
  );
}
