import React from 'react';

const SideBar = props => {
    switch (props.active) {
        case "main":
            return (
                <>
                    <div className="side-active">
                        <p>Main</p>
                    </div>
                    <div className="side">
                        <p>All Students</p>
                    </div>
                    <div className="side">
                        <p>Student View</p>
                    </div>
                    <div className="side">
                        <p>Add Student</p>
                    </div>
                </>
            );
        case "list":
            return (
                <>
                    <div className="side">
                        <p>Main</p>
                    </div>
                    <div className="side-active">
                        <p>All Students</p>
                    </div>
                    <div className="side">
                        <p>Student View</p>
                    </div>
                    <div className="side">
                        <p>Add Student</p>
                    </div>
                </>
            );
        case "student":
            return (
                <>
                    <div className="side">
                        <p>Main</p>
                    </div>
                    <div className="side">
                        <p>All Students</p>
                    </div>
                    <div className="side-active">
                        <p>Student View</p>
                    </div>
                    <div className="side">
                        <p>Add Student</p>
                    </div>
                </>
            )
        case "add":
            return (
                <>
                    <div className="side">
                        <p>Main</p>
                    </div>
                    <div className="side">
                        <p>All Students</p>
                    </div>
                    <div className="side">
                        <p>Student View</p>
                    </div>
                    <div className="side-active">
                        <p>Add Student</p>
                    </div>
                </>
            )
        default:
            return (
                <>
                    <div className="side">
                        <p>Main</p>
                    </div>
                    <div className="side">
                        <p>All Students</p>
                    </div>
                    <div className="side">
                        <p>Student View</p>
                    </div>
                    <div className="side">
                        <p>Add Student</p>
                    </div>
                </>
            );
    }
}

export default SideBar;