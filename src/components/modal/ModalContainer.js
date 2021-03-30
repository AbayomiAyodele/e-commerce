import React from "react";
import { Link } from "react-router-dom";

import { Overlay, Inner } from "./Modal.styled";

const ModalContainer = ({ children }) => {
  return (
    <Overlay>
      <Inner>{children}</Inner>
    </Overlay>
  );
};

export default ModalContainer;
