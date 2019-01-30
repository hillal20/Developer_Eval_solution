import React, { Component } from "react";
import "./css/App.css";
import AllMovies from "./allmovies/allmovies";
import MovieDetail from "./movieDetail/movieDetail";
import { Route, Link, withRouter } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getMovieId = id => {
    return id;
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={AllMovies} />
        <Route exact path="/detail/:id" component={MovieDetail} />
      </div>
    );
  }
}

export default withRouter(App);
