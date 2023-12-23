import React, { Component } from 'react';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: '',
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

      const movieComments = data.filter(comment => comment.elementId === movieTitle);
      console.log('Filtered Comments:', movieComments);

      this.setState({ comments: movieComments });
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  handleInputChange = (event) => {
    this.setState({ newComment: event.target.value });
  };

  postComment = async () => {
    try {
      const { movieTitle } = this.props;
      const { newComment } = this.state;

      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NTAyMGI1MjViYjAwMThlZDA4NDIiLCJpYXQiOjE3MDMxNzA0MTIsImV4cCI6MTcwNDM4MDAxMn0.oJx9SzQciRM50U-26TwxAacxQMYsKre1PbX0-ZJh4V0',
        },
        body: JSON.stringify({
          elementId: movieTitle,
          comment: newComment,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error posting comment: ${response.status} - ${response.statusText}`);
      }

      console.log('Comment posted successfully');

      this.fetchComments();
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  render() {
    const { imageUrl } = this.props;
    const { comments, newComment } = this.state;

    return (
      <div>
        <img src={imageUrl} alt="Movie Poster" />
        <h3 style={{ color: 'white' }}>Comments:</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              <p style={{ color: 'white' }}>{comment.comment}</p>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={this.handleInputChange}
          />
          <button onClick={this.postComment}>Post Comment</button>
        </div>
      </div>
    );
  }
}

export default Comments;
