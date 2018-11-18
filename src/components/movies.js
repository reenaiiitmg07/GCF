import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'
import {getMovieData} from '../actions/index';
import {connect} from 'react-redux';
class Movies extends Component {
constructor(props){
super();
this.state={
  data:[],
  page:1
}
this.perMovieData=this.perMovieData.bind(this);
}

componentDidMount(){
  this.props.getMovieData(1);
}
perMovieData(){

}
render() {
  let movies=this.props.data;
  console.log(this.props.data);
return (
  <div>
    <div className="row">
    <ul className="list list-inline list-unstyled responsive" style={{ padding: '10px' }}>
      {movies.map((item) => {
        return (
          <li style={{ border: '1px solid #80808038' }}>
          <a href="" onClick={this.perMovieData}><img className="img-width"src={"https://image.tmdb.org/t/p/w500"+item.poster_path} /></a>
          <a><p>{item.original_title}</p></a>
      </li>
        )
      })}
</ul>
    </div>
  </div>
);
}
}
function mapStateToProps(state){
  console.log(state)
   return{
     data:state.data
   }
}
export default connect(mapStateToProps,{getMovieData})(Movies);
