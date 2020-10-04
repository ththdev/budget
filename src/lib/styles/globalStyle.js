import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    h1 {
        font-weight: 700;
    }
`;

export default GlobalStyle;
