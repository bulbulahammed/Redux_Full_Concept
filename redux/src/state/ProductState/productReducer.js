import { actionTypes } from "./actionTypes";

export const initialState = {
    loading: false,
    products: [],
    error: false,
    cart:[],
    wishList:[],
};

export const  productReducer = (state,action)=>{
switch(action.type){
    case actionTypes.FETCHING_START:
        return{
            ...state,
            loading: true,
            error: false,
        };
    case actionTypes.FETCHING_SUCCESS:
        return{
            ...state,
            loading: false,
            products: action.payload,
            error: false,
        };
    case actionTypes.FETCHING_ERROR:
        return{
            ...state,
            loading: false,
            error: true,
        };
    case actionTypes.ADD_TO_CART:
        return{
            ...state,
            cart:[...state.cart, action.payload]
        };
    case actionTypes.REMOVE_FROM_CART:
        return{
            ...state,
            cart:state.cart.filter(product=> product._id !== action.payload._id)
        };
        case actionTypes.ADD_TO_WISHLIST:
            return{
                ...state,
                wishList:[...state.wishList, action.payload]
            };
        default: 
        return state;
}
};