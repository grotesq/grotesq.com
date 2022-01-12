import Image from 'next/image';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../utils/utils';
import clients from '../../../public/assets/image/main/clients/clients.png';

const SubTitle1 = styled.h1`
  ${({ theme }) => theme.subTitle1};
`;

const ClientSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  height: 711px;
  background: #fbfcfe;

  p {
    font-size: ${pxToRem(18)};
    font-family: 'Noto Sans KR', sans-serif;
    color: #000;
    line-height: 1.67;
    padding-bottom: ${pxToRem(12.2)};
  }
  &::after {
    content: '';
    position: absolute;
    background-image: url('/assets/image/main/clients/background-1.svg');
    width: ${pxToRem(180)};
    height: ${pxToRem(180)};
    right: ${pxToRem(375)};
    margin-top: 50rem;
  }
`;

export default function Client() {
  return (
    <ClientSection>
      <div>
        <SubTitle1>OUR CLIENTS</SubTitle1>
        <p>그로테스큐 스튜디오와 함께한 고객사입니다.</p>
        <Image src={clients} />
      </div>
    </ClientSection>
  );
}
