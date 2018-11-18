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
loadFunc(){
let page=this.state.page;
page=page+1;
this.props.getMovieData(page);
}
loadMore(){
let page=this.state.page;
page=page+1;
this.props.getMovieData(page);
this.setState({
page
})
}
perMovieData(id){
window.open("/movies/"+id);

}
render() {
let movies=this.props.data;
let items= movies.map((item) => {
return (
<li style={{ border: '1px solid #80808038' }}>
<a href="" onClick={this.perMovieData.bind(this,item._id)}><img className="img-width"src={"https://image.tmdb.org/t/p/w500"+item.poster_path} /></a>
<p>{item.original_title} </p>
</li>
)
})
return (
<div>
<div className="row">
<ul className="list list-inline list-unstyled responsive" style={{ padding: '10px' }}>
{items}
</ul>
<button onClick={this.loadMore.bind(this)} className="btn btn-primary btn-block">Load More</button>
<br />
<br />
<br />

</div>
</div>
);
}
}
function mapStateToProps(state){
return{
data:state.data
}
}
export default connect(mapStateToProps,{getMovieData})(Movies);
