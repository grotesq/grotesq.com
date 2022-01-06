import styled from 'styled-components';

export default function BaseLayout({ children }: any) {
  return (
    <Container>
      <Header>header</Header>
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

const Header = styled.header`
  background: #e5e5e5;
  height: 100px;
`;

const Content = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  background: #e5e5e5;
  height: 100px;
`;
