import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const SideBar = props => {
    const student = JSON.parse(localStorage.getItem("currentStudent"));

    switch (props.active) {
        case "main":
            return (
                <>
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
                </>
            );
        case "visits":
            return (
                <>
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
                </>
            );
        case "list":
            return (
                <>
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
                </>
            );
        case "student":
            return (
                <>
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
                </>
            )
        case "edit":
            return (
                <>
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
                </>
            )
        case "add":
            return (
                <>
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
                </>
            )
        default:
            return (
                <>
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
                </>
            );
    }
}

export default SideBar;