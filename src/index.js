import React from 'react';
import {render} from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {compose, createStore,applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from "./store/rootReducer";
import {sagaPostWatcher} from "./store/sagas/postSaga";
import {sagaLanguagesWatcher} from "./store/sagas/languageSaga";

const saga = createSagaMiddleware()
const store = createStore(rootReducer,compose(
    applyMiddleware(
      thunk,saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

))

saga.run(sagaPostWatcher)
saga.run(sagaLanguagesWatcher)

const app = (

    <Provider store={store}>
        <App/>
    </Provider>
)

render(
    app,
    document.getElementById('root')
);

serviceWorker.unregister();
