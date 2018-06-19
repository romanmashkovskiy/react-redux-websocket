import {combineReducers} from 'redux';
import statusConnectionReducer from './status-connection-reducer';


const rootReducer = combineReducers({
    status: statusConnectionReducer
});

export default rootReducer;