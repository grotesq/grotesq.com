import styled, { css } from 'styled-components';

const ClientSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  height: 711px;
`;

export default function Client() {
  return (
    <ClientSection>
      <div>
        <h1>OUR CLIENTS</h1>
        <p>그로테스큐 스튜디오와 함께한 고객사입니다.</p>
      </div>
    </ClientSection>
  );
}
