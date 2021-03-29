import React, { useContext } from "react";

import { Container, Row } from "react-bootstrap";

import Title from "../title/Title";
import SingleProduct from "components/singleProduct/SingleProduct";
import { StoreContext } from "context/storeContext";

const Products = () => {
  const { products } = useContext(StoreContext);

  return (
    <>
      <Container className='py-5'>
        <Container>
          <Title name='our products.' />
          <Row>
            {products.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Products;
