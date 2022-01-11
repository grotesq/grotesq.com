import Image from 'next/image';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../utils/utils';

const WorkFlowSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  p {
    font-family: 'Noto Sans KR', sans-serif;
    color: #5a6282;
    font-size: ${pxToRem(18)};
    line-height: 1.67;
    padding-bottom: ${pxToRem(46)};
  }
`;

const ContentSection = styled.section`
  width: 100%;
  background-image: url(${({ bgUrl }) => bgUrl});
  background-repeat: no-repeat;
  &:first-child {
    padding-top: ${pxToRem(120)};
  }
  &:last-child {
    padding-bottom: ${pxToRem(120)};
  }
`;

const backgroundDiv = styled.div`
  background-image: url(${({ bgUrl }) => bgUrl});
`;

const SubTitleBlue = styled.div`
  ${({ theme }) => theme.subTitleBlue};
  line-height: 1.36;
`;

const SubTitle1 = styled.h1`
  ${({ theme }) => theme.subTitle1};
`;

const SubTitle2 = styled.h2`
  color: #000;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: ${pxToRem(32)};
  line-height: 0.94;
  padding-bottom: ${pxToRem(23)};
`;

function ImageContainer({ src, width, height, enTitle, koTitle }) {
  return (
    <div>
      <Image src={src} width={width} height={height} />
      <SubTitleBlue className="pt-9">{enTitle}</SubTitleBlue>
      <SubTitle2>{koTitle}</SubTitle2>
    </div>
  );
}

export default function WorkFlow() {
  return (
    <WorkFlowSection>
      <ContentSection bgUrl="/assets/image/main/workflow/background-1.svg" className="bg-right-bottom">
        <SubTitle1>WORK FLOW</SubTitle1>
        <p>
          만들어져있는 솔루션이 아닌 프로젝트별 맞춤형 컨설팅을 통해 만족스러운 퀄리티의 산출물을 제공할 수 있도록
          노력합니다. <br />
          12주를 기준으로 프로젝트 규모에 따라 전체작업 일정을 산정합니다.
        </p>
        <ImageContainer
          src="/assets/image/main/workflow/workflow-1.svg"
          width="457"
          height="320"
          enTitle="Service Consulting"
          koTitle="서비스 컨설팅"
        ></ImageContainer>
        <Image src="/assets/image/main/workflow/down-arrow-1.svg" width="16" height="84" />
      </ContentSection>
      <ContentSection>
        <ImageContainer
          src="/assets/image/main/workflow/workflow-2.svg"
          width="815"
          height="411"
          enTitle="Service Planning"
          koTitle="서비스 기획 (Wireframe 동시진행)"
        ></ImageContainer>
        <div className="flex flex-col items-center">
          <div className="flex pb-8">
            <Image src="/assets/image/main/workflow/left-arrow-1.svg" width="367" height="232" />
            <Image src="/assets/image/main/workflow/right-arrow-1.svg" width="422" height="219" />
          </div>

          <div className="flex md:space-x-96">
            <ImageContainer
              src="/assets/image/main/workflow/workflow-3.svg"
              width="390"
              height="350"
              enTitle="Back-end"
              koTitle="백엔드 구축"
            ></ImageContainer>
            <ImageContainer
              src="/assets/image/main/workflow/workflow-4.svg"
              width="331"
              height="330"
              enTitle="Design"
              koTitle="디자인"
            ></ImageContainer>
          </div>
        </div>
      </ContentSection>

      <ContentSection bgUrl="/assets/image/main/workflow/background-4.svg" className="flex justify-center bg-left-top">
        <div className="ml-20">
          <Image src="/assets/image/main/workflow/left-arrow-2.svg" width="500" height="648" />
        </div>
        <div>
          <div className="ml-44 pb-6">
            <Image src="/assets/image/main/workflow/down-arrow-2.svg" width="17" height="88" />
            <ImageContainer
              src="/assets/image/main/workflow/workflow-5.svg"
              width="359"
              height="320"
              enTitle="Front-end"
              koTitle="프론트 엔드 구축"
            ></ImageContainer>
          </div>
          <div className="mr-44">
            <Image src="/assets/image/main/workflow/right-arrow-2.svg" width="359" height="94" />
          </div>
        </div>
      </ContentSection>

      <ContentSection bgUrl="/assets/image/main/workflow/background-5.svg" className="pb-10 bg-left">
        <div className="pb-7">
          <ImageContainer
            src="/assets/image/main/workflow/workflow-6.svg"
            width="412"
            height="460"
            enTitle="QA"
            koTitle="QA 진행"
          ></ImageContainer>
        </div>
        <div>
          <Image src="/assets/image/main/workflow/down-arrow-3.svg" width="17" height="104" />
        </div>
      </ContentSection>
      <ContentSection bgUrl="/assets/image/main/workflow/background-8.svg" className="-ml-20 bg-right-top">
        <ImageContainer
          src="/assets/image/main/workflow/workflow-7.svg"
          width="758"
          height="600"
          enTitle="Service Launching"
          koTitle="서비스 런칭"
        ></ImageContainer>
      </ContentSection>
    </WorkFlowSection>
  );
}
