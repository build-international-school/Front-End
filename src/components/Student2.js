// // Individual student information (edit and delete will live here too)

import React, { useState } from 'react';
import { connect } from 'react-redux';

import Nav from './Nav';
import { deleteStudent, updateStudentPic } from '../actions';
import SideBar from './SideBar';

import profileShadow from '../images/profileShadow.png';
import edit from '../images/edit.svg';
import del from '../images/delete.svg';

import { MainStudentDiv, StudentDiv, Err } from './Styles.js';

const Student2 =  props => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    const student = JSON.parse(localStorage.getItem("currentStudent"));

    // const [newPic, setNewPic] = useState('');

    // const handlePic = e => {
    //     setNewPic(e.target.value)
    // }

    // const handleUpdatePic = e => {
    //     e.preventDefault();
    //     props.updateStudentPic(student.id, {image: newPic})
    // }

    const handleEdit = (student) => {
        props.history.push(`/edit-student/${student.id}`);
    }

    const handleDelete = () => {
        props.deleteStudent(student.id);
        props.history.push('/students2')       
    }

    const handleBack = () => {
        props.history.push('/students2');
    }

    return (
        <>
        <Nav />
        {props.error && <Err><h5>Uh Oh! Something didn't work! Error: {props.error} </h5></Err>}
        <MainStudentDiv>
            <div className="placement">
                <SideBar active={"student"} />
            </div>
            <StudentDiv className="students-container">
                <div className="back" onClick={handleBack}>
                    <h4>Go Back</h4>
                </div>
                <div className="student-image">
                    <img src={profileShadow} alt="profile shadow" />
                </div>
                {/* <div className="student-image-edit">
                    <form onSubmit={handleUpdatePic}>
                        <label>
                            Choose a Student Picture:
                            <input
                                type='file'
                                id='profile-pic'
                                name='img_url'
                                accept='image/mng, image/jpeg, image/jpg'
                                handleChange='handlePic'
                                value={handlePic}
                            />
                        </label>
                        <button>Update</button>
                    </form>
                </div> */}
                <div className="student-content">
                    <div className='icon-container'>
                        <div className="icon" onClick={() => handleEdit(student)}>
                            <img src={edit} alt="edit pencil icon" />
                        </div>
                        <div className="icon">
                            <img src={del} alt="red delete X icon" onClick={handleDelete} />
                        </div>
                    </div>
                    <div className="content-top">
                        <h2>{student.last_name}, {student.first_name}</h2>
                        <h3>Status: {student.status}</h3>
                        <h3>Grade: {student.grade} | Age: {student.age}</h3>
                    </div>
                    <div className="content-middle">
                        <h3>Address: {student.address}</h3>
                        {student.insurance === 0 && 
                            <h3>Insurance: No | Expiration: n/a</h3>}
                        {student.insurance === 1 && 
                            <h3>Insurance: Yes | Expiration: {student.exp_date}</h3>}
                        {student.birth_certificate === 0 && 
                            <h3>Birth Certificate: No</h3>}
                        {student.birth_certificate === 1 && 
                            <h3>Birth Certificate: Yes</h3>}
                        <h3>Representative: <span>{student.representative_name}</span></h3>
                        <h3>Contact Info: <span>{student.representative_contact}</span></h3>
                        
                    </div>
                    <div className="content-bottom">
                        <h4>Special Needs: </h4>
                        <p>{student.special_needs}</p>
                        <h4>Background: </h4>
                        <p>{student.background}</p>
                    </div>
                </div>
            </StudentDiv>
        </MainStudentDiv>
        </>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        currentStudent: state.currentStudent
    }
}

export default connect(mapStateToProps, { deleteStudent, updateStudentPic })(Student2);