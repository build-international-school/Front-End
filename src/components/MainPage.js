// Main home page routed to from Login

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getStudents, getWorkers, getAdmins, createOrgsList } from '../actions';
import SideBar from './SideBar';

const MainPage = props => {
    const handleSignout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("allStudents");
    }

    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log("User: ", user);

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

    console.log("ORGANIZATIONS in main: ", props.organizations);


    return(
        <div className="main-page-div">
            <div className="top-label">
                {user && 
                    <p>Hello, {user.first_name} | <a href="/login" onClick={handleSignout}>Log Out</a></p>
                }
                {!user && 
                    <p>Hello! | <a href="/login" onClick={handleSignout}>Log Out</a></p>
                }
            </div>
            <div className="placement">
                <SideBar active={"main"} />
            </div>
            <div className="main-info">
                <div className="main-info-top">
                    <div className="org-div">
                        <h2>{user.organization}</h2>
                    </div>
                    <div className="visit-div">
                        <h3>Worker Visits:</h3>
                        <p>No recent visits.</p>
                    </div>
                    <div className="total-div">
                        <h1>{props.students.length}</h1>
                        <p>Total Students</p>
                    </div>
                </div>
                <div>        
                    <div className="all-students">
                        <div className="student">
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Grade</th>
                                    <th>Age</th>
                                    <th>Representative</th>
                                    <th>Contact</th>
                                    <th>Special Needs</th>
                                </tr>
                            {props.students && 
                            !props.isLoading && 
                            props.students.map(student => (
                                <tr>
                                    <td>{student.last_name}, {student.first_name}</td>
                                    <td>{student.status}</td>
                                    <td>{student.grade}</td>
                                    <td>{student.age}</td>
                                    <td>{student.representative_name}</td>
                                    <td>{student.representative_contact}</td>
                                    <td>{student.special_needs}</td>
                                </tr>
                        ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        students: state.students,
        workers: state.workers,
        admins: state.admins,
        organizations: state.organizations,
        isLoading: state.isLoading,
        isEditing: state.isEditing,
        error: state.error
    }
}

export default connect(mapStateToProps, { getStudents, getWorkers, getAdmins, createOrgsList })(MainPage);