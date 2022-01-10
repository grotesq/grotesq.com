import styled, { css } from 'styled-components';
import { pxToRem } from '../../utils/utils';
import Image from 'next/image';
import ImgDownArrow1 from '/public/assets/image/main/workflow/down-arrow-1.svg';
import ImgWorkFlow1 from '/public/assets/image/main/workflow/workflow-1.svg';
import Background1 from '/public/assets/image/main/workflow/background-1.svg';

const WorkFlowSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  height: 4342px;
  flex-direction: column;
`;

const WorkFlowDiv = styled.div``;

const SubTitleBlue = styled.div`
  ${({ theme }) => theme.subTitleBlue};
  line-height: 1.36;
`;

const SubTitle1 = styled.h1`
  font-size: ${pxToRem(50)};
  line-height: 1.52;
  font-weight: 600;
  color: #000;
  padding-bottom: ${pxToRem(18)};
  font-family: 'Noto Sans KR', sans-serif; ;
`;

const SubTitle2 = styled.h2`
  font-size: ${pxToRem(32)};
  line-height: 0.94;
  color: #000;
  padding-bottom: ${pxToRem(23)};
  font-family: 'Noto Sans KR', sans-serif; ;
`;

const Description = styled.div`
  p {
    color: #5a6282;
    font-size: ${pxToRem(18)};
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1.67;
    padding-bottom: ${pxToRem(46)};
  }
`;

export default function WorkFlow() {
  return (
    <WorkFlowSection>
      <WorkFlowDiv>
        <SubTitle1>WORK FLOW</SubTitle1>
        <Description>
          <p>
            만들어져있는 솔루션이 아닌 프로젝트별 맞춤형 컨설팅을 통해 만족스러운 퀄리티의 산출물을 제공할 수 있도록
            노력합니다. <br />
            12주를 기준으로 프로젝트 규모에 따라 전체작업 일정을 산정합니다.
          </p>
        </Description>
        <ImgWorkFlow1 className="pb-9 mx-auto" />
        <SubTitleBlue>Service Consulting</SubTitleBlue>
        <SubTitle2>서비스 컨설팅</SubTitle2>
        <ImgDownArrow1 className="pb-5 mx-auto" />
      </WorkFlowDiv>
      <WorkFlowDiv>
        <SubTitleBlue>Service Planning</SubTitleBlue>
        <SubTitle2>서비스 기획 (Wireframe 동시진행)</SubTitle2>
      </WorkFlowDiv>
      <WorkFlowDiv>
        <div>
          <SubTitleBlue>Back-end</SubTitleBlue>
          <SubTitle2>백엔드 구축</SubTitle2>
        </div>
        <div>
          <SubTitleBlue>Design</SubTitleBlue>
          <SubTitle2>디자인</SubTitle2>
        </div>
        <div>
          <SubTitleBlue>Front-end</SubTitleBlue>
          <SubTitle2>프론트 엔드 구축</SubTitle2>
        </div>
      </WorkFlowDiv>
      <WorkFlowDiv>
        <SubTitleBlue>QA</SubTitleBlue>
        <SubTitle2>QA 진행</SubTitle2>
      </WorkFlowDiv>
      <WorkFlowDiv>
        <SubTitleBlue>Service Launching</SubTitleBlue>
        <SubTitle2>서비스 런칭</SubTitle2>
      </WorkFlowDiv>
    </WorkFlowSection>
  );
}
