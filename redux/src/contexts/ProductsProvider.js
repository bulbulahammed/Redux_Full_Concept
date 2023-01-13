import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../state/ProductState/actionTypes';
import { initialState, productReducer } from '../state/ProductState/productReducer';

const PRODUCT_CONTEXT = createContext();

const ProductsProvider = ({children}) => {


const [state, dispatch] = useReducer(productReducer, initialState)

console.log(state);

    useEffect(()=>{
      dispatch({type:actionTypes.FETCHING_START});
     fetch("http://localhost:5000/products")
     .then((res)=> res.json())
     .then((data)=> dispatch({type: actionTypes.FETCHING_SUCCESS, payload: data}))
     .catch(()=>{
      dispatch({type: actionTypes.FETCHING_ERROR})
     });
    },[]);

    const value = {
        state,
        dispatch,
    };

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProductsProvider;