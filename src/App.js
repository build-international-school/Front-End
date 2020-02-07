import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import WorkerRoute from './components/WorkerRoute';
import CreateUser from './components/CreateUser';

import Login from './components/Login';
import MainPage from './components/MainPage';
import Visits from './components/Visits';
import StudentsList from './components/StudentsList';
import StudentsList2 from './components/StudentsList2';
// import Student from './components/Student';
import Student2 from './components/Student2';
// import AddStudent from './components/AddStudent';
import AddStudent2 from './components/AddStudent2';
import EditStudent from './components/EditStudent';
import Student from "./components/Student";


import StudentDetails from './components/StudentDetails';
import AddStudent from './components/AddStudent';


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
            <Link to="/add-student">Add Student</Link>
          </nav>
        </header>

        <Route exact path="/" render={() => <Redirect to='/login' />} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/create-user' component={CreateUser} />
        <PrivateRoute exact path='/main' component={MainPage} />
        <PrivateRoute exact path='/visits' component={Visits} />
        <AdminRoute exact path='/students' component={StudentsList} />
        <AdminRoute exact path='/students2' component={StudentsList2} />
        {/* <PrivateRoute exact path='/students/:id' component={Student} /> */}

        <PrivateRoute exact path='/student/:id' component={StudentDetails} /> 
        <PrivateRoute exact path='/add-student' component={AddStudent} />
        <AdminRoute exact path='/student2/:id' component={Student2} />
        {/* <PrivateRoute exact path='/add_student' component={AddStudent} /> */}
        <AdminRoute exact path='/add-student2' component={AddStudent2} />
        <AdminRoute exact path='/edit-student/:id' component={EditStudent} />
      </div>
      <footer>
        <Link to="/students">Students</Link>
      </footer>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, {})(App);
