import { combineReducers } from 'redux';

import {MovieData} from './movie_reducer';


let rootReducer = combineReducers({
    data:MovieData
});

export default rootReducer;
