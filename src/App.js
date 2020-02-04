import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import CreateUser from './components/CreateUser';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import MainPage from './components/MainPage';
import StudentsList from './components/StudentsList2';
import Student from './components/Student';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/main">Main</Link>
            <Link to="/students">Students</Link>
          </nav>

        </header>
        <Route exact path='/login' component={Login} />
        <Route exact path='/create-user' component={CreateUser} />
        <Route exact path='/students' component={StudentsList} />
        <Route exact path='/students/:id' component={Student} />
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
