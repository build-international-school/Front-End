// Add a new student

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addStudent } from '../actions';
import SideBar from './SideBar';

import Nav from './Nav';

import { MainEditDiv, EditDiv, VisitForm, Label, Select, EditInput, EditTextarea, Button, Err } from './Styles.js';

const AddStudent2 = props => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    const [newFirstName, setNewFirstName] = useState(''); 
        //string - Beth
    const [newLastName, setNewLastName] = useState(''); 
        //string - Smith
    const [newAddress, setNewAddress] = useState(''); 
        //string  123 Street, City, State 00000
    const [newGrade, setNewGrade] = useState(''); 
        //string - 3
    const [newAge, setNewAge] = useState(''); 
        //number - 10
    const [newInsurance, setNewInsurance] = useState(3); 
        //boolean - true(1) false(0)
    const [newExpiration, setNewExpiration] = useState(''); 
        //string - 01/01/2021
    const [newStatus, setNewStatus] = useState(3); 
        //string - radio buttons
    const [newBirthCert, setNewBirthCert] = useState(3); 
        //boolean - true(1) false(0)
    const [newBackground, setNewBackground] = useState(''); 
        //string - paragraph (textarea)
    const [newSpecialNeeds, setNewSpecialNeeds] = useState(''); 
        //string - none, paragraph (textarea)
    const [newRepresentative, setNewRepresentative] = useState(''); 
        // string - Name, relationship (Sara, mother)
    const [newContact, setNewContact] = useState(''); 
        //string - phone number 1111111111
    const [newImage, setNewImage] = useState(''); 
        //string - url - DISABLED

    const newData = {
        first_name: newFirstName,
        last_name: newLastName,
        address: newAddress,
        grade: newGrade,
        age: newAge,
        insurance: newInsurance,
        exp_date: newExpiration,
        status: newStatus,
        birth_certificate: newBirthCert,
        background: newBackground,
        special_needs: newSpecialNeeds,
        representative_name: newRepresentative,
        representative_contact: newContact,
        img_url: newImage
    }

    const handleFirstName = e => {
        setNewFirstName(e.target.value);
    }
    const handleLastName = e => {
        setNewLastName(e.target.value);
    }
    const handleAddress = e => {
        setNewAddress(e.target.value);
    }
    const handleGrade = e => {
        setNewGrade(e.target.value);
    }
    const handleAge = e => {
        setNewAge(e.target.value);
    }
    const handleInsurance = e => {
        setNewInsurance(e.target.value);
    }
    const handleExpiration = e => {
        setNewExpiration(e.target.value);
    }
    const handleStatus = e => {
        setNewStatus(e.target.value);
    }
    const handleBirthCert = e => {
        setNewBirthCert(e.target.value);
    }
    const handleBackground = e => {
        setNewBackground(e.target.value);
    }
    const handleSpecialNeeds = e => {
        setNewSpecialNeeds(e.target.value);
    }
    const handleRepresentative = e => {
        setNewRepresentative(e.target.value);
    }
    const handleContact = e => {
        setNewContact(e.target.value);
    }
    const handleImage = e => {
        setNewImage(e.target.value);
    }

    const handleAdd = e => {
        e.preventDefault();
        props.addStudent(newData, user.id);
        props.history.push('/students2');
    }

    return(
        <>
        <Nav />
        {props.error && <Err><h5>Uh Oh! Something didn't work! Error: {props.error} </h5></Err>}
        <MainEditDiv>
            <div className="placement">
                <SideBar active={"add"} />
            </div>
            <EditDiv>
            <VisitForm onSubmit={handleAdd}>
                        <Label>
                            First Name:
                            <EditInput
                                type='text'
                                name='first_name'
                                onChange={handleFirstName}
                                value={newFirstName}
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
                                value={newLastName}
                                placeholder='Last Name'
                                required
                            /> <span className="req">*</span>
                        </Label>
                        <Label>
                            Address:
                            <EditTextarea
                                wrap='soft'
                                name='address'
                                onChange={handleAddress}
                                value={newAddress}
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
                            value={newGrade}
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
                            value={newAge}
                            placeholder={0}
                            required
                        /> <span className="req">*</span>
                    </Label>
                        <Label>
                            Insurance: 
                            <Select
                                name='insurance'
                                onChange={handleInsurance}
                                value={newInsurance}
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
                                value={newExpiration}
                                placeholder={'mm/dd/yyyy'}
                            />
                        </Label>
                        <Label>
                            Status: 
                            <Select
                                name='status'
                                onChange={handleStatus}
                                value={newStatus}
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
                                value={newBirthCert}
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
                            value={newBackground}
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
                            value={newSpecialNeeds}
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
                            value={newRepresentative}
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
                            value={newContact}
                            placeholder='111-222-3333'
                            required
                        /> <span className="req">*</span>
                    </Label>
                <Button>Add!</Button>
            </VisitForm>
            </EditDiv>
        </MainEditDiv>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { addStudent })(AddStudent2);