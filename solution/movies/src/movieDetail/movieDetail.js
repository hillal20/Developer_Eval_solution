import React, { Component } from "react";
import fetchMovies from "../allmovies/rowData";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      err: ""
    };
  }
  componentDidMount() {
    fetchMovies()
      .then(res => {
        if (res !== undefined || res !== null) {
          this.setState({
            allMovies: [...res[0], ...res[1], ...res[2], ...res[3]]
          });
        }
      })
      .catch(err => {
        this.setState({ err: err });
      });
  }

  getMovie = () => {};

  render() {
    const { allMovies, err } = this.state;
    let movie = "";
    let movieDetail = "";
    if (allMovies !== [] && allMovies !== undefined) {
      movie = [...allMovies].filter(m => {
        return m.id == this.props.match.params.id;
      });
    }

    if (movie[0] !== null || movie[0] !== undefined) {
      movieDetail = movie[0];
    }

    if (err !== "") {
      return (
        <div>
          <h1>... error happened in loading movies</h1>
        </div>
      );
    }
    return (
      movieDetail !== undefined && (
        <div className="movie-detail">
          <div>
            <h2>Movie Detail</h2>
            <strong> Title: </strong>
            {movieDetail.title}
          </div>
          <div>
            <strong>Id : </strong>
            {movieDetail.id}
          </div>
          <div>
            <strong>Release Date:</strong>
            {movieDetail.release_date}
          </div>
          <div>
            <strong>Popularity:</strong>
            {movieDetail.popularity}
          </div>
          <div>
            <strong>Vote Average:</strong>
            {movieDetail.vote_average}
          </div>
          <div>
            <strong>Vote Count:</strong>
            {movieDetail.vote_count}
          </div>
          <div>
            <strong>Language:</strong>
            {movieDetail.original_language}
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w1280/${
                movieDetail.poster_path
              }`}
              width="200px"
              height="200px"
            />
          </div>
        </div>
      )
    );
  }
}
export default MovieDetail;
