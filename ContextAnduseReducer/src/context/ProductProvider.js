import { createContext, useContext, useEffect, useReducer } from 'react';
import { productReducer } from '../state/productState/productReducer';
import { actionsTypes } from './../state/productState/actionTypes';
import { initialState } from './../state/productState/productReducer';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {

  const [state,dispatch] = useReducer(productReducer, initialState)

  useEffect(() => {
    dispatch({ type: actionsTypes.FETCHING_START });
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionsTypes.FETCHING_SUCCESS, payload: data })
      )
      .catch(() => {
        dispatch({ type: actionsTypes.FETCHING_ERROR });
      });
  }, []);

 const value = {
    state,
    dispatch,
  }
  return (
    <PRODUCT_CONTEXT.Provider value={value}>
            {children}
    </PRODUCT_CONTEXT.Provider>
  )
}


export const useProducts = ()=>{
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}

export default ProductProvider