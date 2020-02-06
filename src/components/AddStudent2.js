// Add a new student

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addStudent } from '../actions';
import SideBar from './SideBar';

const AddStudent2 = props => {
    const handleSignout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("allStudents");
    }

    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log("User: ", user);

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
        <div className ="form-container">
            <div className="top-label">
                <p>Hello, {user.first_name} | <a href="/login" onClick={handleSignout}>Log Out</a></p>
            </div>
            <div className="placement">
                <SideBar active={"add"} />
            </div>
        
            <form onSubmit={handleAdd}>
                <div className="form-maininfo-div">
                    <div className='form-name-div'>
                        <label>
                            First Name:
                            <input
                                type='text'
                                name='first_name'
                                onChange={handleFirstName}
                                value={newFirstName}
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
                                value={newLastName}
                                placeholder='Last Name'
                                required
                            /> <span className="req">*</span>
                        </label>
                    </div>
                    <div className='form-address-div'>
                        <label>
                            Address:
                            <input
                                type='textarea'
                                name='address'
                                onChange={handleAddress}
                                value={newAddress}
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
                            value={newGrade}
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
                            value={newAge}
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
                                value={newInsurance}
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
                                value={newExpiration}
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
                                value={newStatus}
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
                                value={newBirthCert}
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
                            value={newBackground}
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
                            value={newSpecialNeeds}
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
                            value={newRepresentative}
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
                            value={newContact}
                            placeholder='111-222-3333'
                            required
                        /> <span className="req">*</span>
                    </label>
                </div>
                <button>Add!</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { addStudent })(AddStudent2);