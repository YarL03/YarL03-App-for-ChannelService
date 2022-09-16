import { AuthReducerActions } from "./types"

const initialState = {
    isAuth: false,
    isLoading: false,
    error: '',
    user: null
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        
        case AuthReducerActions.SET_IS_AUTH:
            return {...state, isAuth: action.isAuth}

        case AuthReducerActions.SET_ERROR:
            return {...state, error: action.error}

        case AuthReducerActions.SET_USER:
            return {...state, user: action.user}

        case AuthReducerActions.SET_IS_LOADING:
            return {...state, isLoading: action.isLoading}

        default: 
            return state
    }
}