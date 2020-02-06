// Worker can log a visit to the school.

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addVisit } from '../actions';
import SideBar from './SideBar';

const Visits = props => {
    const handleSignout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("allStudents");
    }

    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log("User: ", user);

    const [type, setType] = useState(user.type);
    const [workerFirstName, setWorkerFirstName] = useState(user.first_name);
    const [workerLastName, setWorkerLastName] = useState(user.last_name);
    const [workerEmail, setWorkerEmail] = useState(user.email);
    const [visitDate, setVisitDate] = useState('');
    const [visitTime, setVisitTime] = useState('');

    const newVisit = {
        type: type,
        first_name: workerFirstName,
        last_name: workerLastName,
        email: workerEmail,
        date: visitDate,
        time: visitTime
    }

    const handleType = e => {
        setType(e.target.value);
    }
    const handleFirstName = e => {
        setWorkerFirstName(e.target.value);
    }
    const handleLastName = e => {
        setWorkerLastName(e.target.value);
    }
    const handleEmail = e => {
        setWorkerEmail(e.target.value);
    }
    const handleDate = e => {
        setVisitDate(e.target.value);
    }
    const handleTime = e => {
        setVisitTime(e.target.value);
    }

    const handleAdd = e => {
        e.preventDefault();
        props.addVisit(newVisit);
        props.history.push("/main");
    }

    return (
        <div>
            <div className="top-label">
                {user && 
                    <p>Hello, {user.first_name} | <a href="/login" onClick={handleSignout}>Log Out</a></p>
                }
                {!user && 
                    <p>Hello! | <a href="/login" onClick={handleSignout}>Log Out</a></p>
                }
            </div>
            <div className="placement">
                <SideBar active={"visits"} />
            </div>
            Worker Visits Page
            <form onSubmit={handleAdd}>
                <label>
                    Login Type:
                    <select
                        name='type'
                        onChange={handleType}
                        value={type}
                        disabled
                    >
                        <option value={3} disabled>Choose...</option>
                        <option value='admin'>Admin</option>
                        <option value='worker'>Worker</option>
                    </select>
                </label>

                <label>
                    First Name:
                    <input
                        type='text'
                        name='first_name'
                        onChange={handleFirstName}
                        value={workerFirstName}
                        placeholder='First Name'
                        disabled
                    /> <span className="req">*</span>
                </label>
                <label>
                    Last Name:
                    <input
                        type='text'
                        name='last_name'
                        onChange={handleLastName}
                        value={workerLastName}
                        placeholder='Last Name'
                        disabled
                    /> <span className="req">*</span>
                </label>
                <label>
                    Email:
                    <input
                        type='email'
                        name='email'
                        onChange={handleEmail}
                        value={workerEmail}
                        placeholder='email@email.com'
                        disabled
                    /> <span className="req">*</span>
                </label>
                <label>
                    Date:
                    <input
                        type='text'
                        name='date'
                        onChange={handleDate}
                        value={visitDate}
                        placeholder='mm/dd/yyyy'
                        required
                    /> <span className="req">*</span>
                </label>
                <label>
                    Time:
                    <input
                        type='text'
                        name='time'
                        onChange={handleTime}
                        value={visitTime}
                        placeholder='10:15 am'
                        required
                    /> <span className="req">*</span>
                </label>
                <button>Add Visit</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        visits: state.visits
    }
}

export default connect(mapStateToProps, { addVisit })(Visits);