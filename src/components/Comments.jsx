import React, { Component } from 'react';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = async () => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        headers: {
          'Authorization':
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NTAyMGI1MjViYjAwMThlZDA4NDIiLCJpYXQiOjE3MDMxNzA0MTIsImV4cCI6MTcwNDM4MDAxMn0.oJx9SzQciRM50U-26TwxAacxQMYsKre1PbX0-ZJh4V0',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching comments: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Comments Data:', data);
  
      const { movieTitle } = this.props;
  
      // Filtra i commenti relativi al film corrente
      const movieComments = data.filter(comment => comment.elementId === movieTitle.imdbID);
      console.log('Filtered Comments:', movieComments);
  
      this.setState({ comments: movieComments });
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  render() {
    const { imageUrl } = this.props;
    const { comments } = this.state;

    return (
      <div>
        <img src={imageUrl} alt="Movie Poster" />
        <h3>Comments:</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              <p>{comment.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Comments;