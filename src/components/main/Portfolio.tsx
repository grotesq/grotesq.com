import Button from '../../components/Button';
import Gallery from '../../components/Gallery';
import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PortfolioSection = styled(motion.section)`
  width: 100%;
  text-align: center;
  padding-top: 10.438rem;
  padding-bottom: 6.25rem;
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    padding-top: 3.75rem;
    padding-bottom: 1.875rem;
  }
`;

const SubTitle1 = styled(motion.h1)`
  ${({ theme }) => theme.subTitle1};
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    padding-bottom: 0.625rem;
  }
`;

const Description = styled(motion.div)`
  p {
    color: #${(props) => props.theme['black']};
    font-size: 1.125rem;
    line-height: 1.67;
    @media ${({ theme }) => theme.mediaQueryMax('sm')} {
      font-size: 0.875rem;
    }
  }
`;

const fadeUp = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'linear',
      when: 'beforeChildren',
      staggerChildren: 0.25,
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

export default function Portfolio() {
  return (
    <PortfolioSection
      className="px-5 xl:px-40"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SubTitle1 variants={fadeUp}>PORTFOLIOS</SubTitle1>
      <Description variants={fadeUp}>
        <p>그로테스큐 스튜디오의 주요 프로젝트 입니다.</p>
        <p>완벽한 서비스를 제공하기 위해서 항상 신기술을 연구하고, 견고한 내부 인프라를 구축해왔습니다.</p>
      </Description>
      <motion.div variants={fadeUp}>
        <Gallery />
      </motion.div>
      <Link href="/works">
        <a>
          <Button className="text-sm leading-7 sm:text-lg" size="lg" round border>
            프로젝트 전체보기
          </Button>
        </a>
      </Link>
    </PortfolioSection>
  );
}
