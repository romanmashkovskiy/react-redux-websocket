import * as actions from '../actions/action-types'

export default function locationReducer (state = "wss://echo.websocket.org", action) {
    switch(action.type) {
        case actions.ADD_CURRENT_LOCATION:
            return action.payload;
        default:
            return state;
    }
}