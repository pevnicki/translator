import {takeEvery, put, call} from 'redux-saga/effects'
import {FETCH_POSTS, REQUEST_POSTS} from "../types/types";
import {hideLoader, showAlert, showLoader} from "../actions/actions";

const POST_URL = process.env.REACT_APP_API_URL


export function* sagaPostWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield  call(fetchPosts)
        yield put({type: FETCH_POSTS, payload})
        yield put(hideLoader())
    } catch (e) {
        yield put(showAlert('something go wrong'))
        yield put(hideLoader())
    }
}

async function fetchPosts() {
        //?_limit=6
    const response = await fetch(`${POST_URL}`)
    const moderatedResponse = await response.json()
    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    return moderatedResponse.map(post => ({
        ...post,
        date: randomDate(new Date(2021, 0, 1), new Date()),
        thumbsUp: getRandomInt(100),
        thumbsDown: getRandomInt(100)
    }))

}
