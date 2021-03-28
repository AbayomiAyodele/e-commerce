import styled, { createGlobalStyle } from "styled-components";

import { mainDark, mainWhite } from "constants/colors";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    background: ${mainWhite};
    color: ${mainDark};
  }
`;

export const Title = styled.h2`
  font-family: "Oswald", sans-serif;
  letter-spacing: 0.3em;
  text-transform: uppercase;
`;
