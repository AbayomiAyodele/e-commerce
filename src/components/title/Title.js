import React from "react";

import { Row, Col } from "react-bootstrap";

import { TextTitle } from "./Title.styled";

const Title = ({ name }) => {
  return (
    <Row>
      <Col xs={12} lg={10} className='mx-auto my-2 text-center'>
        <TextTitle>{name}</TextTitle>
      </Col>
    </Row>
  );
};

export default Title;
