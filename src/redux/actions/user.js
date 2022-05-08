import {
    ADD_TO_CART,
    LOGIN_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_START, LOGOUT_SUCCESS, PAYMENT_DONE,
    REGISTER_FAIL,
    REGISTER_START,
    REGISTER_SUCCESS, REMOVE_FROM_CART,
    SET_USER
} from "../types/user";
import {auth} from "../../units/Firebase";
///register process actions....
export const registerStart=()=>{
    return {type:REGISTER_START}
}

export const registerSuccess=(user)=>{
    return {type:REGISTER_SUCCESS,payload:user}
}

export const registerFail=(error)=>{
    return {type:REGISTER_FAIL,payload:error.message}
}

export const RegisterProcess = (email,password)=>{
    return function (dispatch){
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email,password).then(
            ({user})=>dispatch(registerSuccess(user))
        ).catch(
            err=>dispatch(registerFail(err))
        )
    }
}

///login process actions....
export const loginStart=()=>{
    return {type:LOGIN_START}
}

export const loginSuccess=(user)=>{
    return {type:LOGIN_SUCCESS,payload:user}
}

export const loginFail=(error)=>{
    return {type:LOGIN_FAIL,payload:error.message}
}

export const LoginProcess = (email,password)=>{
    return function (dispatch){
        dispatch(loginStart());
        auth.signInWithEmailAndPassword(email,password).then(
            ({user})=>dispatch(loginSuccess(user))
        ).catch(
            err=>dispatch(loginFail(err))
        )
    }
}

///handle if page reload/refresh process actions....
export const setUser=(user)=>{
    return {type:SET_USER,payload:user}
}

///logout process actions....
export const logoutUser=()=>{
    return {type:SET_USER}
}

export const logoutStart=()=>{
    return {type:LOGOUT_START}
}

export const logoutSuccess=()=>{
    return {type:LOGOUT_SUCCESS}
}

export const logoutFail=(error)=>{
    return {type:LOGOUT_FAIL,payload:error.message}
}

export const LogoutProccess = ()=>{
    return function (dispatch){
        dispatch(loginStart())
        auth.signOut().then(
            (response)=>{dispatch(logoutSuccess())}
        ).catch(
            (err)=>{dispatch(logoutFail(err.message))}
        )
    }
}

///cart actions....
export const addToCart=(product)=>{
    return {type:ADD_TO_CART,payload:product}
}

export const removeFromCart=(id)=>{
    return {type:REMOVE_FROM_CART,payload:id}
}

export const paymentDone=()=>{
        return {type:PAYMENT_DONE}
}