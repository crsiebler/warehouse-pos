import React from "react";
import { useImmerReducer } from "use-immer";

const initialState = [];

const InvoiceContext = React.createContext({
  state: initialState,
  dispatch: () => {},
});

const reducer = (draft, action) => {
  switch (action.type) {
    case "close":
      draft = initialState;
      return draft;
    case "add_product":
      draft.push({ ...action.products[0], quantity: 1 });
      return draft;
    case "set_product":
      console.log("called");
      draft[action.data.rowIndex] = {
        ...draft[action.data.rowIndex],
        ...action.data.product,
      };
      return draft;
    case "remove_product":
      draft.splice(action.rowIndex, 1);
      return draft;
    case "set_quantity":
      draft[action.data.rowIndex].quantity = action.data.quantity;
      return draft;
    case "reset_quantity":
      draft[action.rowIndex].quantity = 1;
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
