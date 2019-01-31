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
      movie: "",
      err: ""
    };
  }
  componentDidMount() {
    fetchMovies()
      .then(res => {
        this.setState({
          popularMovies: res[0],
          playingNowMovies: res[1],
          topRatedMovies: res[2],
          allMovies: [...res[0], ...res[1], ...res[2], ...res[3]]
        });
      })
      .catch(err => {
        this.setState({ err: err });
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
      clickPopular,
      err
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
                clickPopular: false,
                clickPlaying: false,
                clickTop: true
              });
            }}
          >
            Top Movies
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
                clickPopular: true,
                clickPlaying: false,
                clickTop: false
              });
            }}
          >
            Popular Movies
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
          {err !== "" && (
            <div>
              <h1>... error happened in loading movies</h1>
            </div>
          )}
          {movie !== "" &&
            clickPopular === false &&
            clickPlaying === false &&
            clickTop === false &&
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
                  <div
                    className="movie-card"
                    key={i}
                    onClick={() => {
                      this.props.history.push(`/detail/${movie.id}`);
                    }}
                  >
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
                <div
                  className="movie-card"
                  key={i}
                  onClick={() => {
                    this.props.history.push(`/detail/${m.id}`);
                  }}
                >
                  <h3 key={i}>{m.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${m.poster_path}`}
                    width="70%"
                    height="30%"
                  />
                </div>
              );
            })}

          {movie === "" &&
            clickPopular &&
            clickTop === false &&
            clickPlaying === false &&
            popularMovies.map((m, i) => {
              return (
                <div
                  className="movie-card"
                  key={i}
                  onClick={() => {
                    this.props.history.push(`/detail/${m.id}`);
                  }}
                >
                  <h3 key={i}>{m.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${m.poster_path}`}
                    width="70%"
                    height="30%"
                  />
                </div>
              );
            })}

          {movie !== "" &&
            clickPopular &&
            clickTop === false &&
            clickPlaying === false &&
            popularMovies
              .filter((item, index) => {
                if (item === undefined || item === null) {
                  return false;
                } else {
                  return (
                    item.title.toLowerCase().indexOf(movie.toLowerCase()) !== -1
                  );
                }
              })
              .map((m, i) => {
                return (
                  <div
                    className="movie-card"
                    key={i}
                    onClick={() => {
                      this.props.history.push(`/detail/${m.id}`);
                    }}
                  >
                    <h3 key={i}>{m.title}</h3>
                    <img
                      src={`https://image.tmdb.org/t/p/w1280${m.poster_path}`}
                      width="70%"
                      height="30%"
                    />
                  </div>
                );
              })}

          {clickTop &&
            movie === "" &&
            clickPlaying === false &&
            clickPopular === false &&
            topRatedMovies.map((m, i) => {
              return (
                <div
                  className="movie-card"
                  key={i}
                  onClick={() => {
                    this.props.history.push(`/detail/${m.id}`);
                  }}
                >
                  <h3 key={i}>{m.title}</h3>
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${m.poster_path}`}
                    width="70%"
                    height="30%"
                  />
                </div>
              );
            })}

          {movie !== "" &&
            clickTop &&
            clickPlaying === false &&
            clickPopular === false &&
            topRatedMovies
              .filter((item, index) => {
                if (item === undefined || item === null) {
                  return false;
                } else {
                  return (
                    item.title.toLowerCase().indexOf(movie.toLowerCase()) !== -1
                  );
                }
              })
              .map((m, i) => {
                return (
                  <div
                    className="movie-card"
                    key={i}
                    onClick={() => {
                      this.props.history.push(`/detail/${m.id}`);
                    }}
                  >
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
            movie === "" &&
            clickTop === false &&
            clickPopular === false &&
            playingNowMovies.map((m, i) => {
              return (
                <div
                  className="movie-card"
                  key={i}
                  onClick={() => {
                    this.props.history.push(`/detail/${m.id}`);
                  }}
                >
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
            movie !== "" &&
            clickTop === false &&
            clickPopular === false &&
            playingNowMovies
              .filter((item, index) => {
                if (item === undefined || item === null) {
                  return false;
                } else {
                  return (
                    item.title.toLowerCase().indexOf(movie.toLowerCase()) !== -1
                  );
                }
              })
              .map((m, i) => {
                return (
                  <div
                    className="movie-card"
                    key={i}
                    onClick={() => {
                      this.props.history.push(`/detail/${m.id}`);
                    }}
                  >
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
