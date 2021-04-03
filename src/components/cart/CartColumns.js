import React from "react";
import { Container, Col } from "react-bootstrap";

const CartColumns = () => {
  return (
    <Container fluid className='text-center d-none d-lg-flex'>
      <Col xs={10} lg={2} className='mx-auto'>
        <p className='text-uppercase'>products</p>
      </Col>

      <Col xs={10} lg={2} className='mx-auto'>
        <p className='text-uppercase'>name of product</p>
      </Col>

      <Col xs={10} lg={2} className='mx-auto'>
        <p className='text-uppercase'>price</p>
      </Col>

      <Col xs={10} lg={2} className='mx-auto'>
        <p className='text-uppercase'>quantity</p>
      </Col>

      <Col xs={10} lg={2} className='mx-auto'>
        <p className='text-uppercase'>remove</p>
      </Col>

      <Col xs={10} lg={2} className='mx-auto'>
        <p className='text-uppercase'>total</p>
      </Col>
    </Container>
  );
};

export default CartColumns;
