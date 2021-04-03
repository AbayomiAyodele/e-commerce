import React, { createContext, useReducer } from "react";

import { storeProducts } from "constants/data";
const StoreContext = createContext();

// initial State
const initialState = {
  products: [...storeProducts],
  cart: [],
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
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
        cart: [
          ...state.cart,
          { ...item, inCart: true, count: 1, total: item.price },
        ],

        // return prev products with item inCart set to true
        products: state.products.map((product) => {
          if (product.id === parseInt(action.payload.id)) {
            return { ...product, inCart: true, count: 1 };
          }
          return product;
        }),
      };

    case "DECREMENT":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: item.count - 1,
              total: (item.count - 1) * item.price,
            };
          }
          return item;
        }),
      };

    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: item.count + 1,
              total: (item.count + 1) * item.price,
            };
          }
          return item;
        }),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),

        products: state.products.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, inCart: false, count: 0, total: 0 };
          }
          return item;
        }),

        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      };

    case "CART_CLEAR":
      return {
        ...state,
        cart: [],
        products: [...storeProducts],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
      };

    case "GET_TOTALS":
      const subTotal = state.cart.reduce((acc, item) => (acc += item.total), 0);
      const tax = parseFloat((subTotal * 0.1).toFixed(2));
      const total = subTotal + tax;

      return {
        ...state,
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };

    default:
      return state;
  }
};

const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };
