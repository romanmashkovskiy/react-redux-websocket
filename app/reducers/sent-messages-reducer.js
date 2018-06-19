import * as actions from '../actions/action-types'

export default function sentMessagesReducer (state = [], action) {
    switch(action.type) {
        case actions.ADD_TO_SENT_MESSAGE:
             return [...state,action.payload];
        default:
            return state;
    }
}