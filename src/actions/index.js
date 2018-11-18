import axios from 'axios';

export const MOVIE_DATA='MOVIE_DATA';
export function getMovieData(page){
  console.log("action");
    let data=axios.get("https://akrp-server.herokuapp.com/movies?p="+page);
    return{
        type:MOVIE_DATA,
        payload:data
    }

}
