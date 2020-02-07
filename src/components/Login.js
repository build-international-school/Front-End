// Non Protected Route, Login to site

import React, { useState} from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions';
import NavInit from './NavInit';


const Login = props => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleEmailChanges = e => {
        setLoginEmail(e.target.value);
    }
    const handlePasswordChanges = e => {
        setLoginPassword(e.target.value);
    }

    const loginData = {
        email: loginEmail,
        password: loginPassword,
    }

    const handleLogin = e => {
        e.preventDefault();
        props.loginUser(props, loginData);
    }

    return(
        <div>
            <NavInit />
            <h1>Login Existing User</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={loginData.email}
                            onChange={handleEmailChanges}
                            placeholder='email@email.com'
                            required
                        /> <span className="req">*</span>
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={handlePasswordChanges}
                            placeholder="8 character minimum"
                            required
                        /> <span className="req">*</span>
                    </label>
                </div>
                <button>Login!</button>
            </form>
            <p>New User? <a href="/create-user">Create a new account.</a></p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { loginUser })(Login);