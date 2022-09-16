import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth/auth-reducer";
import homeReducer from "./reducers/home/home-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    home: homeReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk)) 