import React, { Component } from "react";
import axios from "axios";
import keys from "../keys";
import fetchPopularMovies from "./rowData";
class AllMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: [],
      playingNowMovies: [],
      topRatedMovies: [],
      clickPopular: false,
      clickPlaying: false,
      clickTop: false
    };
  }
  componentDidMount() {
    fetchPopularMovies()
      .then(res => {
        console.log("res", res);
        this.setState({
          popularMovies: res[0],
          playingNowMovies: res[1],
          topRatedMovies: res[2]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { popularMovies, playingNowMovies, topRatedMovies } = this.state;

    return (
      <div>
        <div className="nav-bar">
          <h1> Welcome to Movies guide </h1>
          <button
            onClick={() => {
              this.setState({
                clickPopular: true,
                clickPlaying: false,
                clickTop: false
              });
            }}
          >
            Popular Movies
          </button>
          <button
            onClick={() => {
              this.setState({
                clickPopular: false,
                clickPlaying: true,
                clickTop: false
              });
            }}
          >
            Playing Movies
          </button>
          <button
            onClick={() => {
              this.setState({
                clickPopular: false,
                clickPlaying: false,
                clickTop: true
              });
            }}
          >
            Top Movies
          </button>
        </div>
        <div className="all-movies">
          {this.state.clickPopular &&
            popularMovies.map((m, i) => {
              return (
                <div className="movie-card">
                  <h3 key={i}>{m.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${m.poster_path}`}
                    width="400"
                    height="400"
                  />
                </div>
              );
            })}
          {this.state.clickTop &&
            topRatedMovies.map((m, i) => {
              return (
                <div className="movie-card">
                  <h3 key={i}>{m.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${m.poster_path}`}
                    width="400"
                    height="400"
                  />
                </div>
              );
            })}
          {this.state.clickPlaying &&
            playingNowMovies.map((m, i) => {
              return (
                <div className="movie-card">
                  <h3 key={i}>{m.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${m.poster_path}`}
                    width="400"
                    height="400"
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default AllMovies;
