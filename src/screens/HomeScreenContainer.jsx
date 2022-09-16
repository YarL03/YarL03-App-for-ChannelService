import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../Home/Home";
import Loading from "../components/Loading/Loading";
import { HomeActionCreators } from "../store/reducers/home/action-creators";
import Error from "../UI/Error";
import { selectErrorInHome, selectIsLoadingInHome, selectPostsInHome } from "../utils/selectors";

const HomeScreenContainer = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectIsLoadingInHome)
    const error = useSelector(selectErrorInHome)
    const posts = useSelector(selectPostsInHome)
    const [pagePortion, setPagePortion] = useState(1)
 
    const fetchMorePosts = () => {
        if(pagePortion < 10) {
            setPagePortion((prev => prev + 1))
        }
    }

    useEffect(() => {
        let ignore = false
        if(!ignore) {
            dispatch(HomeActionCreators.getPostsValid(pagePortion))
        }

        return () => {
            ignore = true
        }
    }, [pagePortion])
    

    return (
        isLoading && !posts.length ? <Loading/>
        : error ? <Error text={error}/>
        : <Home isLoading={isLoading} posts={posts} fetchMorePosts={fetchMorePosts} setPagePortion={setPagePortion}/>
    )
}

export default HomeScreenContainer