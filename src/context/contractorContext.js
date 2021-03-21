import React from "react";
import { useImmerReducer } from "use-immer";
import { DUMMY_CONTRACTOR } from "../utils/orderUtils";

const ActionTypes = {
  SET_CONTRACTOR: "SET_CONTRACTOR",
  CLOSE: "CLOSE",
  SHOW_LOADING: "SHOW_LOADING",
  HIDE_LOADING: "HIDE_LOADING",
};

const reducer = (draft, action) => {
  switch (action.type) {
    case ActionTypes.SET_CONTRACTOR:
      draft.contractor = action.data;
      return draft;
    case ActionTypes.CLOSE:
      draft = initialState;
      return draft;
    case ActionTypes.SHOW_LOADING:
      draft.loading = true;
      return draft;
    case ActionTypes.HIDE_LOADING:
      draft.loading = false;
      return draft;
    default:
  }
};

const initialState = {
  contractor: DUMMY_CONTRACTOR,
  loading: false,
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

  const showLoading = React.useCallback(() => {
    dispatch({ type: ActionTypes.SHOW_LOADING });
  }, [dispatch]);

  const hideLoading = React.useCallback(() => {
    dispatch({ type: ActionTypes.HIDE_LOADING });
  }, [dispatch]);

  return React.useMemo(
    () => ({ setContractor, closeContractor, showLoading, hideLoading }),
    [setContractor, closeContractor, showLoading, hideLoading]
  );
};
