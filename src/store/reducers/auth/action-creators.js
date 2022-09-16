import { rules } from "../../../utils/rules"
import { HomeActionCreators } from "../home/action-creators"
import { AuthReducerActions } from "./types"

export const AuthActionCreators = {
    setIsAuth: (isAuth) => ({
        type: AuthReducerActions.SET_IS_AUTH,
        isAuth
    }),
    setIsLoading: (isLoading) => ({
        type: AuthReducerActions.SET_IS_LOADING,
        isLoading
    }),
    setError: (error) => ({
        type: AuthReducerActions.SET_ERROR,
        error
    }),
    setUser: (user) => ({
        type: AuthReducerActions.SET_USER,
        user
    }),
    signIn: ({login, password}) => async (dispatch) => {
        try {
            const loginMatch = login.match(rules.loginAndPassRegExp).join(' ')
            const passwordMatch = password.match(rules.loginAndPassRegExp).join(' ')
            dispatch(AuthActionCreators.setIsLoading(true))
            await new Promise(resolve => setTimeout(() => {
                    if (loginMatch === 'YarL03' && passwordMatch === 'admin') {
                        dispatch(AuthActionCreators.setIsAuth(true))
                        dispatch(AuthActionCreators.setUser({login, password}))
                        dispatch(AuthActionCreators.setError(''))
                    }
                    else {
                        dispatch(AuthActionCreators.setError('Incorrect login or password'))
                    }
                    resolve()
                }, 3000)) // заглушка
           
            dispatch(AuthActionCreators.setIsLoading(false))
        }
        catch (e) {
            dispatch(AuthActionCreators.setError('Autorization error'))
        }
    },
    signOut: () => async (dispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            await new Promise(resolve => setTimeout(() => {
                    dispatch(AuthActionCreators.setIsAuth(false))
                    dispatch(AuthActionCreators.setUser(null))
                    dispatch(HomeActionCreators.setPostsValid([]))
                    resolve()
                }, 500)) // заглушка
           
            dispatch(AuthActionCreators.setIsLoading(false))
        }

        catch (e) {
            dispatch(AuthActionCreators.setError('Try again'))
        }
    },
}