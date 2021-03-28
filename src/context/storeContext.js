import React, { createContext } from "react";

import { storeProducts, detailProduct } from "constants/data";

const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const handleDetail = () => {
    console.log("hello from detail fn");
  };

  const addToCart = () => {
    console.log("hello from addToCart fn");
  };

  return (
    <StoreContext.Provider
      value={{ storeProducts, detailProduct, handleDetail, addToCart }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };
