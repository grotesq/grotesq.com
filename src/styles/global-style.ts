import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    html {
      word-break: keep-all;
      font-family: 'Noto Sans KR', sans-serif;
    }
`;