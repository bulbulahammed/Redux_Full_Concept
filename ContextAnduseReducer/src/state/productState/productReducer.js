import { actionsTypes } from "./actionTypes";
export const initialState = {
    loading: false,
    products: [],
    error: false,
    cart:[],
    wishList:[],
};

export const productReducer = (state,action)=>{
    switch(action.type){
        case actionsTypes.FETCHING_START :
            return {
                ...state,
                loading: true,
                error: false,
            };
        case actionsTypes.FETCHING_SUCCESS :
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: false,
            };
        case actionsTypes.FETCHING_ERROR :
            return {
                ...state,
                loading: false,
                error: true,
            };
        case actionsTypes.ADD_TO_CART :
            return {
                ...state,
                cart:[...state.cart,action.payload]
            };
        case actionsTypes.REMOVE_FROM_CART :
            return {
                ...state,
                cart:[...state.cart.filter((c)=> c._id !== action.payload._id)]
            };
        case actionsTypes.ADD_TO_WISH_LIST :
            return {
                ...state,
                wishList:[...state.wishList,action.payload]
            };
            default:
                return state;
    }
}