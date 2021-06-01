import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #F5F8FA;
    color: #123952;
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
  }
  html, body {
    height: 100vh;
  }
  body, input, button {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
