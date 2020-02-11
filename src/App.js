import React, { Component } from "react";
import Navbar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import FakeRoute from "./components/testComponents/fakeRoute";
import NotFound from "./components/testComponents/notfound";
import MovieDetail from "./components/movieDetail";
import LoginPage from "./components/login";
import RegisterForm from "./components/register";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route
              path="/movies/:id"
              render={props => <MovieDetail {...props} />}
            />
            <Route path="/movies" render={props => <Movies {...props} />} />
            <Route path="/customers" component={FakeRoute} />
            <Route path="/rentals" component={FakeRoute} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Movies} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
