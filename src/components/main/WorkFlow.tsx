import Image from 'next/image';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../utils/utils';
import Bg1 from '../../../public/assets/image/main/workflow/background-1.svg';

const WorkFlowSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  p {
    color: #5a6282;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: ${pxToRem(18)};
    line-height: 1.67;
    padding-bottom: ${pxToRem(46)};
    @media ${({ theme }) => theme.mediaQuery('sm')} {
      font-size: ${pxToRem(14)};
    }
  }
  @media ${({ theme }) => theme.mediaQuery('sm')} {
    padding-right: ${pxToRem(39)};
    padding-left: ${pxToRem(38)};
  }
`;

const ContentSection = styled.section`
  background-repeat: no-repeat;
  width: 100%;
  &:first-child {
    background-image: url('/assets/image/main/workflow/background-1.svg');
    background-position: 210% 90%;
    padding-top: ${pxToRem(120)};
  }
  &:first-child::after {
    background-image: url('/assets/image/main/workflow/background-2.svg');
    content: '';
    height: ${pxToRem(155)};
    margin-top: -15rem;
    position: absolute;
    right: ${pxToRem(300)};
    width: ${pxToRem(201)};
    @media ${({ theme }) => theme.mediaQuery('2xl')} {
      display: none;
    }
  }
  &:nth-child(2)::before {
    background-image: url('/assets/image/main/workflow/background-3.svg');
    content: '';
    height: ${pxToRem(266)};
    margin-top: -10rem;
    position: absolute;
    right: ${pxToRem(115)};
    width: ${pxToRem(266)};
    @media ${({ theme }) => theme.mediaQuery('2xl')} {
      display: none;
    }
  }
  &:nth-child(3)::after {
    background-image: url('/assets/image/main/workflow/background-4.svg');
    content: '';
    height: ${pxToRem(1352)};
    left: -10%;
    margin-top: -12rem;
    position: absolute;
    width: ${pxToRem(700)};
    @media ${({ theme }) => theme.mediaQuery('2xl')} {
      display: none;
    }
  }
  &:nth-child(4)::before {
    background-image: url('/assets/image/main/workflow/background-5.svg');
    background-position: right;
    content: '';
    height: ${pxToRem(700)};
    left: 0;
    margin-top: -8rem;
    position: absolute;
    width: ${pxToRem(350)};
    @media ${({ theme }) => theme.mediaQuery('2xl')} {
      display: none;
    }
  }
  &:nth-child(4)::after {
    background-image: url('/assets/image/main/workflow/background-6.svg');
    content: '';
    height: ${pxToRem(300)};
    left: ${pxToRem(200)};
    margin-top: -30rem;
    position: absolute;
    width: ${pxToRem(300)};
    @media ${({ theme }) => theme.mediaQuery('2xl')} {
      display: none;
    }
  }
  &:nth-child(5)::before {
    background-image: url('/assets/image/main/workflow/background-7.svg');
    content: '';
    width: ${pxToRem(1000)};
    height: ${pxToRem(1697)};
    margin-top: -53.55rem;
    position: absolute;
    right: 0;
    @media ${({ theme }) => theme.mediaQuery('2xl')} {
      background: none;
    }
  }
  &:last-child {
    padding-bottom: ${pxToRem(120)};
  }
`;

const SubTitleBlue = styled.div`
  ${({ theme }) => theme.subTitleBlue};
  line-height: 1.36;
  @media ${({ theme }) => theme.mediaQuery('sm')} {
    font-size: ${pxToRem(16)};
  }
`;

const SubTitle1 = styled.h1`
  ${({ theme }) => theme.subTitle1};
`;

const SubTitle2 = styled.h2`
  color: #000;
  font-size: ${pxToRem(32)};
  line-height: 0.94;
  padding-bottom: ${pxToRem(23)};
  @media ${({ theme }) => theme.mediaQuery('sm')} {
    font-size: ${pxToRem(20)};
  }
`;

function ImageContainer({ src, width, height, enTitle, koTitle }) {
  return (
    <div>
      <Image src={src} width={width} height={height} />
      <SubTitleBlue className="pt-7 sm:pt-9">{enTitle}</SubTitleBlue>
      <SubTitle2>{koTitle}</SubTitle2>
    </div>
  );
}

export default function WorkFlow() {
  return (
    <WorkFlowSection>
      <ContentSection>
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
        <div className="flex">
          <div className="relative">
            <Image src="/assets/image/main/workflow/background-2.svg" layout="fill" />
          </div>
          <div className="relative">
            <Image src="/assets/image/main/workflow/background-3.svg" layout="fill" />
          </div>
        </div>
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
          <div className="flex pl-16 pr-8 pb-8">
            <Image src="/assets/image/main/workflow/left-arrow-1.svg" width="367" height="232" />
            <Image src="/assets/image/main/workflow/right-arrow-1.svg" width="422" height="219" />
          </div>
          <div className="flex space-x-16 md:space-x-96 ">
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

      <ContentSection className="flex justify-center">
        <div className="sm:ml-20">
          <div className="hidden sm:flex">
            <Image src="/assets/image/main/workflow/left-arrow-2.svg" width="500" height="648" />
          </div>
          <div className="sm:hidden w-max">
            <Image src="/assets/image/main/workflow/mb_left-arrow-2.svg" width="244" height="411" />
          </div>
        </div>
        <div>
          <div className="sm:ml-44 pb-6">
            <div>
              <Image src="/assets/image/main/workflow/down-arrow-2.svg" width="17" height="88" />
              <ImageContainer
                src="/assets/image/main/workflow/workflow-5.svg"
                width="359"
                height="320"
                enTitle="Front-end"
                koTitle="프론트 엔드 구축"
              ></ImageContainer>
            </div>
          </div>
          <div>
            <div className="hidden sm:flex sm:mr-44">
              <Image src="/assets/image/main/workflow/right-arrow-2.svg" width="359" height="94" />
            </div>
            <div className="sm:hidden">
              <Image
                src="/assets/image/main/workflow/mb_right-arrow-2.svg"
                width="94"
                height="122"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection className="pb-10">
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
      <ContentSection>
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
