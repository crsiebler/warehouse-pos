import React from "react";
import { useImmerReducer } from "use-immer";

const initialState = [];

const ProductContext = React.createContext({
  state: initialState,
  dispatch: () => {},
});

const reducer = (draft, action) => {
  switch (action.type) {
    case "set_products":
      return draft.concat(action.data);
    case "sort_products":
      return draft.sort((a, b) => {
        return a.sku.localeCompare(b.sku);
      });
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
