import Image from 'next/image';
import styled, { css } from 'styled-components';
import Button from '../Button';
import { pxToRem } from '../../utils/utils';

import Thumbnail1 from '/public/assets/image/main/clients/thumbnail-1.png';
import Thumbnail2 from '/public/assets/image/main/clients/thumbnail-2.png';
import Thumbnail3 from '/public/assets/image/main/clients/thumbnail-3.png';
import Thumbnail4 from '/public/assets/image/main/clients/thumbnail-4.png';
import Thumbnail5 from '/public/assets/image/main/clients/thumbnail-5.png';
import Thumbnail6 from '/public/assets/image/main/clients/thumbnail-6.png';

const PortfolioSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  padding-bottom: ${pxToRem(100)};
  p {
    font-size: ${pxToRem(18)};
    font-family: 'Noto Sans KR', sans-serif;
    color: #000;
    line-height: 1.67;
  }
`;

const SubTitle1 = styled.h1`
  ${({ theme }) => theme.subTitle1};
`;

export default function Portfolio() {
  return (
    <PortfolioSection>
      <SubTitle1>PORTFOLIOS</SubTitle1>
      <div className="pb-16">
        <p>그로테스큐 스튜디오의 주요 프로젝트 입니다.</p>
        <p>완벽한 서비스를 제공하기 위해서 항상 신기술을 연구하고, 견고한 내부 인프라를 구축해왔습니다.</p>
      </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-16 pb-20">
        <div>
          <Image src={Thumbnail1} alt="스마트 러닝 서비스 윌라 2.0 리뉴얼" />
          <p>스마트 러닝 서비스 윌라 2.0 리뉴얼</p>
        </div>
        <div>
          <Image src={Thumbnail2} alt="인천공항사규 App" />
          <p>인천공항사규 App</p>
        </div>
        <div>
          <Image src={Thumbnail3} alt="바른성장 기록 App" />
          <p>바른성장 기록 App</p>
        </div>
        <div>
          <Image src={Thumbnail4} alt="스팀 연동 게임 커뮤니티 App" />
          <p>스팀 연동 게임 커뮤니티 App</p>
        </div>
        <div>
          <Image src={Thumbnail5} alt="양업고등학교 홈페이지" />
          <p>양업고등학교 홈페이지</p>
        </div>
        <div>
          <Image src={Thumbnail6} alt="동물상 테스트 App" />
          <p>동물상 테스트 App </p>
        </div>
      </div>
      <div>
        <button className="rounded-full text-primary-blue border-primary-blue border-2 px-20 py-6">
          프로젝트 전체보기
        </button>
      </div>
    </PortfolioSection>
  );
}
