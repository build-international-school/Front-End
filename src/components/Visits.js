// Worker can log a visit to the school.

import React, { useState } from 'react';
import { connect } from 'react-redux';

import Nav from './Nav';
import { addVisit } from '../actions';
import SideBar from './SideBar';

import { MainVisitDiv, VisitDiv, VisitForm, Label, Select, Input, Button, Err } from './Styles.js';

const Visits = props => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

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
        <>
        <Nav />
        {props.error && <Err><h5>Uh Oh! Something didn't work! Error: {props.error} </h5></Err>}
        <MainVisitDiv>
            <div className="placement">
                <SideBar active={"visits"} />
            </div>
            <VisitDiv>
                <h1>Add A Visit</h1>
                <VisitForm onSubmit={handleAdd}>
                    <Label>
                        Login Type:
                        <Select
                            name='type'
                            onChange={handleType}
                            value={type}
                            disabled
                        >
                            <option value={3} disabled>Choose...</option>
                            <option value='admin'>Admin</option>
                            <option value='worker'>Worker</option>
                        </Select>
                    </Label>
                    <Label>
                        First Name:
                        <Input
                            type='text'
                            name='first_name'
                            onChange={handleFirstName}
                            value={workerFirstName}
                            placeholder='First Name'
                            disabled
                        /> <span className="req">*</span>
                    </Label>
                    <Label>
                        Last Name:
                        <Input
                            type='text'
                            name='last_name'
                            onChange={handleLastName}
                            value={workerLastName}
                            placeholder='Last Name'
                            disabled
                        /> <span className="req">*</span>
                    </Label>
                    <Label>
                        Email:
                        <Input
                            type='email'
                            name='email'
                            onChange={handleEmail}
                            value={workerEmail}
                            placeholder='email@email.com'
                            disabled
                        /> <span className="req">*</span>
                    </Label>
                    <Label>
                        Date:
                        <Input
                            type='text'
                            name='date'
                            onChange={handleDate}
                            value={visitDate}
                            placeholder='mm/dd/yyyy'
                            required
                        /> <span className="req">*</span>
                    </Label>
                    <Label>
                        Time:
                        <Input
                            type='text'
                            name='time'
                            onChange={handleTime}
                            value={visitTime}
                            placeholder='10:15 am'
                            required
                        /> <span className="req">*</span>
                    </Label>
                    <Button>Add Visit</Button>
                </VisitForm>
            </VisitDiv>
        </MainVisitDiv>
        </>
    )
}

const mapStateToProps = state => {
    return {
        visits: state.visits
    }
}

export default connect(mapStateToProps, { addVisit })(Visits);