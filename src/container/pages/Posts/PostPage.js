import React, {useEffect} from "react";
import Post from "../../../components/Post/Post";
import {useDispatch, useSelector} from "react-redux";
import LazyLoad from 'react-lazyload'

import {fetchPosts} from "../../../store/actions/actions";
import Loader from "../../../components/Loader/Loader";

export default () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => {
        return state.posts.fetchedPosts
    })
    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    const loading = useSelector(state => state.app.loading)
    if (loading) {
        return (
            <Loader/>
        )
    }

    return (
        posts.map(post => (
                <LazyLoad
                    key={post.id}
                    height={100}
                    offset={[-100, 100]}
                    placeholder={<Loader/>}
                >
                    <Post post={post} key={post.id}/>
                </LazyLoad>
            )
        )
    )


}
