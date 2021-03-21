import React from "react";
import { useImmerReducer } from "use-immer";
import { DUMMY_PRODUCT } from "../utils/orderUtils";

const ActionTypes = {
  CLOSE: "CLOSE",
  ADD_PRODUCT: "ADD_PRODUCT",
  SET_PRODUCT: "SET_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  SET_QUANTITY: "SET_QUANTITY",
  RESET_QUANTITY: "RESET_QUANTITY",
};

const reducer = (draft, action) => {
  switch (action.type) {
    case ActionTypes.CLOSE:
      draft = initialState;
      return draft;
    case ActionTypes.ADD_PRODUCT:
      draft.push(DUMMY_PRODUCT);
      return draft;
    case ActionTypes.SET_PRODUCT:
      draft[action.data.rowIndex] = {
        ...draft[action.data.rowIndex],
        ...action.data.product,
      };
      return draft;
    case ActionTypes.REMOVE_PRODUCT:
      draft.splice(action.data, 1);
      return draft;
    case ActionTypes.SET_QUANTITY:
      draft[action.data.rowIndex].quantity = action.data.quantity;
      return draft;
    case ActionTypes.RESET_QUANTITY:
      draft[action.data].quantity = 1;
      return draft;
    default:
  }
};

const initialState = [];

const StateContext = React.createContext(initialState);
const DispatchContext = React.createContext(undefined);

export const InvoiceProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useInvoice = () => {
  return React.useContext(StateContext);
};

export const useInvoiceDispatch = () => {
  const dispatch = React.useContext(DispatchContext);

  if (dispatch === undefined) {
    throw new Error("useInvoiceDispatch must be used within a InvoiceProvider");
  }

  const closeInvoice = React.useCallback(() => {
    dispatch({ type: ActionTypes.CLOSE });
  }, [dispatch]);

  const addProduct = React.useCallback(() => {
    dispatch({ type: ActionTypes.ADD_PRODUCT });
  }, [dispatch]);

  const setProduct = React.useCallback(
    (data) => {
      dispatch({ type: ActionTypes.SET_PRODUCT, data });
    },
    [dispatch]
  );

  const removeProduct = React.useCallback(
    (data) => {
      dispatch({ type: ActionTypes.REMOVE_PRODUCT, data });
    },
    [dispatch]
  );

  const setQuantity = React.useCallback(
    (data) => {
      dispatch({ type: ActionTypes.SET_QUANTITY, data });
    },
    [dispatch]
  );

  const resetQuantity = React.useCallback(
    (data) => {
      dispatch({ type: ActionTypes.RESET_QUANTITY, data });
    },
    [dispatch]
  );

  return React.useMemo(
    () => ({
      closeInvoice,
      addProduct,
      setProduct,
      removeProduct,
      setQuantity,
      resetQuantity,
    }),
    [
      closeInvoice,
      addProduct,
      setProduct,
      removeProduct,
      setQuantity,
      resetQuantity,
    ]
  );
};
