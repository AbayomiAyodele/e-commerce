import styled from "styled-components";
import { Link } from "react-router-dom";

import { mainWhite, mainYellow } from "constants/colors";

export const HeaderNavLink = styled(Link)`
  color: ${mainWhite};
  transition: 0.2s ease;

  &:hover {
    text-decoration: none;
    color: ${mainYellow};
  }
`;
