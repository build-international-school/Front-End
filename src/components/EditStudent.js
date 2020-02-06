// Edit an existing student

//BRITTANI - GET THE RADIO BUTTONS ABLE TO UPDATE! (insurance, status, birthCertificate)

import React, { useState } from 'react';
import { connect } from 'react-redux';
import SideBar from './SideBar';
import { editStudent } from '../actions';

const EditStudent = props => {
    const handleSignout = () => {
        localStorage.clear();
    }
    
    const user = JSON.parse(localStorage.getItem("currentUser"));

    const student = JSON.parse(localStorage.getItem("currentStudent"));

    const [editFirstName, setEditFirstName] = useState(student.first_name); //string - Beth
    const [editLastName, setEditLastName] = useState(student.last_name); //string - Smith
    const [editAddress, setEditAddress] = useState(student.address); //string  123 Street, City, State 00000
    const [editGrade, setEditGrade] = useState(student.grade); //string - 3
    const [editAge, setEditAge] = useState(student.age); //number - 10
    const [editInsurance, setEditInsurance] = useState(student.insurance); //boolean - true(1) false(0)
    const [editExpiration, setEditExpiration] = useState(student.exp_date); //string - 01/01/2021
    const [editStatus, setEditStatus] = useState(student.status); //string - radio buttons
    const [editBirthCert, setEditBirthCert] = useState(student.birth_certificate); //boolean - true(1) false(0)

    const [editBackground, setEditBackground] = useState(student.background); //string - paragraph (textarea)
    const [editSpecialNeeds, setEditSpecialNeeds] = useState(student.special_needs); //string - none, paragraph (textarea)
    const [editRepresentative, setEditRepresentative] = useState(student.representative_name); // string - Name, relationship (Sara, mother)
    const [editContact, setEditContact] = useState(student.representative_contact); //string - phone number 1111111111
    const [editImage, setEditImage] = useState(student.img_url); //string - url - DISABLED

    const editData = {
        id: student.id,
        first_name: editFirstName,
        last_name: editLastName,
        address: editAddress,
        grade: editGrade,
        age: editAge,
        insurance: editInsurance,
        exp_date: editExpiration,
        status: editStatus,
        birth_certificate: editBirthCert,
        background: editBackground,
        special_needs: editSpecialNeeds,
        representative_name: editRepresentative,
        representative_contact: editContact,
        img_url: editImage
    }

    const handleFirstName = e => {
        setEditFirstName(e.target.value);
    }
    const handleLastName = e => {
        setEditLastName(e.target.value);
    }
    const handleAddress = e => {
        setEditAddress(e.target.value);
    }
    const handleGrade = e => {
        setEditGrade(e.target.value);
    }
    const handleAge = e => {
        setEditAge(e.target.value);
    }
    const handleInsurance = e => {
        setEditInsurance(e.target.value);
    }
    const handleExpiration = e => {
        setEditExpiration(e.target.value);
    }
    const handleStatus = e => {
        setEditStatus(e.target.value);
    }
    const handleBirthCert = e => {
        setEditBirthCert(e.target.value);
    }
    const handleBackground = e => {
        setEditBackground(e.target.value);
    }
    const handleSpecialNeeds = e => {
        setEditSpecialNeeds(e.target.value);
    }
    const handleRepresentative = e => {
        setEditRepresentative(e.target.value);
    }
    const handleContact = e => {
        setEditContact(e.target.value);
    }
    const handleImage = e => {
        setEditImage(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Edit Student data: ", editData);
        props.editStudent(editData, student.id);
        props.history.push(`/students2`)
    }

    const handleCancel = e => {
        e.preventDefault();
        props.history.push(`/student2/${student.id}`)
    }


    return (
        <div className="add-edit-form">
            <div className="top-label">
                <p>Hello, {user.first_name} | <a href="/login" onClick={handleSignout}>Log Out</a></p>
            </div>
            <div className="placement">
                <SideBar active={"list"} />
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-maininfo-div">
                    <div className='form-name-div'>
                        <label>
                            First Name:
                            <input
                                type='text'
                                name='first_name'
                                onChange={handleFirstName}
                                value={editFirstName}
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                type='text'
                                name='last_name'
                                onChange={handleLastName}
                                value={editLastName}
                            />
                        </label>
                    </div>
                    <div className='form-address-div'>
                        <label>
                            Address:
                            <input
                                type='textarea'
                                name='address'
                                onChange={handleAddress}
                                value={editAddress}
                            />
                        </label>
                    </div>
                </div>
                <div className='form-number-div'>
                    <label>
                        Grade:
                        <input
                            type='text'
                            name='grade'
                            onChange={handleGrade}
                            value={editGrade}
                        />
                    </label>
                    <label>
                        Age:
                        <input
                            type='number'
                            name='age'
                            onChange={handleAge}
                            value={editAge}
                        />
                    </label>
                </div>
                <div className='form-select-div'>
                    <div className='form-insurance-div'>
                        <label>
                            Insurance: 
                            <select
                                name='insurance'
                                onChange={handleInsurance}
                                value={editInsurance}
                            >
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </select>
                        </label>
                        <label>
                            Expiration:
                            <input
                                type='text'
                                name='exp_date'
                                onChange={handleExpiration}
                                value={editExpiration}
                                placeholder={'mm/dd/yyyy'}
                            />
                        </label>
                    </div>
                    <div className='form-status-div'>
                        <label>
                            Status: 
                            <select
                                name='status'
                                onChange={handleStatus}
                                value={editStatus}
                            >
                                <option value="active">Active</option>
                                <option value="alumni">Alumni</option>
                                <option value="visitor">Visitor</option>
                            </select> 
                        </label>
                        <label>
                            Birth Certificate:
                            <select
                                name='birth_certificate'
                                onChange={handleBirthCert}
                                value={editBirthCert}
                            >
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className='form-textarea-div'>
                    <label>
                        Background:
                        <input
                            type='textarea'
                            name='background'
                            onChange={handleBackground}
                            value={editBackground}
                        />
                    </label>
                    <label>
                        Special Needs:
                        <input
                            type='textarea'
                            name='special_needs'
                            onChange={handleSpecialNeeds}
                            value={editSpecialNeeds}
                        />
                    </label>
                </div>
                <div className='form-rep-div'>
                    <label>
                        Representative:
                        <input
                            type='textarea'
                            name='representative_name'
                            onChange={handleRepresentative}
                            value={editRepresentative}
                        />
                    </label>
                    <label>
                        Contact Information:
                        <input
                            type='textarea'
                            name='representative_contact'
                            onChange={handleContact}
                            value={editContact}
                        />
                    </label>
                </div>
                <button>Edit Student</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        currentStudent: state.currentStudent,
        error: state.error
    }
}

export default connect(mapStateToProps, { editStudent })(EditStudent);