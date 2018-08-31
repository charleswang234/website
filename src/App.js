import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component= { Home } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
