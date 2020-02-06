// Edit an existing student

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { editStudent } from '../actions';
import SideBar from './SideBar';


const EditStudent = props => {
    const handleSignout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("allStudents");
    }
    
    const user = JSON.parse(localStorage.getItem("currentUser"));

    const student = JSON.parse(localStorage.getItem("currentStudent"));

    const [editFirstName, setEditFirstName] = useState(student.first_name); 
        //string - Beth
    const [editLastName, setEditLastName] = useState(student.last_name); 
        //string - Smith
    const [editAddress, setEditAddress] = useState(student.address); 
        //string  123 Street, City, State 00000
    const [editGrade, setEditGrade] = useState(student.grade); 
        //string - 3
    const [editAge, setEditAge] = useState(student.age); 
        //string - 10
    const [editInsurance, setEditInsurance] = useState(student.insurance); 
        //boolean - true(1) false(0)
    const [editExpiration, setEditExpiration] = useState(student.exp_date); 
        //string - 01/01/2021
    const [editStatus, setEditStatus] = useState(student.status); 
        //string - radio buttons
    const [editBirthCert, setEditBirthCert] = useState(student.birth_certificate); 
        //boolean - true(1) false(0)

    const [editBackground, setEditBackground] = useState(student.background); 
        //string - paragraph (textarea)
    const [editSpecialNeeds, setEditSpecialNeeds] = useState(student.special_needs); 
        //string - none, paragraph (textarea)
    const [editRepresentative, setEditRepresentative] = useState(student.representative_name); 
        // string - Name, relationship (Sara, mother)
    const [editContact, setEditContact] = useState(student.representative_contact); 
        //string - phone number 1111111111
    const [editImage, setEditImage] = useState(student.img_url); 
        //string - url - DISABLED

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
                <SideBar active={"edit"} />
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
                                placeholder='First Name'
                                required
                            /> <span className="req">*</span>
                        </label>
                        <label>
                            Last Name:
                            <input
                                type='text'
                                name='last_name'
                                onChange={handleLastName}
                                value={editLastName}
                                placeholder='Last Name'
                                required
                            /><span className="req">*</span>
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
                                placeholder='123 Street, City, ST, 0000'
                                required
                            /> <span className="req">*</span>
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
                            placeholder='0'
                            required
                        /> <span className="req">*</span>
                    </label>
                    <label>
                        Age:
                        <input
                            type='number'
                            name='age'
                            onChange={handleAge}
                            value={editAge}
                            placeholder={0}
                            required
                        /> <span className="req">*</span>
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
                                required
                            >
                                <option value={3} disabled>Choose...</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </select> <span className="req">*</span>
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
                                required
                            >
                                <option value={3} disabled>Choose...</option>
                                <option value="active">Active</option>
                                <option value="alumni">Alumni</option>
                                <option value="visitor">Visitor</option>
                            </select> <span className="req">*</span>
                        </label>
                        <label>
                            Birth Certificate:
                            <select
                                name='birth_certificate'
                                onChange={handleBirthCert}
                                value={editBirthCert}
                                required
                            >
                                <option value={3} disabled>Choose...</option>
                                <option value={1}>Yes</option>
                                <option value={0}>No</option>
                            </select> <span className="req">*</span>
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
                            placeholder="Information about home life, why they're here, what they are good at, and what they are not."
                            required
                        /> <span className="req">*</span>
                    </label>
                    <label>
                        Special Needs:
                        <input
                            type='textarea'
                            name='special_needs'
                            onChange={handleSpecialNeeds}
                            value={editSpecialNeeds}
                            placeholder="none | Information about IEP, or disabilities."
                            required
                        /> <span className="req">*</span>
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
                            placeholder="Name, relationship"
                            required
                        /> <span className="req">*</span>
                    </label>
                    <label>
                        Contact Information:
                        <input
                            type='textarea'
                            name='representative_contact'
                            onChange={handleContact}
                            value={editContact}
                            placeholder='111-222-3333'
                            required
                        /> <span className="req">*</span>
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