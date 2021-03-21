import React from "react";
import { useImmerReducer } from "use-immer";

const ActionTypes = {
  SET_CONTRACTOR: "SET_CONTRACTOR",
  CLOSE: "CLOSE",
};

const reducer = (draft, action) => {
  switch (action.type) {
    case ActionTypes.SET_CONTRACTOR:
      draft = action.data;
      return draft;
    case ActionTypes.CLOSE:
      draft = initialState;
      return draft;
    default:
  }
};

const initialState = {
  id: "",
  name: "",
  company: "",
  discount: 0,
};

const StateContext = React.createContext(initialState);
const DispatchContext = React.createContext(undefined);

export const ContractorProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useContractor = () => {
  return React.useContext(StateContext);
};

export const useContractorDispatch = () => {
  const dispatch = React.useContext(DispatchContext);

  if (dispatch === undefined) {
    throw new Error("useContractor must be used within a ContractorProvider");
  }

  const setContractor = React.useCallback(
    (data) => {
      dispatch({ type: ActionTypes.SET_CONTRACTOR, data });
    },
    [dispatch]
  );

  const closeContractor = React.useCallback(() => {
    dispatch({ type: ActionTypes.CLOSE });
  }, [dispatch]);

  return React.useMemo(() => ({ setContractor, closeContractor }), [
    setContractor,
    closeContractor,
  ]);
};
