import React, { useContext } from "react";

import { Container } from "react-bootstrap";

import { StoreContext } from "context/storeContext";
import CartItem from "./CartItem";

const CartList = () => {
  const { cart } = useContext(StoreContext);

  return (
    <Container fluid>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default CartList;
