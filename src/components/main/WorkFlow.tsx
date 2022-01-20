import Image from 'next/image';
import styled from 'styled-components';
import { pxToRem } from '../../utils/utils';
import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const WorkFlowSection = styled.section`
  background-image: url('/assets/image/main/workflow/background-1.svg'),
    url('/assets/image/main/workflow/background-6.svg'), url('/assets/image/main/workflow/background-5.svg'),
    url('/assets/image/main/workflow/background-4.svg'), url('/assets/image/main/workflow/background-7.svg');
  background-position: 34vw -50%, 12% 78%, -25% 75%, -15% 56%, 52vw 121%;
  background-size: 88%, 18rem, 38%, 43rem, 86%;
  background-repeat: no-repeat;
  background-attachment: scroll;

  @media ${({ theme }) => theme.mediaQueryMax('lg')} {
    background: none;
    background-image: url('/assets/image/main/workflow/background-1.svg'),
      url('/assets/image/main/workflow/background-2.svg'), url('/assets/image/main/workflow/background-4.svg'),
      url('/assets/image/main/workflow/background-7.svg');
    background-position: 30vw -10%, 91vw 7%, -38% 77%, 147% 103%;
    background-size: contain, 20vw, 58vw, 58vw;
    background-repeat: no-repeat;
  }
`;

const SubTitleBlue = styled.div`
  ${({ theme }) => theme.subTitleBlue};
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    font-size: ${pxToRem(16)};
  }
`;

const SubTitle1 = styled(motion.h1)`
  ${({ theme }) => theme.subTitle1};
`;

const SubTitle2 = styled.h2`
  color: ${(props) => props.theme['black']};
  font-size: ${pxToRem(32)};
  line-height: 0.94;
  padding-bottom: ${pxToRem(23)};
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    font-size: ${pxToRem(20)};
    padding-top: 0.5rem;
  }
`;

const Description = styled.p`
  color: #5a6282;
  font-size: ${pxToRem(18)};
  line-height: 1.67;
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    font-size: ${pxToRem(14)};
    line-height: 1.57;
  }
`;

function Divide1() {
  return (
    <section className="flex-row text-center">
      <div className="flex-row">
        <div className="pb-13 sm:pb-11">
          <SubTitle1>WORK FLOW</SubTitle1>
          <Description>
            만들어져있는 솔루션이 아닌 프로젝트별 맞춤형 컨설팅을 통해 만족스러운 퀄리티의 산출물을 제공할 수 있도록
            노력합니다.
          </Description>
          <Description>12주를 기준으로 프로젝트 규모에 따라 전체작업 일정을 산정합니다.</Description>
        </div>
        <div className="px-7 flex justify-center">
          <motion.div>
            <Image
              src="/assets/image/main/workflow/workflow-1.svg"
              width="457"
              height="320"
              alt="상담 하는 느낌의 일러스트"
            />
            <SubTitleBlue className="pt-7 sm:pt-9">Service Consulting</SubTitleBlue>
            <SubTitle2>서비스 컨설팅</SubTitle2>
            <div className="py-6">
              <Image src="/assets/image/main/workflow/down-arrow-1.svg" width="16" height="84" alt="아래 화살표" />
            </div>
          </motion.div>
          <div className="absolute right-[10%] top-[180%]">
            <motion.div
              className="text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: [200, 0] }}
              transition={{
                x: { ease: 'easeOut', duration: 0.5 },
                delay: 0.1,
              }}
              viewport={{ once: true }}
            >
              <Image src="/assets/image/main/workflow/background-2.svg" width="201" height="155" />
            </motion.div>
            <motion.div
              className="-mt-[4.7rem] ml-[7.4rem]"
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{
                scale: { type: 'spring' },
                delay: 0.2,
              }}
              viewport={{ once: true }}
            >
              <Image src="/assets/image/main/workflow/background-3.svg" width="266" height="266" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <motion.div>
          <Image
            src="/assets/image/main/workflow/workflow-2.svg"
            width="815"
            height="411"
            alt="기획 하는 느낌의 일러스트"
          />
          <SubTitleBlue className="pt-7 sm:pt-9">Service Planning</SubTitleBlue>
          <SubTitle2>서비스 기획 (Wireframe 동시진행)</SubTitle2>
        </motion.div>
      </div>
    </section>
  );
}

