import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import logo from '../css/logo.png';
import Search from "./search";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    query: "",
  };

  handleSearch = (query) => {
    this.setState({ query });
    this.props.searchHandler(query);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#221f1f' }}>
        <a className="navbar-brand" href="#">
          <img src={logo} style={{ width: '100px', height: '55px' }} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">Home</a>
            </li>
            <li className="nav-item">
              <Link to="/tv-shows" className="nav-link font-weight-bold">TV Shows</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">Recently Added</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">My List</a>
            </li>
          </ul>

          <Search searchHandler={this.handleSearch} />

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div id="kids">KIDS</div>
            </li>
            <li className="nav-item">
              <i className="fa fa-bell icons"></i>
            </li>
            <li className="nav-item">
              <i className="fa fa-user icons"></i>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;



