import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Route exact path='/login' component={Login} />
        <Route exact path='create-user' component={CreateUser} />
        <PrivateRoute path='/main' component={MainPage} />
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, {})(App);