function Divide2() {
  const { scrollYProgress } = useViewportScroll();
  const initial = useTransform(scrollYProgress, (x) => x + 0.05);
  scrollYProgress.onChange(console.trace);

  return (
    <section className="flex">
      <div className="w-1/2">
        <div className="text-right">
          <Image src="/assets/image/main/workflow/left-arrow-1.svg" width="367" height="232" alt="왼쪽 화살표" />
        </div>
        <div className="text-center">
          <Image
            src="/assets/image/main/workflow/workflow-3.svg"
            width="390"
            height="350"
            alt="개발 하는 느낌의 일러스트"
          />
          <SubTitleBlue className="pt-5">Back-end</SubTitleBlue>
          <SubTitle2>백엔드 구축</SubTitle2>
        </div>
        <div className="text-right">
          <Image src="/assets/image/main/workflow/left-arrow-2.svg" width="500" height="648" alt="오른쪽 화살표" />
        </div>
      </div>
      <div className=" w-1/2">
        <div className="text-left">
          <Image src="/assets/image/main/workflow/right-arrow-1.svg" width="422" height="219" alt="오른쪽 화살표" />
        </div>
        <div className="text-center">
          <Image
            src="/assets/image/main/workflow/workflow-4.svg"
            width="331"
            height="330"
            alt="디자인 하는 느낌의 일러스트"
          />
          <SubTitleBlue className="pt-8">Design</SubTitleBlue>
          <SubTitle2>디자인</SubTitle2>
        </div>
        <div className="text-center">
          <Image src="/assets/image/main/workflow/down-arrow-2.svg" width="17" height="88" alt="아래 화살표" />
        </div>
        <div className="text-center">
          <Image
            src="/assets/image/main/workflow/workflow-5.svg"
            alt="개발 하는 느낌의 일러스트"
            width="331"
            height="330"
          />
          <SubTitleBlue>Front-end</SubTitleBlue>
          <SubTitle2>프론트 엔드 구축</SubTitle2>
        </div>
        <div className="text-left">
          <Image src="/assets/image/main/workflow/right-arrow-2.svg" width="359" height="94" alt="오른쪽 화살표" />
        </div>
      </div>
    </section>
  );
}

function MobileDivide2() {
  return (
    <section>
      <div className="text-center w-full pl-7">
        <Image src="/assets/image/main/workflow/mb_side-arrow-1.svg" width="274" height="125" alt="양쪽 화살표" />
      </div>
      <div className="flex items-end -mt-4">
        <div className="w-2/3">
          <div className="text-center pt-4">
            <Image
              src="/assets/image/main/workflow/workflow-3.svg"
              width="367"
              height="232"
              alt="개발 하는 느낌의 일러스트"
            />
            <SubTitleBlue className="pt-5">Back-end</SubTitleBlue>
            <SubTitle2>백엔드 구축</SubTitle2>
          </div>
          <div className="text-right">
            <Image src="/assets/image/main/workflow/mb_left-arrow-2.svg" width="244" height="411" alt="왼쪽 화살표" />
          </div>
        </div>
        <div className="w-1/3">
          <div className="text-center mx-auto py-9">
            <Image
              src="/assets/image/main/workflow/workflow-4.svg"
              width="331"
              height="330"
              alt="디자인 하는 느낌의 일러스트"
            />
            <SubTitleBlue className="pt-8">Design</SubTitleBlue>
            <SubTitle2>디자인</SubTitle2>
          </div>
          <div className="text-center">
            <Image src="/assets/image/main/workflow/mb_down-arrow-2.svg" width="8" height="42" alt="아래 화살표" />
          </div>
          <div className="text-center mx-auto">
            <Image
              src="/assets/image/main/workflow/workflow-5.svg"
              width="331"
              height="330"
              alt="개발 하는 느낌의 일러스트"
            />
            <SubTitleBlue>Front-end</SubTitleBlue>
            <SubTitle2>프론트 엔드 구축</SubTitle2>
          </div>
          <div className="text-left ml-auto">
            <Image src="/assets/image/main/workflow/mb_right-arrow-2.svg" width="94" height="94" alt="오른쪽 화살표" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Divide3() {
  return (
    <section className="flex-row text-center">
      <div className="sm:pb-7 px-14 sm:px-0">
        <Image
          src="/assets/image/main/workflow/workflow-6.svg"
          width="412"
          height="460"
          alt="회의 하는 느낌의 일러스트"
        />
        <SubTitleBlue className="pt-6">QA</SubTitleBlue>
        <SubTitle2>QA 진행</SubTitle2>
      </div>
      <div>
        <div className="pb-10 sm:pb-">
          <Image src="/assets/image/main/workflow/down-arrow-3.svg" width="17" height="104" alt="아래 화살표" />
        </div>
        <div>
          <Image
            src="/assets/image/main/workflow/workflow-7.svg"
            width="758"
            height="600"
            alt="환호 하는 느낌의 일러스트"
          />
          <SubTitleBlue>Service Launching</SubTitleBlue>
          <SubTitle2>서비스 런칭</SubTitle2>
        </div>
      </div>
    </section>
  );
}

export default function WorkFlow() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <WorkFlowSection className=" px-[2.4rem] py-15 sm:py-30">
      <Divide1 />
      {windowWidth > 768 ? <Divide2 /> : <MobileDivide2 />}
      <Divide3 />
    </WorkFlowSection>
  );
}
