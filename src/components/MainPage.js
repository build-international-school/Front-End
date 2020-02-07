// Main home page routed to from Login

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Nav from './Nav';
import { getStudents, getWorkers, getAdmins, createOrgsList } from '../actions';
import SideBar from './SideBar';
import { MainDiv, InfoBox, InfoTop, MainOrg, MainVisit, MainTotal, AllStudents, Table, TableRow, TableHeader, Err } from './Styles.js';

const MainPage = props => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    useEffect(() => {
        props.getWorkers();
        props.getAdmins();

        const workerOrgs = props.workers.map(item => {
            return item.organization
        })
        const adminOrgs = props.admins.map(item => {
            return item.organization
        })
        let orgs = [];
        workerOrgs.map(item => {
            if (orgs.indexOf(item) === -1) {
                orgs.push(item);
            }
        })
        adminOrgs.map(item => {
            if(orgs.indexOf(item) === -1) {
                orgs.push(item);
            }
        })
        props.createOrgsList(orgs);
        props.getStudents();   
    }, [])

    return(
        <>
        <Nav />
        {props.error && <Err><h5>Uh Oh! Something didn't work! Error: {props.error} </h5></Err>}
        <MainDiv>
            <div className="placement">
                <SideBar active={"main"} />
            </div>
            <InfoBox>
                <InfoTop>
                    <MainOrg>
                        {/*removed {user.organization} and replaced with Lambda School*/}
                        <h2>{user.organization}</h2>
                    </MainOrg>
                    <MainVisit className="visit-div">
                        <h3>Worker Visits:</h3>
                        <Table>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        {props.visits && 
                            props.visits.map(visit => (
                                <tr>
                                    <td>{visit.first_name}</td>
                                    <td>{visit.last_name}</td>
                                    <td>{visit.email}</td>
                                    <td>{visit.date}</td>
                                    <td>{visit.time}</td>
                                    <td></td>
                                </tr>
                            ))
                        }
                        </Table>
                        {!props.visits && <p>No recent visits.</p>}
                        
                    </MainVisit>
                    <MainTotal>
                        {/* Make h1 have less space around it */}
                        <h1>{props.students.length}</h1>
                        <p>Total Students</p>
                    </MainTotal>
                </InfoTop>      
                    <AllStudents>
                        <div className="student">
                            <Table>
                                <TableRow>
                                    <TableHeader>Name</TableHeader>
                                    <TableHeader>Status</TableHeader>
                                    <TableHeader>Grade</TableHeader>
                                    <TableHeader>Age</TableHeader>
                                    <TableHeader>Representative</TableHeader>
                                    <TableHeader>Contact</TableHeader>
                                    <TableHeader>Special Needs</TableHeader>
                                </TableRow>
                            {props.students && 
                            !props.isLoading && 
                            props.students.map(student => (
                                <TableRow>
                                    <td>{student.last_name}, {student.first_name}</td>
                                    <td>{student.status}</td>
                                    <td>{student.grade}</td>
                                    <td>{student.age}</td>
                                    <td>{student.representative_name}</td>
                                    <td>{student.representative_contact}</td>
                                    <td>{student.special_needs}</td>
                                </TableRow>
                        ))}
                            </Table>
                        </div>
                    </AllStudents>
            </InfoBox>
        </MainDiv>
        </>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        students: state.students,
        workers: state.workers,
        admins: state.admins,
        visits: state.visits,
        organizations: state.organizations,
        isLoading: state.isLoading,
        isEditing: state.isEditing,
        error: state.error
    }
}

export default connect(mapStateToProps, { getStudents, getWorkers, getAdmins, createOrgsList })(MainPage);