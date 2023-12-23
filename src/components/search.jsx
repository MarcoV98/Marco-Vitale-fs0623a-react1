import React, { Component } from "react";

class Search extends Component {
  state = {
    query: "",
  };

  handleInputChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.searchHandler(this.state.query);
  };

  render() {
    const { query } = this.state;

    return (
      <div className="search-container">
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            placeholder="Insert movie"
            value={query}
            onChange={this.handleInputChange}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default Search;


