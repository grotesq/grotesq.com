import styled from 'styled-components';
import Header from '../Header';

export default function BaseLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Container>
      <Header/>
      <Content>{children}</Content>
      <Footer>footer</Footer>
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

const Footer = styled.footer`
  background: #e5e5e5;
  height: 100px;
`;
