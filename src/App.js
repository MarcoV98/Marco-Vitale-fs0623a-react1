import React, { Component } from "react";
import Home from "./components/Home";
import TVShows from "./components/TVShows";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
    };
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv-shows" element={<TVShows />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
