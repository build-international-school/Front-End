import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import CreateUser from './components/CreateUser';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import MainPage from './components/MainPage';
import Student2 from './components/Student2';
import AddStudent2 from './components/AddStudent2';
import EditStudent from './components/EditStudent';

import StudentsList from './components/StudentsList';
import StudentsList2 from './components/StudentsList2';

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
            <Link to="/students2">Students2</Link>
          </nav>
        </header>

        <Route exact path="/" render={() => <Redirect to='/login' />} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/create-user' component={CreateUser} />
        <PrivateRoute exact path='/students' component={StudentsList} />
        <PrivateRoute exact path='/students2' component={StudentsList2} />
        <PrivateRoute exact path='/student2/:id' component={Student2} />
        {/* <Route exact path='/students/:id' component={Student} /> */}
        <PrivateRoute exact path='/add-student2' component={AddStudent2} />
        <PrivateRoute exact path='/edit-student/:id' component={EditStudent} />
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
