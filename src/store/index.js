import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import createSagaMiddleware, { END } from 'redux-saga'

import rootReducer from 'reducers';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    let middlewares = [
        applyMiddleware(sagaMiddleware)
    ];

    if (process.env.NODE_ENV === 'development') {
        middlewares = [
            applyMiddleware(sagaMiddleware, logger),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ];
    }

    const store = createStore(
        rootReducer,
        compose(...middlewares)
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    return store;
};

export default configureStore;