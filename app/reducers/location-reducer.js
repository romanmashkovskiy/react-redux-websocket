import * as types from '../actions/action-types';

export default function locationReducer (state = 'wss://echo.websocket.org', action) {
    switch(action.type) {
        case types.CONNECT:
            console.log('reducer');
            return action.payload;
        default:
            return state;
    }
}

