import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WorkFlowSection = styled.section`
  background-image: url('/assets/image/main/workflow/background-1.svg'),
    url('/assets/image/main/workflow/background-4.svg'), url('/assets/image/main/workflow/background-7.svg');
  background-position: 34vw -35%, -15% 56%, 52vw 121%;
  background-size: 88%, 43rem, 86%;
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

  @media screen and (min-width: 1920px) {
    background-image: url('/assets/image/main/workflow/background-1.svg'),
      url('/assets/image/main/workflow/background-4.svg'), url('/assets/image/main/workflow/background-7.svg');
    background-position: 31vw -40%, -15% 56%, 52vw 160%;
    background-size: 88%, 43rem, contain;
    background-repeat: no-repeat;
  }
`;

const SubTitleBlue = styled.div`
  ${({ theme }) => theme.subTitleBlue};
  line-height: 1.36;
  padding-bottom: 0.5rem;
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    font-size: 1rem;
  }
`;

const SubTitle1 = styled(motion.h1)`
  ${({ theme }) => theme.subTitle1};
`;

const SubTitle2 = styled.h2`
  color: ${(props) => props.theme['black']};
  font-size: 2rem;
  line-height: 0.94;
  padding-bottom: 1.8rem;
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    font-size: 1.25rem;
    padding-bottom: 0.2rem;
  }
`;

const Description = styled.p`
  color: #5a6282;
  font-size: 1.125rem;
  line-height: 1.67;
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    font-size: 0.875rem;
    line-height: 1.57;
  }
`;

const BgDecoration1 = styled(motion.span)`
  position: absolute;
  right: 5rem;
  margin-top: 15rem;
`;

const BgDecoration2 = styled(motion.span)`
  position: absolute;
  left: 0;
`;
const fadeUp = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'linear',
      when: 'beforeChildren',
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    y: 150,
    transition: {
      when: 'afterChildren',
    },
  },
};

function Divide1() {
  return (
    <motion.section
      className="flex-row text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex-row">
        <div>
          <SubTitle1 variants={fadeUp}>WORK FLOW</SubTitle1>
          <motion.div variants={fadeUp} className="px-5 sm:px-0">
            <Description>
              만들어져있는 솔루션이 아닌 프로젝트별 맞춤형 컨설팅을 통해 만족스러운 퀄리티의 산출물을 제공할 수 있도록
              노력합니다.
            </Description>
            <Description>12주를 기준으로 프로젝트 규모에 따라 전체작업 일정을 산정합니다.</Description>
          </motion.div>
        </div>
        <motion.div className="flex justify-center px-8 sm:px-7 pt-15 sm:pt-12" variants={fadeUp}>
          <div>
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
          </div>
          <BgDecoration1 variants={fadeUp} className="hidden 2xl:inline">
            <motion.div
              className="text-left"
              initial={{ x: 150 }}
              whileInView={{ x: 0 }}
              transition={{
                duration: 1.75,
              }}
              viewport={{ once: true }}
            >
              <Image src="/assets/image/main/workflow/background-2.svg" width="201" height="155" />
            </motion.div>
            <motion.div
              className="-mt-20 ml-30"
              initial={{ scale: 1.5 }}
              whileInView={{ scale: 1 }}
              transition={{
                ease: 'easeOut',
                duration: 0.4,
              }}
              viewport={{ once: true }}
            >
              <Image src="/assets/image/main/workflow/background-3.svg" width="266" height="266" />
            </motion.div>
          </BgDecoration1>
        </motion.div>
      </div>
      <motion.div
        className="pb-8 sm:py-5"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 1.25, duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div>
          <Image
            src="/assets/image/main/workflow/workflow-2.svg"
            width="815"
            height="411"
            alt="기획 하는 느낌의 일러스트"
          />
          <SubTitleBlue className="pt-7 sm:pt-9">Service Planning</SubTitleBlue>
          <SubTitle2>서비스 기획 (Wireframe 동시진행)</SubTitle2>
        </div>
      </motion.div>
    </motion.section>
  );
}

function Divide2() {
  return (
    <motion.section
      className="justify-center hidden sm:flex"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid w-full grid-cols-2 text-center">
        <div className="pl-8 ml-auto">
          <Image src="/assets/image/main/workflow/left-arrow-1.svg" width="367" height="232" alt="왼쪽 화살표" />
        </div>
        <div className="mr-auto">
          <Image src="/assets/image/main/workflow/right-arrow-1.svg" width="422" height="219" alt="오른쪽 화살표" />
        </div>
        <motion.div className="pt-8 pb-2 mx-auto xl:pl-30 md:pr-20 lg:pr-0" variants={fadeUp}>
          <Image
            src="/assets/image/main/workflow/workflow-3.svg"
            width="390"
            height="350"
            alt="개발 하는 느낌의 일러스트"
          />
          <SubTitleBlue className="pt-5">Back-end</SubTitleBlue>
          <SubTitle2>백엔드 구축</SubTitle2>
        </motion.div>
        <motion.div className="pt-16 md:pl-20 lg:pl-0" variants={fadeUp}>
          <Image
            src="/assets/image/main/workflow/workflow-4.svg"
            width="331"
            height="330"
            alt="디자인 하는 느낌의 일러스트"
          />
          <SubTitleBlue className="pt-8">Design</SubTitleBlue>
          <SubTitle2>디자인</SubTitle2>
        </motion.div>
        <motion.div variants={fadeUp} className="row-span-3 ml-auto">
          <Image src="/assets/image/main/workflow/left-arrow-2.svg" width="500" height="648" alt="오른쪽 화살표" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <Image src="/assets/image/main/workflow/down-arrow-2.svg" width="17" height="88" alt="아래 화살표" />
        </motion.div>
        <motion.div variants={fadeUp} className="pt-10 pb-2 md:px-20 lg:pl-0">
          <Image
            src="/assets/image/main/workflow/workflow-5.svg"
            alt="개발 하는 느낌의 일러스트"
            width="331"
            height="330"
          />
          <SubTitleBlue>Front-end</SubTitleBlue>
          <SubTitle2>프론트 엔드 구축</SubTitle2>
        </motion.div>
        <motion.div variants={fadeUp} className="mr-auto">
          <Image src="/assets/image/main/workflow/right-arrow-2.svg" width="359" height="94" alt="오른쪽 화살표" />
        </motion.div>
      </div>
    </motion.section>
  );
}

