import React, { createContext } from "react";

import { storeProducts } from "constants/data";

const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const getItem = (id) => {
    const product = storeProducts.find((item) => item.id === parseInt(id));
    return product;
  };

  const addToCart = (id) => {
    console.log("hello from addToCart fn with " + id);
  };

  return (
    <StoreContext.Provider value={{ storeProducts, addToCart, getItem }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };
