export const selectIsAuth = state => state.auth.isAuth
export const selectIsLoadingInAuth = state => state.auth.isLoading
export const selectErrorinAuth = state => state.auth.error

export const selectIsLoadingInHome = state => state.home.isLoading
export const selectErrorInHome = state => state.home.error
export const selectPostsInHome = state => state.home.postsValid