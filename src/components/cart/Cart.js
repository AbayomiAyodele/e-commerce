import React, { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";

import { StoreContext } from "context/storeContext";
import Title from "../title/Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
  const { cart } = useContext(StoreContext);

  return cart.length ? (
    <section>
      <Container className='py-5'>
        <Title name={"your cart"} />
        <CartColumns />
        <CartList />
        <CartTotals />
      </Container>
    </section>
  ) : (
    <Container className='py-5'>
      <Row>
        <Col xs={10} className='mx-auto text-center text-uppercase'>
          <Title name='your cart is currently empty' />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
