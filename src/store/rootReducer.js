import {combineReducers} from "redux";
import {postReducer} from "./reducers/postReducer";
import {appReducer} from "./reducers/appReducer";
import {languageReducer} from "./reducers/languageReducer"

export const rootReducer = combineReducers({
    posts:postReducer,
    app:appReducer,
    languages:languageReducer
})
