import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { StoreContext } from "context/storeContext";
import { Button, Col, Container, Row } from "react-bootstrap";

const CartTotals = () => {
  const { cartSubTotal, cartTax, cartTotal, dispatch, cart } = useContext(
    StoreContext
  );

  // dispatching getTotals whenever the cart is changed so as to update totals
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [dispatch, cart]);

  return (
    <>
      <Container>
        <Row>
          <Col
            xs={8}
            className='mt-2 ml-sm-5 ml-md-auto text-capitalize, text-right'
          >
            <Link to='/'>
              <Button
                variant='outline-danger'
                className='text-uppercase mb-3 px-5'
                onClick={() => dispatch({ type: "CART_CLEAR" })}
              >
                clear cart
              </Button>
            </Link>

            <h5 className='text-uppercase text-muted'>
              <span>subtotal: </span>
              <strong>$ {cartSubTotal}</strong>
            </h5>

            <h5 className='text-uppercase text-muted'>
              <span>tax: </span>
              <strong>$ {cartTax}</strong>
            </h5>

            <h5 className='text-uppercase text-muted'>
              <span>total: </span>
              <strong>$ {cartTotal}</strong>
            </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartTotals;
