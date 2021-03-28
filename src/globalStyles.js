import { createGlobalStyle } from "styled-components";

import { mainDark, mainWhite } from "constants/colors";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    background: ${mainWhite};
    color: ${mainDark};
  }
`;
