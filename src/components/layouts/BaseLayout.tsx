import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer'

export default function BaseLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;
