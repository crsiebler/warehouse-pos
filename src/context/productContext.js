import React from "react";
import { useImmerReducer } from "use-immer";
import { EMPTY_PRODUCT } from "../utils/orderUtils";

const ActionTypes = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SORT_PRODUCTS: "SORT_PRODUCTS",
};

const reducer = (draft, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return draft.concat(action.data);
    case ActionTypes.SORT_PRODUCTS:
      return draft.sort((a, b) => {
        return a.sku.localeCompare(b.sku);
      });
    default:
  }
};

const initialState = [
  {
    id: "",
    name: "",
    price: 0,
    sku: EMPTY_PRODUCT,
    inventory: 1,
  },
];

const StateContext = React.createContext(initialState);
const DispatchContext = React.createContext(undefined);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useProduct = () => {
  return React.useContext(StateContext);
};

export const useProductDispatch = () => {
  const dispatch = React.useContext(DispatchContext);

  if (dispatch === undefined) {
    throw new Error("useProductDispatch must be used within a ProductProvider");
  }

  const setProducts = React.useCallback(
    (data) => {
      dispatch({ type: ActionTypes.SET_PRODUCTS, data });
    },
    [dispatch]
  );

  const sortProducts = React.useCallback(() => {
    dispatch({ type: ActionTypes.SORT_PRODUCTS });
  }, [dispatch]);

  return React.useMemo(() => ({ setProducts, sortProducts }), [
    setProducts,
    sortProducts,
  ]);
};
