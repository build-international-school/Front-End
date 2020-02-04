import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CreateUser from './components/CreateUser';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import MainPage from './components/MainPage';
import StudentsList from './components/StudentsList';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>

        </header>
        <Route exact path='/login' component={Login} />
        <Route exact path='/create-user' component={CreateUser} />
        <Route exact path='/students' component={StudentsList} />
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
