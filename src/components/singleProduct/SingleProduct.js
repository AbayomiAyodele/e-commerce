import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { StoreContext } from "context/storeContext";
import { FaShoppingCart } from "react-icons/fa";
import { Row, Col, Modal, Button } from "react-bootstrap";

import ModalContainer from "../modal/ModalContainer";
import { ProductCard, ImageContainer, CartBtn } from "./SingleProduct.styled";

const SingleProduct = ({ product: { id, title, img, price, inCart } }) => {
  const { dispatch } = useContext(StoreContext);

  const [showModal, setShowModal] = useState(false);

  return (
    <Col xs={9} md={6} lg={3} className='my-3 mx-auto'>
      <ProductCard>
        <ImageContainer className='p-5'>
          <Link to={`/details/${id}`}>
            <img src={img} alt={title} className='card-img-top' />
          </Link>

          <CartBtn
            disabled={inCart}
            onClick={() => {
              dispatch({ type: "CART_ADD", payload: { id } });
              setShowModal(true);
            }}
          >
            {inCart ? (
              <p className='mb-0 text-muted'>In Cart</p>
            ) : (
              <FaShoppingCart />
            )}
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

      {/* card modal */}
      {showModal
        ? ReactDOM.createPortal(
            <ModalContainer>
              <Row>
                <Col xs={8} md={6} lg={4} className='mx-auto '>
                  <Modal
                    show={showModal}
                    aria-labelledby='contained-modal-title-vcenter'
                    centered
                  >
                    <Modal.Title className='text-center text-capitalize'>
                      item added to the cart
                    </Modal.Title>
                    <Button
                      variant='secondary'
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </Button>
                  </Modal>
                </Col>
              </Row>
            </ModalContainer>,
            document.body
          )
        : null}
    </Col>
  );
};

// setting up PropTypes
SingleProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default SingleProduct;
