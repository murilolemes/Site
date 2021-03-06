import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
  :root {
    --color-background: #1c2135;
    --color-primary-light: #e7e9ee;
    --color-primary: #cfdaff;
    --color-secondary-light: #8794c0;
    --color-secondary: #5a6794;

    font-size: 60%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: var(--color-background);
    color: var(--color-primary-light);
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    overflow-y: auto;
    scrollbar-width: 1px;
    ::-webkit-scrollbar-track {
      background-color: ${shade(0.6, '#5a6794')};
    }
    ::-webkit-scrollbar {
      width: 6px;
      background: ${shade(0.6, '#5a6794')};
    }
    ::-webkit-scrollbar-thumb {
      background: var(--color-secondary-light);
    }
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
