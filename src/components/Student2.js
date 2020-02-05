// // Individual student information (edit and delete will live here too)
import React from 'react';

import SideBar from './SideBar';

const Student2 =  props => {
    console.log("In Student: ", props);
    const handleSignout = () => {
        localStorage.clear();
    }

    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log("User: ", user);


    return (
        <>
            <div className="top-label">
                <p>Hello, {user.first_name} | <a href="/login" onClick={handleSignout}>Log Out</a></p>
            </div>
            <div className="placement">
                <SideBar active={"student"} />
            </div>
            <div className="students-container">
                This is a student. WOOOHOOO!
                <div className="student-image">
                    <img src={"/images/profileShadow.png"} alt="profile shadow" />
                </div>
                
            </div>
        </>
//         <div>
//            <h1>Student</h1>
//            <div>
//                <h2>{props.student.first_name} {props.student.last_name}</h2>
//            </div>
//         </div>
    )
}

export default Student2;