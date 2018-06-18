import * as types from '../actions/action-types';

export default function locationReducer (state = false, action) {
    switch(action.type) {
        case types.CONNECT:
            console.log('reducer');
            return action.payload;
        default:
            return state;
    }
}