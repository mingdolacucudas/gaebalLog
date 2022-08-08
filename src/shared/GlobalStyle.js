import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'twayair';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_tway@1.0/twayair.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: twayair, sans-serif;
    }
    
`;

export default GlobalStyle;
