import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { StoreContext } from "context/storeContext";

import { Container, Row, Col, Button } from "react-bootstrap";

const Details = () => {
  const { id } = useParams(); //get dynamic id from url

  const { addToCart, getItem } = useContext(StoreContext);
  const { title, img, company, price, info, inCart } = getItem(id);

  return (
    <Container className='py-5'>
      {/* product title */}
      <Row>
        <Col xs={10} className='mx-auto my-5 text-muted text-center'>
          <h1>{title}</h1>
        </Col>
      </Row>

      {/* product details */}
      <Row>
        {/* image */}
        <Col xs={10} md={6} className='mx-auto my-3'>
          <img src={img} alt={title} className='img-fluid' />
        </Col>

        {/* text */}
        <Col xs={10} md={6} className='mx-auto my-3 text-capitalize'>
          <h4 className=' text-capitalize my-3'>
            <strong>made by: </strong> {company}
          </h4>
          <h4 className='text-primary'>
            <strong>price: ${price}</strong>
          </h4>
          <p className='text-capitalize mt-2 mb-0 font-weight-bold'>
            some info about the product:
          </p>
          <p className='lead text-muted'>{info}</p>

          {/* buttons */}
          <div>
            <Link to='/'>
              <Button variant='primary'>Back to Products</Button>
            </Link>

            <Button
              disabled={inCart}
              variant='outline-primary'
              className='ml-3'
              onClick={() => addToCart(id)}
            >
              {inCart ? "In Cart" : "Add To Cart"}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
