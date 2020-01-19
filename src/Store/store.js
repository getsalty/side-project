import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import propertiesReducer from '../Reducers/propertiesReducer';

const middleware = applyMiddleware(thunk);

const store = createStore(
    propertiesReducer,
    compose(
        middleware,
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
);

export default store;