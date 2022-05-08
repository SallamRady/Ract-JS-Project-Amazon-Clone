import {
    ADD_TO_CART,
    LOGIN_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_USER, PAYMENT_DONE,
    REGISTER_FAIL,
    REGISTER_START,
    REGISTER_SUCCESS, REMOVE_FROM_CART,
    SET_USER
} from "../types/user";

const initialState = {
    loading:false,
    cart:[],
    user:null,
    error:null
}

const UserReducer = (state=initialState,action)=>{
    switch (action.type){
        case REGISTER_START:
        case LOGIN_START:
        case LOGOUT_START:
            return {...state,loading: true}
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {...state,loading: false,user: action.payload}
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
            return {...state,loading: false,error: action.payload}
        case SET_USER:
            return {...state,loading: false,user: action.payload}
        case LOGOUT_SUCCESS:
            return {...state,user:null}
        case ADD_TO_CART:
            return {...state,cart:[action.payload,...state.cart]}
        case REMOVE_FROM_CART:
            const items = [...state.cart];
            const newItems = [];
            let key = false;
            for (const ind in items) {
                if(items[ind].id !== action.payload || key)
                {
                    newItems.push(items[ind])
                }else{
                    key = true;
                }
            }
            return {...state,cart:newItems}
        case PAYMENT_DONE:
            return {...state,cart:[]}
        default:
            return state;
    }
}

export default UserReducer;