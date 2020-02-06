import React, { Component } from "react";
import { getMovie } from "../services/fakeMovieService";

class MovieDetail extends Component {
  componentWillMount() {
    let movie = getMovie(this.props.match.params.id);
    this.setState({ movie });
  }
  render() {
    const { history } = this.props;
    const movie = this.state.movie;
    return (
      <React.Fragment>
        <h1>Movie form for {movie.title}</h1>
        <button
          className="btn btn-primary"
          onClick={() => history.replace("/")}
        >
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default MovieDetail;
