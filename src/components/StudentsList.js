import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Student from "./Student";



const Students =() => {
    const [students, setStudents] =useState([]);



useEffect(()=> {
   const getStudents =() =>{
       axiosWithAuth()
        .get('https://issw.herokuapp.com/api/students')
        .then(response =>{
            console.log("This is from the axios call",response.data);
            setStudents(response.data);
        })
        .catch(error =>{
            console.error("Server Error", error);
        });
   }
   getStudents();
    }, []);

console.log("students",students)
    return (
<div className="student-list">
    {students.map (student =>(
        <Link to= {`/student/${student.id}`}>
        <Student student={student}/>
        </Link>
    )
    )}
    
    
</div>
    )
        };

    
export default Students;