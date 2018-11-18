import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
class MovieDescription extends Component {
constructor(props){
super(props)
this.state={
movieDetail:{}
}
}

componentDidMount(){
let id=window.location.pathname.split("/")[2];
axios.get(" https://akrp-server.herokuapp.com/movies/"+id).then(response=>{
this.setState({
movieDetail:response.data[0]
})
})

}

render(){
console.log(this.state.movieDetail)
let data=this.state.movieDetail;
console.log(data.belongs_to_collection);
return(
<div>
{this.state.movieDetail?
      <div className="row">
           <h4 style={{textAlign: "center"}}>{data.original_title}</h4>
           <div className="media">
             <div className="media-left">
               <img className="img-width" src={"https://image.tmdb.org/t/p/w500"+data.poster_path}/>
             </div>
          <div className="media-body">
              <p>{data.imdb_id}</p>
              <p>{data.budget}</p>
              <p>{data.homepage}</p>
              <p>{data.release_date}</p>
              <p>{data.vote_average}</p>
              </div>
        </div>
    </div>
:null}
</div>
)
}
}
export default MovieDescription;
