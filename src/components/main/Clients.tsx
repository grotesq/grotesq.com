import Image from 'next/image';
import styled from 'styled-components';
import Clients from '../../../public/assets/image/main/clients/clients.png';
import MobileClients from '../../../public/assets/image/main/clients/mb_clients.png';
import { motion } from 'framer-motion';

const SubTitle1 = styled(motion.h1)`
  ${({ theme }) => theme.subTitle1};
`;

const ClientSection = styled(motion.section)`
  ${({ theme }) => theme.flexCenter};
  width: 100%;
  background: #fbfcfe;
  p {
    font-size: 1.125rem;
    color: #${(props) => props.theme.color['black']};
    line-height: 1.67;
    @media ${(props) => props.theme.mediaQueryMax('sm')} {
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
export default function Client() {
  return (
    <ClientSection
      className="pt-15 pb-13 sm:pt-30 sm:pb-28"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div>
        <SubTitle1 variants={fadeUp}>OUR CLIENTS</SubTitle1>
        <motion.p className="pb-8 px-14 sm:pb-3" variants={fadeUp}>
          그로테스큐 스튜디오와 함께한 고객사입니다.
        </motion.p>
        <motion.div className="justify-center hidden w-screen sm:flex" variants={fadeUp}>
          <Image src={Clients} alt="고객사 로고들" />
        </motion.div>
        <motion.div className="flex justify-center w-screen sm:hidden" variants={fadeUp}>
          <Image src={MobileClients} alt="고객사 로고들" />
        </motion.div>
      </div>
      <motion.div
        className="absolute hidden right-80 lg:right-40 lg:mt-140 xl:mt-160 2xl:mt-188 lg:inline"
        variants={fadeUp}
      >
        <Image src="/assets/image/main/clients/background-1.svg" width="180" height="180" />
      </motion.div>
    </ClientSection>
  );
}
