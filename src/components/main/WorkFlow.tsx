import Image from 'next/image';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../utils/utils';
import Bg1 from '../../../public/assets/image/main/workflow/background-1.svg';

const WorkFlowSection = styled.section`
  background-image: url('/assets/image/main/workflow/background-1.svg'),
    url('/assets/image/main/workflow/background-3.svg'), url('/assets/image/main/workflow/background-2.svg'),
    url('/assets/image/main/workflow/background-4.svg'), url('/assets/image/main/workflow/background-6.svg'),
    url('/assets/image/main/workflow/background-5.svg'), url('/assets/image/main/workflow/background-7.svg');
  background-position: 33vw -50%, 90% 16%, 80% 15%, -15% 56%, 12% 78%, -25% 75%, 50vw 121%;
  background-size: 88%, 16.6rem, 12.5rem, 43rem, 18rem, 38%, 86%;
  background-repeat: no-repeat;
  background-attachment: local;
`;

const SubTitleBlue = styled.div`
  ${({ theme }) => theme.subTitleBlue};
`;

const SubTitle1 = styled.h1`
  ${({ theme }) => theme.subTitle1};
`;

const SubTitle2 = styled.h2`
  color: #000;
  font-size: ${pxToRem(32)};
  line-height: 0.94;
  padding-bottom: ${pxToRem(23)};
`;

const Description = styled.p`
  color: #5a6282;
  font-size: ${pxToRem(18)};
  line-height: 1.67;
`;

function Divide1() {
  return (
    <section className="flex-row text-center">
      <div className="flex-row">
        <div className="pb-13 sm:pb-11">
          <SubTitle1>Work flow</SubTitle1>
          <Description>
            만들어져있는 솔루션이 아닌 프로젝트별 맞춤형 컨설팅을 통해 만족스러운 퀄리티의 산출물을 제공할 수 있도록
            노력합니다.
          </Description>
          <Description>12주를 기준으로 프로젝트 규모에 따라 전체작업 일정을 산정합니다.</Description>
        </div>
        <div className="">
          <Image src="/assets/image/main/workflow/workflow-1.svg" width="457" height="320" />
          <SubTitleBlue>Service Consulting</SubTitleBlue>
          <SubTitle2>서비스 컨설팅</SubTitle2>
        </div>
        <div>
          <Image src="/assets/image/main/workflow/down-arrow-1.svg" width="16" height="84" />
        </div>
      </div>
      <div className="py-5">
        <div className="">
          <Image src="/assets/image/main/workflow/workflow-2.svg" width="815" height="411" />
          <SubTitleBlue>Service Planning</SubTitleBlue>
          <SubTitle2>서비스 기획 (Wireframe 동시진행)</SubTitle2>
        </div>
      </div>
    </section>
  );
}

function Divide2() {
  return (
    <section className="flex">
      <div className="w-1/2">
        <div className="text-right">
          <Image src="/assets/image/main/workflow/left-arrow-1.svg" width="367" height="232" />
        </div>
        <div className="text-center">
          <Image src="/assets/image/main/workflow/workflow-3.svg" width="367" height="232" />
          <SubTitleBlue>Back-end</SubTitleBlue>
          <SubTitle2>백엔드 구축</SubTitle2>
        </div>
        <div className="text-right">
          <Image src="/assets/image/main/workflow/left-arrow-2.svg" width="500" height="648" />
        </div>
      </div>
      <div className=" w-1/2">
        <div className="text-left">
          <Image src="/assets/image/main/workflow/right-arrow-1.svg" width="422" height="219" />
        </div>
        <div className="text-center">
          <Image src="/assets/image/main/workflow/workflow-4.svg" width="331" height="330" />
          <SubTitleBlue>Design</SubTitleBlue>
          <SubTitle2>디자인</SubTitle2>
        </div>
        <div className="text-center">
          <Image src="/assets/image/main/workflow/down-arrow-2.svg" width="17" height="88" />
        </div>
        <div className="text-center">
          <Image src="/assets/image/main/workflow/workflow-5.svg" width="331" height="330" />
          <SubTitleBlue>Front-end</SubTitleBlue>
          <SubTitle2>프론트 엔드 구축</SubTitle2>
        </div>
        <div className="text-left">
          <Image src="/assets/image/main/workflow/right-arrow-2.svg" width="359" height="94" />
        </div>
      </div>
    </section>
  );
}

function Divide3() {
  return (
    <section className="flex-row text-center">
      <div className=" sm:pb-7">
        <Image src="/assets/image/main/workflow/workflow-6.svg" width="412" height="460" />
        <SubTitleBlue>QA</SubTitleBlue>
        <SubTitle2>QA 진행</SubTitle2>
      </div>
      <div className="">
        <div>
          <Image src="/assets/image/main/workflow/down-arrow-3.svg" width="17" height="104" />
        </div>
        <div>
          <Image src="/assets/image/main/workflow/workflow-7.svg" width="758" height="600" />
          <SubTitleBlue>Service Launching</SubTitleBlue>
          <SubTitle2>서비스 런칭</SubTitle2>
        </div>
      </div>
    </section>
  );
}

export default function WorkFlow() {
  return (
    <WorkFlowSection className=" px-[2.4rem] py-15 sm:py-30">
      <Divide1 />
      <Divide2 />
      <Divide3 />
    </WorkFlowSection>
  );
}
