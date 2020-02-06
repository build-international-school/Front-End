// Non-Protected Route. Create a new admin or worker.

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addUser } from '../actions';

const CreateUser = props => {
    const orgs = JSON.parse(localStorage.getItem("orgs"));

    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [verify, setVerify] = useState('');
    const [newType, setNewType] = useState('');
    const [newOrganization, setNewOrganization] = useState('');
    const [newSelectText, setNewSelectText] = useState('');

    const handleFirstNameChanges = e => {
        setNewFirstName(e.target.value);
    }
    const handleLastNameChanges = e => {
        setNewLastName(e.target.value);
    }
    const handleEmailChanges = e => {
        setNewEmail(e.target.value);
    }
    const handlePhoneChanges = e => {
        setNewPhone(e.target.value);
    }
    const handlePasswordChanges = e => {
            setNewPassword(e.target.value);
    }
    const handleVerifyPassword = e => {
        setVerify(e.target.value);
    }
    const handleTypeChanges = e => {
        setNewType(e.target.value);
    }
    const handleOrganizationChanges = e => {
        setNewOrganization(e.target.value);
    }
    const handleSelectText = e => {
        setNewSelectText(e.target.value);
    }

    const newData = {
        password: newPassword,
        email: newEmail,
        phone: newPhone,
        first_name: newFirstName,
        last_name: newLastName,
        type: newType,
        organization: newOrganization
    }

    const handleAddUser = e => {
        e.preventDefault();
        //axios POST here to create a user to https://issw.herokuapp.com/api/auth/register
        if (newPassword === verify) {
            console.log(newData);
            props.addUser(props, newData);
        } else {
            console.log("The passwords must match!");
        }
        
    }

    return (
        <div>
            <h1>Create a New User Account</h1>
            <form onSubmit={handleAddUser}>
                <div>
                    <label>
                        Email:
                        <input
                            type='text'
                            name='username'
                            value={newData.email}
                            onChange={handleEmailChanges}
                            required
                        /> <span className="req">*</span>
                    </label>
                    <label>
                        Phone Number:
                        <input
                            type='text'
                            name='phone'
                            value={newData.phone}
                            onChange={handlePhoneChanges}
                            required
                        /> <span className="req">*</span>
                    </label>
                </div>
                <div>
                    <label>
                        First Name:
                        <input
                            type='text'
                            name='first_name'
                            value={newData.first_name}
                            onChange={handleFirstNameChanges}
                            required
                        /> <span className="req">*</span>
                    </label>
                    <label>
                        Last Name:
                        <input
                            type='text'
                            name='last_name'
                            value={newData.last_name}
                            onChange={handleLastNameChanges}
                            required
                        /> <span className="req">*</span>
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type='password'
                            name='password'
                            onChange={handlePasswordChanges}
                            required
                        />  <span className="req">*</span>
                    </label>
                    <label>
                        Password Verification:
                        <input
                            type='password'
                            name='password'
                            onChange={handleVerifyPassword}
                            required
                        /> <span className="req">*</span>
                    </label>
                </div>
                <div>
                    <label>
                        User Type:
                        <input
                            type='radio'
                            name='type'
                            value='admin'
                            onChange={handleTypeChanges}
                            checked
                        /> Admin
                        <input
                            type='radio'
                            name='type'
                            value='worker'
                            onChange={handleTypeChanges}
                        /> Social Worker
                    </label> <span className="req">*</span>
                </div>
                <div>
                    <label>
                        Organization:
                        <input 
                            type="text" 
                            list="orgs" 
                            onChange={handleOrganizationChanges}
                            value={newOrganization}
                            required
                        /> <span className="req">*</span>
                        <datalist id='orgs'>
                            {orgs.map(item => (
                                <option>{item}</option>
                            ))}
                            <option> ABCDE </option>
                        </datalist>
                    </label>
                </div>
                <button>Create User!</button>
            </form>
            <p>Already have an account? <a href="/login">Login.</a></p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users,
        isLoading: state.isLoading,
        error: state.error,
        organizations: state.organizations
    }

}

export default connect(mapStateToProps, { addUser })(CreateUser);