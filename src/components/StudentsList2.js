import React, { useEffect, useState } from "react";
import { Route, Link } from 'react-router-dom';
import Student from "./Student";

import { getOneStudent } from '../actions';

import { connect } from 'react-redux';


const StudentsList2 = props => {
    const [studentToView, setStudentToView] = useState('');
    const handleSignout = () => {
        localStorage.clear();
    }

    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log("User: ", user);

    const handleClick = e => {
        e.preventDefault();
        setStudentToView(e);
        // props.getOneStudent(student.id);
        // <Route path={`/students/${studentToView.id}`} component={Student} />
    }
   
    return (
        <div className ="students-container">

        </div>
        
    )
};

const mapStateToProps = state => {
    return {
        students: state.students,
        isLoading: state.isLoading
    }
}
    
export default connect(mapStateToProps, {getOneStudent})(StudentsList2);