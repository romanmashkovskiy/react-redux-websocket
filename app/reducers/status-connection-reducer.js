import * as actions from '../actions/action-types'

export default function statusConnectionReducer (state = "disconnected", action) {
    switch(action.type) {
        case actions.CONNECTING:
        case actions.CONNECTED:
        case actions.DISCONNECTED:
            return action.payload;
        default:
            return state;
    }
}