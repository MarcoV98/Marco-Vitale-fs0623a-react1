import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import MovieGallery from './MovieGallery';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    };
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <div className="Home">
        <header className="App-header">
          <Navbar searchHandler={this.handleSearch} />
        </header>

        <main>
          <MovieGallery title="Harry Potter" category="harry potter" cardLimit={6} searchQuery={this.state.searchQuery} />
          <MovieGallery title="Star Wars" category="star wars" cardLimit={6} searchQuery={this.state.searchQuery} />
          <MovieGallery title="Marvel" category="marvel" cardLimit={6} searchQuery={this.state.searchQuery} />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Home;