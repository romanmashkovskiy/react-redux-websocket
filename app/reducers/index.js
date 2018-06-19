import {combineReducers} from 'redux';
import statusConnectionReducer from './status-connection-reducer';
import sentMessagesReducer from './sent-messages-reducer';
import receivedMessagesReducer from './received-messages-reducer'
import locationReducer from './location-reducer'

const rootReducer = combineReducers({
    status: statusConnectionReducer,
    sentMessages: sentMessagesReducer,
    receivedMessages: receivedMessagesReducer,
    location: locationReducer
});

export default rootReducer;