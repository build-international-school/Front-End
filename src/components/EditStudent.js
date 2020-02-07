// Edit an existing student

import React, { useState } from 'react';
import { connect } from 'react-redux';

import Nav from './Nav';
import { editStudent } from '../actions';
import SideBar from './SideBar';

import { MainEditDiv, EditDiv, VisitForm, Label, Select, EditInput, EditTextarea, Button } from './Styles.js';

const EditStudent = props => {
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
        <>
        <Nav />
        <MainEditDiv className="add-edit-form">
            <div className="placement">
                <SideBar active={"edit"} />
            </div>
            <EditDiv>
                <VisitForm onSubmit={handleSubmit}>
                            <Label>
                                First Name:
                                <EditInput
                                    type='text'
                                    name='first_name'
                                    onChange={handleFirstName}
                                    value={editFirstName}
                                    placeholder='First Name'
                                    required
                                /> <span className="req">*</span>
                            </Label>
                            <Label>
                                Last Name:
                                <EditInput
                                    type='text'
                                    name='last_name'
                                    onChange={handleLastName}
                                    value={editLastName}
                                    placeholder='Last Name'
                                    required
                                /><span className="req">*</span>
                            </Label>
                            <Label>
                                Address:
                                <EditTextarea
                                    wrap='soft'
                                    name='address'
                                    onChange={handleAddress}
                                    value={editAddress}
                                    placeholder='123 Street, City, ST, 0000'
                                    required
                                /> <span className="req">*</span>
                            </Label>
                        <Label>
                            Grade:
                            <EditInput
                                type='text'
                                name='grade'
                                onChange={handleGrade}
                                value={editGrade}
                                placeholder='0'
                                required
                            /> <span className="req">*</span>
                        </Label>
                        <Label>
                            Age:
                            <EditInput
                                type='number'
                                name='age'
                                onChange={handleAge}
                                value={editAge}
                                placeholder={0}
                                required
                            /> <span className="req">*</span>
                        </Label>
                            <Label>
                                Insurance: 
                                <Select
                                    name='insurance'
                                    onChange={handleInsurance}
                                    value={editInsurance}
                                    required
                                >
                                    <option value={3} disabled>Choose...</option>
                                    <option value={1}>Yes</option>
                                    <option value={0}>No</option>
                                </Select> <span className="req">*</span>
                            </Label>
                            <Label>
                                Expiration:
                                <EditInput
                                    type='text'
                                    name='exp_date'
                                    onChange={handleExpiration}
                                    value={editExpiration}
                                    placeholder={'mm/dd/yyyy'}
                                />
                            </Label>
                            <Label>
                                Status: 
                                <Select
                                    name='status'
                                    onChange={handleStatus}
                                    value={editStatus}
                                    required
                                >
                                    <option value={3} disabled>Choose...</option>
                                    <option value="active">Active</option>
                                    <option value="alumni">Alumni</option>
                                    <option value="visitor">Visitor</option>
                                </Select> <span className="req">*</span>
                            </Label>
                            <Label>
                                Birth Certificate:
                                <Select
                                    name='birth_certificate'
                                    onChange={handleBirthCert}
                                    value={editBirthCert}
                                    required
                                >
                                    <option value={3} disabled>Choose...</option>
                                    <option value={1}>Yes</option>
                                    <option value={0}>No</option>
                                </Select> <span className="req">*</span>
                            </Label>
                        <Label>
                            Background:
                            <EditTextarea
                                wrap='soft'
                                name='background'
                                onChange={handleBackground}
                                value={editBackground}
                                placeholder="Information about home life, why they're here, what they are good at, and what they are not."
                                required
                            /> <span className="req">*</span>
                        </Label>
                        <Label>
                            Special Needs:
                            <EditTextarea
                                wrap='soft'
                                name='special_needs'
                                onChange={handleSpecialNeeds}
                                value={editSpecialNeeds}
                                placeholder="none | Information about IEP, or disabilities."
                                required
                            /> <span className="req">*</span>
                        </Label>
                        <Label>
                            Representative:
                            <EditInput
                                type='textarea'
                                name='representative_name'
                                onChange={handleRepresentative}
                                value={editRepresentative}
                                placeholder="Name, relationship"
                                required
                            /> <span className="req">*</span>
                        </Label>
                        <Label>
                            Contact Information:
                            <EditInput
                                type='textarea'
                                name='representative_contact'
                                onChange={handleContact}
                                value={editContact}
                                placeholder='111-222-3333'
                                required
                            /> <span className="req">*</span>
                        </Label>
                    <Button>Edit Student</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </VisitForm>
            </EditDiv>
        </MainEditDiv>
        </>
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