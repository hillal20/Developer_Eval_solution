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
      allMovies: [],
      clickPopular: false,
      clickPlaying: false,
      clickTop: false,
      movie: ""
    };
  }
  componentDidMount() {
    fetchPopularMovies()
      .then(res => {
        console.log("res", res);
        this.setState({
          popularMovies: res[0],
          playingNowMovies: res[1],
          topRatedMovies: res[2],
          allMovies: [...res[0], ...res[1], ...res[2]]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  searchEventHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

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
          <input
            type="text"
            placeholder="enter movie name"
            name="movie"
            value={this.state.movie}
            onChange={this.searchEventHandler}
          />
        </div>
        <div className="all-movies">
          {this.state.movie !== "" &&
            this.state.allMovies
              .filter((item, index) => {
                if (item === undefined || item === null) {
                  return false;
                } else {
                  return (
                    item.title
                      .toLowerCase()
                      .indexOf(this.state.movie.toLowerCase()) !== -1
                  );
                }
              })
              .map((movie, i) => {
                return (
                  <div className="movie-card">
                    <h3 key={i}>{movie.title}</h3>
                    <img
                      src={`https://image.tmdb.org/t/p/w1280${
                        movie.poster_path
                      }`}
                      width="70%"
                      height="30%"
                    />
                  </div>
                );
              })}
          {this.state.movie === "" &&
            this.state.clickPlaying === false &&
            this.state.clickPopular === false &&
            this.state.clickTop === false &&
            this.state.allMovies.map((m, i) => {
              return (
                <div className="movie-card" key={i}>
                  <h3 key={i}>{m.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${m.poster_path}`}
                    width="70%"
                    height="30%"
                  />
                </div>
              );
            })}
          {this.state.clickPopular &&
            popularMovies.map((m, i) => {
              return (
                <div className="movie-card" key={i}>
                  <h3 key={i}>{m.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${m.poster_path}`}
                    width="70%"
                    height="30%"
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
                    width="70%"
                    height="30%"
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
                    width="70%"
                    height="30%"
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
