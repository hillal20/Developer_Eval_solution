import React, { Component } from "react";
import "./css/App.css";
import AllMovies from "./allmovies/allmovies";
import MovieDetail from "./movieDetail/movieDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={AllMovies} />
          <Route exact path="/detail/:id" component={MovieDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
