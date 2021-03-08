import {takeEvery, put, call} from 'redux-saga/effects'
import {FETCH_LANGUAGE, REQUEST_LANGUAGE} from "../types/types";
import {showAlert} from "../actions/actions";
import axios from "axios";


const LANG_URL = process.env.REACT_APP_GOOGLE_TRANSLATE_API_URL
const KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY

export function* sagaLanguagesWatcher() {
    yield takeEvery(REQUEST_LANGUAGE, sagaLanguagesWorker)
}

function* sagaLanguagesWorker() {
    try {
        const payload = yield  call(fetchLanguages)
        yield put({type: FETCH_LANGUAGE, payload})
    } catch (e) {
        yield put(showAlert('something go wrong'))
    }
}

async function fetchLanguages() {
    console.log(LANG_URL)
    const response = await axios.get(`${LANG_URL}/languages`,
            {params: {key: KEY}}
        )
    return await response.data.data.languages
}
