import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

export default function BaseLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Container>
      <Header />
      <Content className="scroll-smooth">{children}</Content>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 23.4375rem;
`;

const Content = styled.div`
  flex: 1;
  margin-top: 6.25rem;
  @media ${({ theme }) => theme.mediaQueryMax('sm')} {
    margin-top: 3.75rem;
  }
`;
