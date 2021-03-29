import styled from "styled-components";
import { Card } from "react-bootstrap";

import { lightBlue, mainBLue, mainWhite } from "constants/colors";

export const ProductCard = styled(Card)`
  border-color: transparent;
  transition: all 0.6s linear;

  &:hover {
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CartBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.2em 0.4em;
  background: ${lightBlue};
  border: none;
  color: ${mainWhite};
  font-size: 1.4rem;
  border-top-left-radius: 0.5em;
  transform: translate(100%, 100%);
  transition: all 0.6s linear;

  &:hover {
    color: ${mainBLue};
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;

  img {
    transition: all 0.6s linear;
  }

  &:hover img {
    transform: scale(1.2);
  }

  &:hover ${CartBtn} {
    transform: translate(0, 0);
  }
`;
