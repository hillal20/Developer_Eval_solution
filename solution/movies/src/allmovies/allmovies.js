import React, { Component } from "react";
import axios from "axios";
import keys from "../keys";
import fetchMovies from "./rowData";
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
    fetchMovies()
      .then(res => {
        console.log("res", res);
        const nonRepeatedMovies = [];
        [...res[0], ...res[1], ...res[2]].forEach(element => {
          if (!nonRepeatedMovies.includes(element)) {
            nonRepeatedMovies.push(element);
          }
        });
        this.setState({
          popularMovies: res[0],
          playingNowMovies: res[1],
          topRatedMovies: res[2],
          allMovies: [...res[0], ...res[3]]
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
    const {
      popularMovies,
      playingNowMovies,
      topRatedMovies,
      allMovies,
      movie,
      clickPlaying,
      clickTop,
      clickPopular
    } = this.state;

    return (
      <div>
        <div className="nav-bar">
          <h1> Welcome to Movies guide </h1>
          <button
            onClick={() => {
              this.setState({
                clickPopular: false,
                clickPlaying: false,
                clickTop: false
              });
            }}
          >
            All Movies
          </button>
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
          {movie !== "" &&
            allMovies
              .filter((item, index) => {
                if (item === undefined || item === null) {
                  return false;
                } else {
                  return (
                    item.title.toLowerCase().indexOf(movie.toLowerCase()) !== -1
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
          {movie === "" &&
            clickPlaying === false &&
            clickPopular === false &&
            clickTop === false &&
            allMovies.map((m, i) => {
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
          {clickPopular &&
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
          {/* ////////////////////// */}

          {movie !== "" &&
            clickPopular &&
            popularMovies
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

          {/* ///////////////////// */}
          {clickTop &&
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
          {clickPlaying &&
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
