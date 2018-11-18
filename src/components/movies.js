import React, { Component } from 'react';
import axios from 'axios';
import {getMovieData} from '../actions/index';
import {connect} from 'react-redux';
class Movies extends Component {
constructor(props){
super();
this.state={
  data:[],
  page:1
}
}
componentDidMount(){
  this.props.getMovieData(1);
}
render() {
  console.log(this.state.data);
return (
  <div>

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
