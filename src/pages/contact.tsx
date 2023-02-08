import BaseLayout from '../components/layouts/BaseLayout';
import styled from 'styled-components';
import Button from '../components/Button';

export default function Contact() {
  return (
    <BaseLayout>
      <Container>
        <SubTitle1>프로젝트 문의하기</SubTitle1>

        <form className="p-4">
          <Input className="mb-4" type="text" placeholder="이름" />
          <Input className="mb-4" type="text" placeholder="연락처" />
          <Input className="mb-4" type="text" placeholder="이메일" />
          <TextArea placeholder="문의 내용" rows={7} />
          <div className="mb-4" />

          <Button className="transition ease-in-out hover:bg-primary-blue-light" size="md" round>
            프로젝트 문의하기
          </Button>
        </form>
      </Container>
    </BaseLayout>
  );
}

const Container = styled.section`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  padding-top: 7.435rem;
  padding-bottom: 4.437rem;
  width: 100%;
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    padding-top: 3.75rem;
    padding-bottom: 0;
  }
`;

const SubTitle1 = styled.h1`
  ${({ theme }) => theme.subTitle1};
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
`;
