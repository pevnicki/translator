import {DELETE_POST, FETCH_POSTS, FETCH_TRANSLATOR, THUMB_DOWN, THUMB_UP} from "../types/types";

const init = {
    fetchedPosts: []
}
export const postReducer = (state = init, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload}
        case DELETE_POST:
            return {
                ...state,
                fetchedPosts: state.fetchedPosts.filter(post => post.id !== action.payload)}
        case THUMB_UP:
            return {
                ...state,
                fetchedPosts: state.fetchedPosts.map(post => {
                   return post.id === action.payload ? {
                        ...post,
                       thumbsUp : post.thumbsUp + 1
                    } : post
                })
            }
        case THUMB_DOWN:
            return {
                ...state,
                fetchedPosts: state.fetchedPosts.map(post => {
                    return post.id === action.payload ? {
                        ...post,
                        thumbsDown : post.thumbsDown - 1
                    } : post
                })
            }
        case FETCH_TRANSLATOR:
            return {...state, fetchedPosts: action.payload}

        default:
            return state
    }
}
