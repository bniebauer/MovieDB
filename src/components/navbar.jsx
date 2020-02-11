import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    collapsed: true
  };
  onCollapse = () => {
    const collapsed = this.state.collapsed;
    this.setState({ collapsed: !collapsed });
  };
  render() {
    // TODO: Address the problem with the collapse button not showing the hidden nav items
    const collapsed = this.state.collapsed
      ? "navbar-collapse collapse"
      : "navbar-collapse collapse show";
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Vidly
        </Link>
        <button
          className="navbar-toggler collapsed"
          onClick={this.onCollapse}
          type="button"
          data-toggle="collapse"
          data-target="#toggleBar"
          aria-controls="toggleBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={collapsed} id="toggleBar">
          <div className="navbar-nav mr-auto">
            <NavLink className="nav-item nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-item nav-link" to="/customers">
              Customers
            </NavLink>
            <NavLink className="nav-item nav-link" to="/rentals">
              Rentals
            </NavLink>
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-item nav-link" to="/register">
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
