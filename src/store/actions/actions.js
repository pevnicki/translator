import {
    DELETE_POST,
    FETCH_POSTS,
    HIDE_ALERT,
    HIDE_LOADER,
    REQUEST_LANGUAGE,
    REQUEST_POSTS,
    SHOW_ALERT,
    SHOW_LOADER,
    THUMB_DOWN,
    THUMB_UP
} from "../types/types";
import axios from "axios";


export function fetchPosts() {
    return {
        type: REQUEST_POSTS
    }
}

export function fetchLanguages() {
    return {
        type: REQUEST_LANGUAGE
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
        setTimeout(() => {
            dispatch(hideAlert())
        }, 2000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT,
    }
}

export function fetchSupportedLanguages() {
    return {
        type: REQUEST_POSTS,
    }
}

export function thumbUp(postId) {
    return {
        type: THUMB_UP,
        payload: postId
    }
}

export function thumbDown(postId) {
    return {
        type: THUMB_DOWN,
        payload: postId
    }
}

export function deletePost(postId) {
    return {
        type: DELETE_POST,
        payload: postId
    }
}

export function translatePosts(lang) {
    return async (dispatch, getState) => {
        const {fetchedPosts} = getState().posts
        try {
            dispatch(showLoader())
            const translatedText = await translate(fetchedPosts, lang)

            console.log('json', translatedText)
            dispatch({type: FETCH_POSTS, payload: translatedText})
            dispatch(hideLoader())
        } catch (e) {
            dispatch(showAlert('something go wrong'))
            dispatch(hideLoader())
        }
    }
}

const translate = async (posts, lang) => {

    return await Promise.all(posts.map(async post => {
            const p = await sendToTranslate(post, lang)
            return {
                ...post,
                title: p['title'],
                body: p['body']
            }
        }
        )
    )
}


const sendToTranslate = async (post, lang) => {
    const URL = process.env.REACT_APP_GOOGLE_TRANSLATE_API_URL
    const KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY
    const text = `${post.title}!!!${post.body}`
    const response = await axios.post(`${URL}`,
        {},
        {
            params: {
                key: KEY,
                target: lang,
                q: text
            }
        }
    )

    const data = response.data.data.translations[0].translatedText.split("!!!")
    return {
        title: data[0],
        body: data[1]
    }
}
