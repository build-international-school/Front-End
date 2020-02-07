import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';

import Login from './components/Login';
import CreateUser from './components/CreateUser';
import MainPage from './components/MainPage';
import Visits from './components/Visits';
import StudentsList from './components/StudentsList';
import StudentsList2 from './components/StudentsList2';
import StudentDetails from './components/StudentDetails';
import Student from "./components/Student";
import Student2 from './components/Student2';
import AddStudent from './components/AddStudent';
import AddStudent2 from './components/AddStudent2';
import EditStudent from './components/EditStudent';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={() => <Redirect to='/login' />} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/create-user' component={CreateUser} />
        <PrivateRoute exact path='/main' component={MainPage} />
        <PrivateRoute exact path='/visits' component={Visits} />
        <PrivateRoute exact path='/students' component={StudentsList} />
        <PrivateRoute exact path='/students2' component={StudentsList2} />
        <AdminRoute exact path='/student/:id' component={StudentDetails} />
        <AdminRoute exact path='/student2/:id' component={Student2} />
        <AdminRoute exact path='/add-student' component={AddStudent} />
        <AdminRoute exact path='/add-student2' component={AddStudent2} />
        <AdminRoute exact path='/edit-student/:id' component={EditStudent} />            
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
