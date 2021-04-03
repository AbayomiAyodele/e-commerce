import React, { useContext } from "react";

import { Row, Col, Button } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

import { StoreContext } from "context/storeContext";
import { mainYellow } from "constants/colors";

const CartItem = ({ item: { id, title, img, price, total, count } }) => {
  const { dispatch } = useContext(StoreContext);

  return (
    <Row className='my-4 text-capitalize text-center d-flex align-items-center'>
      {/* image */}
      <Col xs={10} lg={2} className='mx-auto'>
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className='img=fluid'
          alt={title}
        />
      </Col>

      {/* product name */}
      <Col xs={10} lg={2} className='mx-auto'>
        <span className='d-lg-none'>Product: </span>
        {title}
      </Col>

      {/* product price */}
      <Col xs={10} lg={2} className='mx-auto'>
        <span className='d-lg-none'>Price: </span>${price}
      </Col>

      {/* product quantity */}
      <Col xs={10} lg={2} className='mx-auto my-2 my-lg-0'>
        <div className='d-flex justify-content-center align-items-center'>
          {/* decrement */}
          <Button
            variant='outline-dark'
            className='mx-1'
            onClick={() => {
              if (count === 1) {
                dispatch({ type: "REMOVE_ITEM", payload: { id } });
              } else {
                dispatch({ type: "DECREMENT", payload: { id } });
              }
            }}
          >
            -
          </Button>

          {/* count */}
          <span className='mx-1'>{count}</span>

          {/* increment */}
          <Button
            variant='outline-dark'
            className='mx-1'
            onClick={() => dispatch({ type: "INCREMENT", payload: { id } })}
          >
            +
          </Button>
        </div>
      </Col>

      {/* product remove */}
      <Col xs={10} lg={2} className='mx-auto'>
        <FaTrashAlt
          style={{ color: mainYellow, cursor: "pointer" }}
          onClick={() => dispatch({ type: "REMOVE_ITEM", payload: { id } })}
        />
      </Col>

      {/* product total */}
      <Col xs={10} lg={2} className='mx-auto'>
        <strong>
          <span className='d-lg-none'>item total:</span> ${total}
        </strong>
      </Col>
    </Row>
  );
};

export default CartItem;
