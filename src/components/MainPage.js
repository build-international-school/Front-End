// Main home page routed to from Login

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getStudents } from '../actions';
import SideBar from './SideBar';

const MainPage = props => {
    // console.log("in main - currentUser: ", props.currentUser);

    const handleSignout = () => {
        localStorage.clear();
    }

    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log("User: ", user);

    useEffect(() => {
        props.getStudents();
    }, [])

    // console.log("Students in Main: ", props.students);

    return(
        
        <div className="main-page-div">
            <div className="top-label"><p>Hello, {user.first_name} | <a href="/login" onClick={handleSignout}>Log Out</a></p></div>
            <div className="placement">
                <SideBar active={"main"} />
            </div>
            <div className="main-info">
                <div className="main-info-top">
                    <div className="org-div">
                        <h2>{user.organization}</h2>
                    </div>
                    <div className="visit-div">
                        <p>Visits will go here.</p>
                    </div>
                    <div className="total-div">
                        <h1>{props.students.length}</h1>
                        <p>Total Students</p>
                    </div>
                </div>
                <div>        
                    <div className="all-students">
                        {/* <button onClick={props.getStudents}>Get</button> */}
                        <div className="student">
                            <p className="student-header">Name | Status | Grade | Age</p>
                            {props.students && !props.isLoading && props.students.map(student => (
                                <p>{student.last_name}, {student.first_name} | {student.status} | {student.grade} | {student.age}</p>
                            
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        students: state.students,
        isLoading: state.isLoading,
        isEditing: state.isEditing,
        error: state.error
    }
}

export default connect(mapStateToProps, { getStudents })(MainPage);