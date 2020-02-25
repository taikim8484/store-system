import { createGlobalStyle } from 'styled-components';

const GlobalStype = createGlobalStyle`
  * {
    box-sizing:border-box;
    padding:0;
    margin:0;
  }

  html { font-family: 'Roboto', sans-serif; }

  body > #root > div {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    display: block;
    height: 100vh;
  },
`;

export default GlobalStype;
