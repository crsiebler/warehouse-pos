import React from "react";
import { useImmerReducer } from "use-immer";

const initialState = {
  id: "",
  name: "",
  company: "",
  discount: 0,
};

const ContractorContext = React.createContext({
  state: initialState,
  dispatch: () => {},
});

const reducer = (draft, action) => {
  switch (action.type) {
    case "set_contractor":
      draft = action.data;
      return draft;
    case "close":
      draft = initialState;
      return draft;
    default:
  }
};

export const ContractorProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <ContractorContext.Provider value={value}>
      {children}
    </ContractorContext.Provider>
  );
};

export const useContractor = () => {
  const context = React.useContext(ContractorContext);
  if (context === undefined) {
    throw new Error("useContractor must be used within a ContractorProvider");
  }
  return context;
};
