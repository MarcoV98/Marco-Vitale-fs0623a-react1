import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handleSearch = () => {
    const { searchHandler } = this.props;
    const { query } = this.state;
    searchHandler(query);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.handleSearch();
  };

  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            placeholder="Insert movie"
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
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