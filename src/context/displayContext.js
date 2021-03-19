import React from "react";
import { useImmerReducer } from "use-immer";

const initialState = {
  calculate: false,
  alert: { open: false, severity: "info", message: "" },
};

const DisplayContext = React.createContext({
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
    case "show_alert":
      draft.alert = { ...draft.alert, ...action.alert };
      return draft;
    case "hide_alert":
      draft.alert.open = false;
      return draft;
    default:
  }
};

export const DisplayProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <DisplayContext.Provider value={value}>{children}</DisplayContext.Provider>
  );
};

export const useDisplay = () => {
  const context = React.useContext(DisplayContext);
  if (context === undefined) {
    throw new Error("useDisplay must be used within a DisplayProvider");
  }
  return context;
};
