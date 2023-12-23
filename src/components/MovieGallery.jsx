import React, { Component } from 'react';
import Comments from './Comments';

class MovieGallery extends Component {
  state = {
    movies: [],
    selectedMovie: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.fetchMovies();
    }
  }

  fetchMovies = async () => {
    const { category, searchQuery } = this.props;
    const apiUrl = searchQuery
      ? `http://www.omdbapi.com/?apikey=477dddc6&s=${searchQuery}`
      : `http://www.omdbapi.com/?apikey=477dddc6&s=${category}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      this.setState({ movies: data.Search || [], loading: false });
    } catch (error) {
      this.setState({ error: `Error fetching ${category} movies: ${error.message}`, loading: false });
    }
  };

  showComments = (imdbID) => {
    const selectedMovie = this.state.movies.find((movie) => movie.imdbID === imdbID);
    this.setState({ selectedMovie });
  };

  render() {
    const { title, cardLimit } = this.props;
    const { movies, selectedMovie, error } = this.state;

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <div>
        <h2>{title}</h2>

        <div style={{ display: 'flex', overflowX: 'scroll' }}>
          {movies.slice(0, cardLimit).map((movie) => (
            <div key={movie.imdbID} className="movieCard" onClick={() => this.showComments(movie.imdbID)}>
              <img src={movie.Poster} alt={movie.Title} />
              <p>{movie.Title}</p>
            </div>
          ))}
        </div>

        {selectedMovie && (
          <div>
            <Comments movieTitle={selectedMovie.imdbID} imageUrl={selectedMovie.Poster} />
          </div>
        )}
      </div>
    );
  }
}

export default MovieGallery;





