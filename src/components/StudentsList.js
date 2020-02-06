import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Student from "./Student";
import styled from "styled-components";

const StudentDiv= styled.div`
background-color: blue;
`;

const  StudentCard=styled.div`
height: 200px:
width: 200px;
padding: 10px;
background-color: pink;
border-style: solid;
border-width: 3px;
border-color: black; 
border-radius:5px;
`;
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
<StudentDiv>
    <StudentCard>
    {students.map (student =>(
        <Link to= {`/student/${student.id}`}>
        <Student student={student}/>
        </Link>
     
    )
 
    )  
    }
      </StudentCard>
    
</StudentDiv>
    )
        };

    
export default Students;