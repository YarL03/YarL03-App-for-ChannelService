import { HomeAPI } from "../../../api/axios";
import { HomeReducerActions } from "./types";

export const HomeActionCreators = {
    setPostsRaw: (postsRaw) => ({
        type: HomeReducerActions.SET_POSTS_RAW,
        postsRaw
    }),
    setPostsValid: (postsValid) => ({
        type: HomeReducerActions.SET_POSTS_VALID,
        postsValid
    }),
    getPosts: (pagePortion) => async (dispatch) => {
        try {
            console.log('posts')
            dispatch(HomeActionCreators.setIsLoading(true))
            const posts = await HomeAPI.getPosts(pagePortion)
            dispatch(HomeActionCreators.setPostsRaw(posts))
            dispatch(HomeActionCreators.setIsLoading(false))
        }

        catch (e) {
            dispatch(HomeActionCreators.setError('Posts fetching error'))
        }
    },
    getUsers: (pagePortion) => async (dispatch) => {
        try {
            console.log('users')
            dispatch(HomeActionCreators.setIsLoading(true))
            const users = await HomeAPI.getUsers(pagePortion)
            dispatch(HomeActionCreators.setUsers(users))
            dispatch(HomeActionCreators.setIsLoading(false))
        }

        catch (e) {
            dispatch(HomeActionCreators.setError('Users fetching error'))
        }
    },
    setError: (error) => ({
        type: HomeReducerActions.SET_ERROR,
        error
    }),
    setIsLoading: (isLoading) => ({
        type: HomeReducerActions.SET_IS_LOADING,
        isLoading
    }),
    setUsers: (users) => ({
        type: HomeReducerActions.SET_USERS,
        users
    }),
    getPostsValid: (pagePortion) => async (dispatch) => {
        try {
            dispatch(HomeActionCreators.setIsLoading(true))
            const user = (await HomeAPI.getUsers(pagePortion)).data
            const postsRaw = (await HomeAPI.getPosts(user.id)).data
            const photos = (await HomeAPI.getPhotos(user.id)).data
            

            const postsValid = postsRaw.map((item, index) => ({
                ...item,
                name: user.name,
                company: user.company.name,
                photoURL: photos[index].thumbnailUrl
            }))

            dispatch(HomeActionCreators.setPostsValid(postsValid.slice(0,3))) // заглушка для удобства демонстрации,
            dispatch(HomeActionCreators.setIsLoading(false))                  // чтобы не было много постов
        }

        catch (e) {
            dispatch(HomeActionCreators.setError('Posts fetching error'))
            dispatch(HomeActionCreators.setIsLoading(false))
        }
    }
}

