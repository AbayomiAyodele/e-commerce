import React, { createContext, useReducer } from "react";

import { storeProducts } from "constants/data";
const StoreContext = createContext();

const initialState = {
  products: [...storeProducts],
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CART_ADD":
      // get item in cart with id === payload.id
      const item = state.products.find(
        (product) => product.id === parseInt(action.payload.id)
      );
      return {
        ...state, //prev state

        // return prev cart with new item with new props
        cart: [...state.cart, { ...item, inCart: true, count: 1 }],

        // return prev products with item inCart set to true
        products: state.products.map((product) => {
          if (product.id === parseInt(action.payload.id)) {
            return { ...product, inCart: true };
          }
          return product;
        }),
      };

    default:
      return state;
  }
};

const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };
