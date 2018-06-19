import * as actions from '../actions/action-types'

export default function receivedMessagesReducer (state = [], action) {
    switch(action.type) {
        case actions.ADD_TO_RECEIVED_MESSAGE:
            return [...state,action.payload];
        default:
            return state;
    }
}