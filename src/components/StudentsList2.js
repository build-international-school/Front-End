// import { Route, Link } from 'react-router-dom';
// import Student from "./Student";

import React, { useEffect } from "react";
import { connect } from 'react-redux';

import Nav from './Nav';
import { getStudents } from '../actions';
import { getOneStudent } from '../actions';
import SideBar from './SideBar';
import plus from '../images/plus.svg';

import { MainDiv, StudentsDiv, AllList, StudentCard, Err } from './Styles.js';

const StudentsList2 = props => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    useEffect(() => {
        props.getStudents();
    }, [])

    const handleClick = (id) => {
        props.getOneStudent(id).then(() => props.history.push(`/student2/${id}`));
    }

    const handleAdd = () => {
        props.history.push("/add-student2");
    }
   
    return (
        <>
        <Nav />
        {props.error && <Err><h5>Uh Oh! Something didn't work! Error: {props.error} </h5></Err>}
        <MainDiv>
            <div className="placement">
                <SideBar active={"list"} />
            </div>

            <StudentsDiv>
                <h1>Student List</h1>

                <AllList>
                    <StudentCard onClick={handleAdd}>
                        <img src={plus} alt="plus"/>
                        <h2>Add New Student</h2>
                    </StudentCard>
                    {props.students.map(student => (
                        <StudentCard onClick={() => handleClick(student.id)}>
                            <h2>{student.last_name}, {student.first_name}</h2>
                            <h4>Grade: {student.grade} | Age: {student.age}</h4>
                            <h4>{student.status}</h4>    
                        </StudentCard>
                    ))}
                </AllList>
            </StudentsDiv>
        </MainDiv>
        </>
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