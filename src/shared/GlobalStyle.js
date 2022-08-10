import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'EarlyFontDiary';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/EarlyFontDiary.woff2') format('woff2');
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
