import React from "react";
import { useImmerReducer } from "use-immer";

const initialState = { calculate: false, products: [] };

const InvoiceContext = React.createContext({
  state: initialState,
  dispatch: () => {},
});

const reducer = (draft, action) => {
  switch (action.type) {
    case "show_total":
      draft.calculate = true;
      return draft;
    case "hide_total":
      draft.calculate = false;
      return draft;
    case "close":
      return draft;
    case "add_product":
      draft.products.push({ ...action.products[0], quantity: 1 });
      return draft;
    case "set_product":
      console.log(action.data.product);
      draft.products[action.data.rowIndex] = {
        ...draft.products[action.data.rowIndex],
        ...action.data.product,
      };
      return draft;
    case "remove_product":
      draft.products.splice(action.rowIndex, 1);
      return draft;
    case "set_quantity":
      draft.products[action.data.rowIndex].quantity = action.data.value;
      return draft;
    default:
  }
};

export const InvoiceProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>
  );
};

export const useInvoice = () => {
  const context = React.useContext(InvoiceContext);
  if (context === undefined) {
    throw new Error("useInvoice must be used within a InvoiceProvider");
  }
  return context;
};
