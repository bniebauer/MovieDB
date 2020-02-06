import React, { Component } from "react";
import Navbar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import FakeRoute from "./components/testComponents/fakeRoute";
import NotFound from "./components/testComponents/notfound";
import MovieDetail from "./components/movieDetail";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Navbar />
        <Switch>
          <Route
            path="/movies/:id"
            render={props => <MovieDetail {...props} />}
          />
          <Route path="/movies" render={props => <Movies {...props} />} />
          <Route path="/customers" component={FakeRoute} />
          <Route path="/rentals" component={FakeRoute} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Movies} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
