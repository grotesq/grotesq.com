import styled from 'styled-components';

const Container = styled.div`
  text-align: ${props => props.textAlign || 'center'};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border: 1px solid ${props => (props.darkMode ? '#ffffff' : '#000000')};
    display: inline-block;
    padding: 0.35em 2em;
    color: ${props => (props.darkMode ? '#ffffff' : '#000000')} !important;
    position: relative;
    min-width: 6em;
    width: auto;
    margin: 2rem auto;

    &::before,
    &::after {
      display: block;
      width: 0.6em;
      height: 0.6em;
      background: ${props => (props.darkMode ? '#ffffff' : '#000000')};
      position: absolute;
      content: ' ';
    }

    &::before {
      left: -0.3em;
      top: -0.3em;
    }

    &::after {
      right: -0.3em;
      bottom: -0.3em;
    }
  }
`;

export default function Title(props) {
  return <Container {...props}>{props.children}</Container>;
}
