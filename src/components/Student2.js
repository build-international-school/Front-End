// // Individual student information (edit and delete will live here too)
import React from 'react';
import { connect } from 'react-redux';

import SideBar from './SideBar';
import { deleteStudent } from '../actions';
import profileShadow from '../images/profileShadow.png';
import edit from '../images/edit.svg';
import del from '../images/delete.svg';

const Student2 =  props => {
    console.log("Current Student: ", props.currentStudent);
    const handleSignout = () => {
        localStorage.clear();
    }

    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log("User: ", user);

    const student = JSON.parse(localStorage.getItem("currentStudent"));

    const handleEdit = (student) => {
        props.history.push(`/edit-student/${student.id}`);
    }

    const handleDelete = () => {
        props.deleteStudent(student.id);
        props.history.push('/students2')       
    }

    const handleBack=() => {
        props.history.push('/students2');
    }

    return (
        <>
            <div className="top-label">
                <p>Hello, {user.first_name} | <a href="/login" onClick={handleSignout}>Log Out</a></p>
            </div>
            <div className="placement">
                <SideBar active={"student"} />
            </div>
            <div className="students-container">
                This is a student. WOOOHOOO!
                <div className="back" onClick={handleBack}>
                    <h4>Go Back</h4>
                </div>
                <div className="student-image">
                    <img src={profileShadow} alt="profile shadow" />
                </div>
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
                        {student.insurance === 0 && <h3>Insurance: No | Expiration: n/a</h3>}
                        {student.insurance === 1 && <h3>Insurance: Yes | Expiration: {student.exp_date}</h3>}
                        {student.birth_certificate === 0 && <h3>Birth Certificate: No</h3>}
                        {student.birth_certificate === 1 && <h3>Birth Certificate: Yes</h3>}
                        <h3>Represenative: <span>{student.representative_name}</span></h3>
                        <h3>Contact Info: <span>{student.representative_contact}</span></h3>
                        
                    </div>
                    <div className="content-bottom">
                        <h4>Special Needs: </h4>
                        <p>{student.special_needs}</p>
                        <h4>Background: </h4>
                        <p>{student.background}</p>
                    </div>
                </div>
            </div>
        </>
// id: 3
// first_name: "Alex"
// last_name: "Smith"
// grade: "4"
// address: "333 Ever St., Alexandria, VA 00000"
// img_url: ""
// background: "I have been learning programming for 4 months"
// status: "active"
// age: 11
// insurance: 0
// exp_date: ""
// birth_certificate: 1
// special_needs: "no"
// representative_name: "mother"
// representative_contact: "1231231234"
// admin_id: 2
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        currentStudent: state.currentStudent
    }
}

export default connect(mapStateToProps, { deleteStudent })(Student2);