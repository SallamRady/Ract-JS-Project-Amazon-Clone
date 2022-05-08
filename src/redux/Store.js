import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import UserReducer from "./reducers/UserReducer";

const middleware = [thunk];
if(process.env.MODE_ENV === "development"){
    middleware.push(logger)
}
const Store = createStore(UserReducer,applyMiddleware(...middleware));
export default Store;