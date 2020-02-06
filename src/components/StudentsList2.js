import React, { useEffect } from "react";
// import { Route, Link } from 'react-router-dom';
// import Student from "./Student";

import { getOneStudent } from '../actions';
import { getStudents } from '../actions';
import SideBar from './SideBar';
import plus from '../images/plus.svg';

import { connect } from 'react-redux';


const StudentsList2 = props => {
    const handleSignout = () => {
        localStorage.clear();
    }

    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log("User: ", user);

    // const allStudents = JSON.parse(localStorage.getItem("allStudents"));

    useEffect(() => {
        props.getStudents();
    }, [])

    const handleClick = (id) => {
        // props.e.preventDefault();
        props.getOneStudent(id).then(() => props.history.push(`/student2/${id}`));
        // <Route path={`/students/${props.student.id}`} component={() => Student(props.student)} />
        
        // <Route path={`/students/${studentToView.id}`} component={Student} />
    }

    const handleAdd = () => {
        props.history.push("/add-student2");
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
                <div className="student-div" onClick={handleAdd}>
                    <img src={plus} alt="plus"/>
                    <h2>Add New Student</h2>
                </div>
                {props.students.map(student => (
                    
                    <div className="student-div" onClick={() => handleClick(student.id)}>
                        <h2>{student.last_name}, {student.first_name}</h2>
                        <h4>Grade: {student.grade} | Age: {student.age}</h4>
                        <h4>{student.status}</h4>
                        
                        
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
    
export default connect(mapStateToProps, { getStudents, getOneStudent })(StudentsList2);