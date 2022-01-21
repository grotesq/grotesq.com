import styled from 'styled-components';
import Button from './Button';

const ContactSection = styled.section`
  ${({ theme }) => theme.flexCenter};
  background-image: url('/assets/image/main/contact/background-1.svg'),
    url('/assets/image/main/contact/background-2.svg'), linear-gradient(127deg, #5870ff 22%, #6d51ff 100%);
  color: ${(props) => props.theme.color['white']};
  line-height: 1.5;

  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    background-size: contain;
    background-position: top, bottom;
    background-repeat: no-repeat;
  }
`;
const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 300;
  line-height: 1;
  padding-bottom: 0.9375rem;
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    font-size: 1.125rem;
  }
`;

const SubTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    font-size: 0.875rem;
  }
`;

export default function Contact() {
  return (
    <ContactSection className="py-6 px-5 sm:pt-15 sm:pb-12">
      <div>
        <SubTitle>Ready to get started?</SubTitle>
        <Title>프로젝트를 문의하세요.</Title>
        <Button
          className="hidden md:inline-block"
          color="white"
          size="sm"
          round
          fill="true"
          onClick={() => (window.location.href = 'mailto:unknown@grotesq.com')}
        >
          문의하기
        </Button>
      </div>
    </ContactSection>
  );
}
