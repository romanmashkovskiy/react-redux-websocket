import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import socketMiddleware from '../middleware/socket-middleware'

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk, socketMiddleware)
    );
}