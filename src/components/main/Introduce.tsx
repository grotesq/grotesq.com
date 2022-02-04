import styled from 'styled-components';
import Button from '../Button';
import { motion } from 'framer-motion';

const IntroduceSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  background: ${(props) => props.theme.background['gradient80']}, url('/assets/image/main/introduce/background-1.jpg');

  @supports (background-image: -webkit-image-set(url('/assets/image/main/introduce/background-1.webp') 1x)) {
    background-image: ${(props) => props.theme.background['gradient80']},
      -webkit-image-set(url('/assets/image/main/introduce/background-1.webp') 1x);
  }
  background-size: cover;
  color: ${(props) => props.theme.color['white']};
`;

const LogoTitle = styled(motion.div)`
  ${({ theme }) => theme['logoTitle']};
  padding-bottom: 2rem;
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    padding-bottom: 1.25rem;
  }
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 100;
  letter-spacing: -0.06rem;
  line-height: 1.35;
  padding-bottom: 1.9375rem;
  & strong {
    font-weight: 900;
  }
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    font-size: 1.75rem;
    line-height: 1.43;
  }
`;

const SubTitleBlue = styled(motion.div)`
  ${({ theme }) => theme.subTitleBlue};
  letter-spacing: 0.25rem;
  padding-bottom: 2.1875rem;
`;

const Description = styled(motion.div)`
  padding-bottom: 2.875rem;
  p {
    font-weight: 300;
    font-size: 1.125rem;
    opacity: 0.8;
    line-height: 1.67;
  }
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    padding-bottom: 3.25rem;
    p {
      font-size: 0.875rem;
      line-height: 1.57;
    }
  }
`;
const fadeIn = {
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      type: 'linear',
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};
export default function Introduce() {
  const mailTo = () => (window.location.href = 'mailto:unknown@grotesq.com');
  return (
    <IntroduceSection className="px-12 pt-32 pb-28 lg:pt-62 lg:pb-52">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <LogoTitle variants={fadeIn}>Studio GrotesQ</LogoTitle>
        <div>
          <MainTitle>
            <motion.span variants={fadeIn}>
              서비스 하고 싶은 <strong>아이디어가 있으신가요?</strong>
            </motion.span>
            <br />
            <motion.span variants={fadeIn}>
              어떤 기술을 활용하여 서비스 제작을 해야 할지 <strong>막막하신가요?</strong>
            </motion.span>
          </MainTitle>
        </div>
        <Description variants={fadeIn}>
          <p>그로테스큐 스튜디오는 기획, 디자인부터 앱, 플랫폼 서비스 런칭까지 도와드립니다.</p>
          <div className="hidden sm:block">
            <p>가지고 계신 아이디어를 전문적인 컨설팅을 통해 구체화시켜드립니다.</p>
            <p>
              어려운 전문용어를 이해하지 못할까 봐 걱정하지 마세요. 비전문가도 쉽게 이해할 수 있는 컨설팅을 진행합니다.
            </p>
            <p>효과적인 제작 과정을 통하여 안정성&접근성 높은 결과물을 제작합니다.</p>
          </div>
        </Description>
        <motion.div variants={fadeIn}>
          <Button className="transition ease-in-out hover:bg-primary-blue-light" size="md" round onClick={mailTo}>
            프로젝트 문의하기
          </Button>
        </motion.div>
      </motion.div>
    </IntroduceSection>
  );
}
