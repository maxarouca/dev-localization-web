import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color: #DEDFDA;
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button {
    color: #04192A;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }
`;
