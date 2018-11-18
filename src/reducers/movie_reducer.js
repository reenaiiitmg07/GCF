import {MOVIE_DATA} from '../actions/index';

export function MovieData (state=[],action){
console.log("reducer");
console.log(action.payload);

switch(action.type){

case MOVIE_DATA:
return state.concat(action.payload.data)
default:
return state
}
}
