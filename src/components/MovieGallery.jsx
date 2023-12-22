import React, { Component } from 'react';
import Comments from './Comments';

class MovieGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectedMovie: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const { category, searchQuery } = this.props;
    const apiUrl = searchQuery ? `http://www.omdbapi.com/?apikey=477dddc6&s=${searchQuery}` : `http://www.omdbapi.com/?apikey=477dddc6&s=${category}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      this.setState({ movies: data.Search || [], loading: false });
    } catch (error) {
      this.setState({ error: `Error fetching ${category} movies: ${error.message}`, loading: false });
    }
  }

  showComments = (selectedMovie) => {
    this.setState({ selectedMovie });
  };

  render() {
    const { title, cardLimit } = this.props;
    const { movies, selectedMovie, loading, error } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <div>
        <h2>{title}</h2>
        <div style={{ display: 'flex', overflow: 'scroll' }}>
          {movies.slice(0, cardLimit).map((movie) => (
            <div key={movie.imdbID} className="movieCard">
              <img
                src={movie.Poster}
                alt={movie.Title}
                onClick={() => this.showComments(movie)}
              />
              <p>{movie.Title}</p>
            </div>
          ))}
        </div>
        {selectedMovie && (
          <div>
            <Comments
              movieTitle={selectedMovie.imdbID}
              imageUrl={selectedMovie.Poster}
              movies={movies}
            />
          </div>
        )}
      </div>
    );
  }
}

export default MovieGallery;
