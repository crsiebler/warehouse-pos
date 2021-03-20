import React from "react";
import { useImmerReducer } from "use-immer";

const ActionTypes = {
  SHOW_TOTAL: "SHOW_TOTAL",
  HIDE_TOTAL: "HIDE_TOTAL",
  SHOW_ALERT: "SHOW_ALERT",
  HIDE_ALERT: "HIDE_ALERT",
};

const reducer = (draft, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_TOTAL:
      console.log("Reducer Show Total");
      draft.calculate = true;
      return draft;
    case ActionTypes.HIDE_TOTAL:
      draft.calculate = false;
      return draft;
    case ActionTypes.SHOW_ALERT:
      draft.alert = { ...draft.alert, ...action.data };
      return draft;
    case ActionTypes.HIDE_ALERT:
      draft.alert.open = false;
      return draft;
    default:
  }
};

const initialState = {
  calculate: false,
  alert: { open: false, severity: "info", message: "" },
};

const StateContext = React.createContext(initialState);
const DispatchContext = React.createContext(undefined);

export const DisplayProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useDisplay = () => {
  return React.useContext(StateContext);
};

export const useDisplayDispatch = () => {
  const dispatch = React.useContext(DispatchContext);

  if (dispatch === undefined) {
    throw new Error("useDisplayDispatch must be used within a DisplayProvider");
  }

  const showTotal = React.useCallback(() => {
    dispatch({ type: ActionTypes.SHOW_TOTAL });
  }, [dispatch]);

  const hideTotal = React.useCallback(() => {
    dispatch({ type: ActionTypes.HIDE_TOTAL });
  }, [dispatch]);

  const showAlert = React.useCallback(
    (data) => {
      dispatch({ type: ActionTypes.SHOW_ALERT, data });
    },
    [dispatch]
  );

  const hideAlert = React.useCallback(() => {
    dispatch({ type: ActionTypes.HIDE_ALERT });
  }, [dispatch]);

  return React.useMemo(
    () => ({
      showTotal,
      hideTotal,
      showAlert,
      hideAlert,
    }),
    [showTotal, hideTotal, showAlert, hideAlert]
  );
};
