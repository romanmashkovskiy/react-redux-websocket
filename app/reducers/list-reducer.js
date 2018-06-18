import * as types from '../actions/action-types';

export default function listReducer(state = [], action) {
    switch(action.type) {
        case types.LOAD_DATA_SUCCESS:
            return action.payload
        default:
            return state;
    }
}

