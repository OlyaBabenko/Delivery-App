import {combineReducers, createStore} from "redux";
import { composeWithDevTools} from "redux-devtools-extension";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
})

let store = createStore(rootReducer, composeWithDevTools());
export default store;