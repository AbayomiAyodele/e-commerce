import React from "react";

import { GlobalStyles } from "globalStyles";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Row>
          <Col>first one</Col>
          <Col>second one</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
