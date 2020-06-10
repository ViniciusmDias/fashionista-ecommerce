import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 16px "Noto Sans Sc", sans-serif;
  }
  #root {
    max-width: 960px;
    margin: 0 auto;
    --secondary: #f3d18a;
    --primary: #01a6baeb;
    --transparency: #000000bf;
    --black: #000;
    --white: #fff;
    --gray: #333333;
  }
  button {
    cursor: pointer;
  }
`;
