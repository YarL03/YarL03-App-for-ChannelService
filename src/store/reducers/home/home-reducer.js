import { HomeReducerActions } from "./types"

const initialState = {
    postsRaw: [],
    postsValid: [],
    error: '',
    users: [],
    isLoading: false
}

export default function homeReducer (state = initialState, action) {
    switch(action.type) {

        case HomeReducerActions.SET_ERROR:
            return {...state, error: action.error}

        case HomeReducerActions.SET_IS_LOADING:
            return {...state, isLoading: action.isLoading}

        case HomeReducerActions.SET_USERS:
            return {...state, users: [...state.users, action.users]}

        case HomeReducerActions.SET_POSTS_RAW:
            return {...state, postsRaw: [...state.postsRaw, ...action.postsRaw]}

        case HomeReducerActions.SET_POSTS_VALID:
            return {...state, postsValid: [...state.postsValid, ...action.postsValid]}

        default: 
            return state
    }
}