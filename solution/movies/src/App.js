import React, { Component } from "react";
import "./App.css";
import AllMovies from "./allmovies/allmovies";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AllMovies />
      </div>
    );
  }
}

export default App;