import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Default = (props) => {
  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto text-center text-capitalize mt-5'>
          <h1 className='display-3'>404</h1>
          <h2>page not found</h2>
          <h3>
            the requested URL{" "}
            <span className='text-danger'>"{props.location.pathname}"</span> was
            not found
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Default;
