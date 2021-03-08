import {FETCH_LANGUAGE, SELECTED_LANGUAGE} from "../types/types";

const init = {
    languages: [],
    selectedLanguage:''
}
export const languageReducer = (state = init, action) => {
    switch (action.type) {
        case FETCH_LANGUAGE:
            return {...state, languages: action.payload}
        case SELECTED_LANGUAGE:
            return {...state, selectedLanguage: action.payload}
        default:
            return state
    }
}
