import React, { useEffect, useState } from "react";
// import { Route, Link } from 'react-router-dom';
// import Student from "./Student";

import { getOneStudent } from '../actions';
import SideBar from './SideBar';

import { connect } from 'react-redux';


const StudentsList2 = props => {
    const handleSignout = () => {
        localStorage.clear();
    }

    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log("User: ", user);

    const handleClick = (id) => {
        // props.e.preventDefault();
        props.getOneStudent(id).then(() => props.history.push(`/student2/${id}`));
        // <Route path={`/students/${props.student.id}`} component={() => Student(props.student)} />
        
        // <Route path={`/students/${studentToView.id}`} component={Student} />
    }
   
    return (
        <div className ="students-container">
            <div className="top-label">
                <p>Hello, {user.first_name} | <a href="/login" onClick={handleSignout}>Log Out</a></p>
            </div>
            <div className="placement">
                <SideBar active={"list"} />
            </div>

            <h1>Student List</h1>

            <div className="student-list">
                {props.students.map(student => (
                    
                    <div className="student-div">
                        <h3>{student.last_name}, {student.first_name}</h3>
                        <h4>Grade: {student.grade} | Age: {student.age}</h4>
                        <h4>{student.status}</h4>
                        
                        <button onClick={() => handleClick(student.id)}>View Student</button>
                        
                    </div>
                ))}
            </div>
        </div>
        
    )
};

const mapStateToProps = state => {
    return {
        students: state.students,
        currentStudent: state.currentStudent,
        isLoading: state.isLoading
    }
}
    
export default connect(mapStateToProps, {getOneStudent})(StudentsList2);