function MobileDivide2() {
  return (
    <motion.section className="flex sm:hidden" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="grid grid-cols-2 text-center">
        <div className="flex justify-center col-span-2 pl-8 pr-4 pb-7">
          <Image src="/assets/image/main/workflow/mb_side-arrow-1.svg" width="274" height="125" alt="양쪽 화살표" />
        </div>
        <motion.div className="pb-6 pr-4" variants={fadeUp}>
          <Image
            src="/assets/image/main/workflow/workflow-3.svg"
            width="200"
            height="179"
            alt="개발 하는 느낌의 일러스트"
          />
          <SubTitleBlue className="pt-5">Back-end</SubTitleBlue>
          <SubTitle2>백엔드 구축</SubTitle2>
        </motion.div>
        <motion.div className="px-6 pt-4" variants={fadeUp}>
          <Image
            src="/assets/image/main/workflow/workflow-4.svg"
            width="331"
            height="330"
            alt="디자인 하는 느낌의 일러스트"
          />
          <SubTitleBlue className="pt-3 pb-8">Design</SubTitleBlue>
          <SubTitle2 className="pb-0">디자인</SubTitle2>
        </motion.div>
        <motion.div variants={fadeUp} className="relative w-screen row-span-3 -left-24">
          <Image src="/assets/image/main/workflow/mb_left-arrow-2.svg" layout="fill" alt="왼쪽 화살표" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <Image src="/assets/image/main/workflow/mb_down-arrow-2.svg" width="6" height="32" alt="아래 화살표" />
        </motion.div>
        <motion.div className="w-2/3 pt-4 mx-auto" variants={fadeUp}>
          <Image
            src="/assets/image/main/workflow/workflow-5.svg"
            width="331"
            height="330"
            alt="개발 하는 느낌의 일러스트"
          />
          <SubTitleBlue>Front-end</SubTitleBlue>
          <SubTitle2>프론트 엔드 구축</SubTitle2>
        </motion.div>
        <motion.div variants={fadeUp} className="w-2/3 pt-4 mb-1">
          <Image src="/assets/image/main/workflow/mb_right-arrow-2.svg" width="94" height="122" alt="오른쪽 화살표" />
        </motion.div>
      </div>
    </motion.section>
  );
}

function Divide3() {
  return (
    <motion.section
      className="flex-row text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div>
        <BgDecoration2 className="hidden lg:inline" whileInView={{ x: ['-100%', '0%'] }} viewport={{ once: true }}>
          <div className="absolute -ml-140 xl:-ml-80">
            <Image src="/assets/image/main/workflow/background-5.svg" width="700" height="700" />
          </div>
          <div className="pl-40 pt-80">
            <Image src="/assets/image/main/workflow/background-6.svg" width="300" height="300" />
          </div>
        </BgDecoration2>
        <motion.div className="sm:pb-7 px-14 sm:px-0" variants={fadeUp}>
          <Image
            src="/assets/image/main/workflow/workflow-6.svg"
            width="412"
            height="460"
            alt="회의 하는 느낌의 일러스트"
          />
          <SubTitleBlue className="pt-6">QA</SubTitleBlue>
          <SubTitle2>QA 진행</SubTitle2>
        </motion.div>
        <motion.div className="my-8" variants={fadeUp}>
          <Image src="/assets/image/main/workflow/down-arrow-3.svg" width="17" height="104" alt="아래 화살표" />
        </motion.div>
      </div>
      <div>
        <motion.div className="pt-10" variants={fadeUp}>
          <div className="-ml-20">
            <Image
              src="/assets/image/main/workflow/workflow-7.svg"
              width="758"
              height="600"
              alt="환호 하는 느낌의 일러스트"
            />
          </div>
          <SubTitleBlue>Service Launching</SubTitleBlue>
          <SubTitle2>서비스 런칭</SubTitle2>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function WorkFlow() {
  return (
    <WorkFlowSection className="px-10 py-15 sm:py-30">
      <Divide1 />
      <Divide2 />
      <MobileDivide2 />
      <Divide3 />
    </WorkFlowSection>
  );
}
