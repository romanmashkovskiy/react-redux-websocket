import {combineReducers} from 'redux';
import listRepository from './list-reducer';
import  repositoryActive from './repository-active';


const rootReducer = combineReducers({
    listRepository: listRepository,
    repositoryActive: repositoryActive
});

export default rootReducer;