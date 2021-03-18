import React from "react";
import { useImmerReducer } from "use-immer";

const initialState = [{ id: null, name: "", price: null, quantity: 0 }];

const ProductContext = React.createContext({
  state: initialState,
  dispatch: () => {},
});

const reducer = (draft, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return void draft.count++;
    case "decrement":
      return void draft.count--;
    default:
  }
};

export const ProductProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = React.useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
