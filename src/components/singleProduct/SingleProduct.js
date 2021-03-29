import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { Col } from "react-bootstrap";
import { ProductCard, ImageContainer, CartBtn } from "./SingleProduct.styled";

const SingleProduct = ({ product: { id, title, img, price, inCart } }) => {
  return (
    <Col xs={9} md={6} lg={3} className='my-3 mx-auto'>
      <ProductCard>
        <ImageContainer
          className='p-5'
          onClick={() => console.log("u clicked the image container")}
        >
          <Link to='/details'>
            <img src={img} alt={title} className='card-img-top' />
          </Link>

          <CartBtn
            disabled={inCart}
            onClick={() => console.log("added to cart")}
          >
            {inCart ? <p className='mb-0'>In Cart</p> : <FaShoppingCart />}
          </CartBtn>
        </ImageContainer>

        {/* card footer */}
        <ProductCard.Footer className='d-flex justify-content-between align-items-center'>
          <p className='mb-0'>{title}</p>
          <h5 className='text-muted font-italic'>
            <span className='mr-1'>$</span>
            {price}
          </h5>
        </ProductCard.Footer>
      </ProductCard>
    </Col>
  );
};

export default SingleProduct;
