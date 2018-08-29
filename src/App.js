import React, { Component } from 'React';
import { Route, Switch, BrowserRouter } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from "./Home.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <h1>Hi, I'm Charles</h1> */}
          {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      */}
          <Switch>
            <Route exact path="/" component= { Home } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
