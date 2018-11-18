import {MOVIE_DATA,MOVIE_TERM_DATA} from '../actions/index';

export  function MovieData (state=[],action){
  //console.log("reducer");
    //console.log(action.payload);

    switch(action.type){

        case MOVIE_DATA:
            return action.payload.data
       case MOVIE_TERM_DATA:
            return action.payload.data
        default:
                return state
    }
}
