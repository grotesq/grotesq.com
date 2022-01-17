import Image from 'next/image';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../utils/utils';
import Clients from '../../../public/assets/image/main/clients/clients.png';
import MobileClients from '../../../public/assets/image/main/clients/mb_clients.png';

const SubTitle1 = styled.h1`
  ${({ theme }) => theme.subTitle1};
`;

const ClientSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  width: 100%;
  background: #fbfcfe;
  p {
    font-size: ${pxToRem(18)};
    color: #000;
    line-height: 1.67;
    @media ${({ theme }) => theme.mediaQuery('sm')} {
      font-size: ${pxToRem(14)};
    }
  }
  &::after {
    content: '';
    position: absolute;
    background-image: url('/assets/image/main/clients/background-1.svg');
    width: ${pxToRem(180)};
    height: ${pxToRem(180)};
    right: ${pxToRem(375)};
    margin-top: 50rem;
    @media ${({ theme }) => theme.mediaQuery('2xl')} {
      display: none;
    }
  }
`;

export default function Client() {
  return (
    <ClientSection className="pt-15 pb-13 sm:pt-30 sm:pb-28">
      <div>
        <SubTitle1>OUR CLIENTS</SubTitle1>
        <p className="pb-14 px-14 sm:pb-3 ">그로테스큐 스튜디오와 함께한 고객사입니다.</p>
        <div className="hidden sm:flex w-screen">
          <Image src={Clients} alt="고객사 로고들" />
        </div>
        <div className="flex sm:hidden w-screen">
          <Image src={MobileClients} alt="고객사 로고들" />
        </div>
      </div>
    </ClientSection>
  );
}
