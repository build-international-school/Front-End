import React, { useEffect, useState } from "react";
import { Route, Link } from 'react-router-dom';
import Student from "./Student";

import { getOneStudent } from '../actions';

import { connect } from 'react-redux';


const Students = props => {
    const [studentToView, setStudentToView] = useState('');
    const handleSignout = () => {
        localStorage.clear();
    }

    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log("User: ", user);

    const handleClick = e => {
        e.preventDefault();
        setStudentToView(e);
        props.getOneStudent(student.id);
        // <Route path={`/students/${studentToView.id}`} component={Student} />
    }
   
    return (
        <div className ="students-container">
            <div className="top-label"><p>Hello, {user.first_name} | <a href="/login" onClick={handleSignout}>Log Out</a></p></div>
            <h1>Student List</h1>

            <div className="student-list">
                {props.students.map(student => (
                    <div className="student-div" onClick={handleClick}>
                        <h3>{student.last_name}, {student.first_name}</h3>
                        <h4>Grade: {student.grade} | Age: {student.age}</h4>
                        <h4>{student.status}</h4>
                        {/* <Link to={`/students/${student.id}`}>
                            <Student key={student.id} student={student} />
                        </Link> */}
                    </div>
                ))}
            </div>
            <Route to='/students/:id' component={Student} />
        </div>
        
    )
};

const mapStateToProps = state => {
    return {
        students: state.students,
        isLoading: state.isLoading
    }
}
    
export default connect(mapStateToProps, {getOneStudent})(Students);