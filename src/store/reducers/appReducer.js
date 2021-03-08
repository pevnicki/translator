import {HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "../types/types";

const init = {
    loading: false,
    alert:null
}

export const appReducer = (state = init, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case SHOW_ALERT:
            return {...state, alert: action.payload}
        case HIDE_ALERT:
            return {...state, alert: null}
        default:
            return state
    }
}
