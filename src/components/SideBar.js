import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Side } from './Styles.js';

const SideBar = props => {
    const student = JSON.parse(localStorage.getItem("currentStudent"));

    switch (props.active) {
        case "main":
            return (
                <Side>
                    <div className="side-head">
                        <h3>Page Tracker</h3>
                    </div>
                    <div className="side-active">
                        <Link to='/main'><p>Main Page</p></Link>
                    </div>
                    <div className="side">
                        <Link to='/visits'><p>Worker Visits</p></Link>
                    </div>
                    <div className="side">
                        <Link to='/students2'><p>All Students</p></Link>
                    </div>
                    <div className="side">
                        {student && 
                            <Link to={`/student2/${student.id}`}><p>Student View</p></Link>
                        }
                        {!student &&
                            <p>Student View</p>
                        }
                    </div>
                    <div className="side">
                        {student && 
                            <Link to={`/edit-student/${student.id}`}><p>Edit Student</p></Link>
                        }
                        {!student &&
                            <p>Edit Student</p>
                        }
                    </div>
                    <div className="side">
                        <Link to="/add-student2"><p>Add Student</p></Link>
                    </div>
                </Side>
            );
        case "visits":
            return (
                <Side>
                    <div className="side-head">
                        <h3>Page Tracker</h3>
                    </div>
                    <div className="side">
                        <Link to='/main'><p>Main Page</p></Link>
                    </div>
                    <div className="side-active">
                        <Link to='/visits'><p>Worker Visits</p></Link>
                    </div>
                    <div className="side">
                        <Link to='/students2'><p>All Students</p></Link>
                    </div>
                    <div className="side">
                        {student && 
                            <Link to={`/student2/${student.id}`}><p>Student View</p></Link>
                        }
                        {!student &&
                            <p>Student View</p>
                        }
                    </div>
                    <div className="side">
                        {student && 
                            <Link to={`/edit-student/${student.id}`}><p>Edit Student</p></Link>
                        }
                        {!student &&
                            <p>Edit Student</p>
                        }
                    </div>
                    <div className="side">
                        <Link to="/add-student2"><p>Add Student</p></Link>
                    </div>
                </Side>
            );
        case "list":
            return (
                <Side>
                    <div className="side-head">
                        <h3>Page Tracker</h3>
                    </div>
                    <div className="side">
                        <Link to='/main'><p>Main Page</p></Link>
                    </div>
                    <div className="side">
                        <Link to='/visits'><p>Worker Visits</p></Link>
                    </div>
                    <div className="side-active">
                        <Link to='/students2'><p>All Students</p></Link>
                    </div>
                    <div className="side">
                        {student && 
                            <Link to={`/student2/${student.id}`}><p>Student View</p></Link>
                        }
                        {!student &&
                            <p>Student View</p>
                        }
                    </div>
                    <div className="side">
                        {student && 
                            <Link to={`/edit-student/${student.id}`}><p>Edit Student</p></Link>
                        }
                        {!student &&
                            <p>Edit Student</p>
                        }
                    </div>
                    <div className="side">
                        <Link to="/add-student2"><p>Add Student</p></Link>
                    </div>
                </Side>
            );
        case "student":
            return (
                <Side>
                    <div className="side-head">
                        <h3>Page Tracker</h3>
                    </div>
                    <div className="side">
                        <Link to='/main'><p>Main Page</p></Link>
                    </div>
                    <div className="side">
                        <Link to='/visits'><p>Worker Visits</p></Link>
                    </div>
                    <div className="side">
                        <Link to='/students2'><p>All Students</p></Link>
                    </div>
                    <div className="side-active">
                        {student && 
                            <Link to={`/student2/${student.id}`}><p>Student View</p></Link>
                        }
                        {!student &&
                            <p>Student View</p>
                        }
                    </div>
                    <div className="side">
                        {student && 
                            <Link to={`/edit-student/${student.id}`}><p>Edit Student</p></Link>
                        }
                        {!student &&
                            <p>Edit Student</p>
                        }
                    </div>
                    <div className="side">
                        <Link to="/add-student2"><p>Add Student</p></Link>
                    </div>
                </Side>
            )
        case "edit":
            return (
                <Side>
                    <div className="side-head">
                        <h3>Page Tracker</h3>
                    </div>
                    <div className="side">
                        <Link to='/main'><p>Main Page</p></Link>
                    </div>
                    <div className="side">
                        <Link to='/visits'><p>Worker Visits</p></Link>
                    </div>
                    <div className="side">
                        <Link to='/students2'><p>All Students</p></Link>
                    </div>
                    <div className="side">
                        {student && 
                            <Link to={`/student2/${student.id}`}><p>Student View</p></Link>
                        }
                        {!student &&
                            <p>Student View</p>
                        }
                    </div>
                    <div className="side-active">
                        {student.id && 
                            <Link to={`/edit-student/${student.id}`}><p>Edit Student</p></Link>
                        }
                        {!student.id &&
                            <p>Edit Student</p>
                        }
                    </div>
                    <div className="side">
                        <Link to="/add-student2"><p>Add Student</p></Link>
                    </div>
                </Side>
            )
        case "add":
            return (
                <Side>
                    <div className="side-head">
                        <h3>Page Tracker</h3>
                    </div>
                    <div className="side">
                        <Link to='/main'><p>Main Page</p></Link>
                    </div>
                    <div className="side">
                        <Link to='/visits'><p>Worker Visits</p></Link>
                    </div>
                    <div className="side">
                        <Link to='/students2'><p>All Students</p></Link>
                    </div>
                    <div className="side">
                        {student && 
                            <Link to={`/student2/${student.id}`}><p>Student View</p></Link>
                        }
                        {!student &&
                            <p>Student View</p>
                        }
                    </div>
                    <div className="side">
                        {student && 
                            <Link to={`/edit-student/${student.id}`}><p>Edit Student</p></Link>
                        }
                        {!student &&
                            <p>Edit Student</p>
                        }
                    </div>
                    <div className="side-active">
                        <Link to="/add-student2"><p>Add Student</p></Link>
                    </div>
                </Side>
            )
        default:
            return (
                <Side>
                    <div className="side-head">
                        <h3>Page Tracker</h3>
                    </div>
                    <div className="side">
                        <Link to='/main'><p>Main Page</p></Link>
                    </div>
                    <div className="side">
                        <Link to='/visits'><p>Worker Visits</p></Link>
                    </div>
                    <div className="side">
                        <Link to='/students2'><p>All Students</p></Link>
                    </div>
                    <div className="side">
                        {student && 
                            <Link to={`/student2/${student.id}`}><p>Student View</p></Link>
                        }
                        {!student &&
                            <p>Student View</p>
                        }
                    </div>
                    <div className="side">
                        {student && 
                            <Link to={`/edit-student/${student.id}`}><p>Edit Student</p></Link>
                        }
                        {!student &&
                            <p>Edit Student</p>
                        }
                    </div>
                    <div className="side">
                        <Link to="/add-student2"><p>Add Student</p></Link>
                    </div>
                </Side>
            );
    }
}

export default SideBar;