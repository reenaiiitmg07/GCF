import React, { Component } from 'react';
import Movies from './components/movies';
import './App.css';

class App extends Component {
  render() {
    console.log("app");
    return (
      <div>
       <Movies />
      </div>
    );
  }
}

export default App;
