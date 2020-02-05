// // Individual student information (edit and delete will live here too)
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';
import styled from "styled-components"

const StudentCard = styled.div`
padding: 5px;
background-color: yellow;
`;


const Student =  props => {
    console.log("student card props",props);



    return (
        <div>
{/* {props.students.map(student =>( */}
    <StudentCard>
        <h2>{props.student.first_name}</h2>
        <h2>{props.student.last_name}</h2>
        <p></p>
    </StudentCard>


        
        </div>






        
        // <div>
        //     {props.student.map(student =>(
        //         <div key={student.id}>
        //         <h2>{student.first_name}</h2>
        //         </div>
        //     ))}
        //         <h1>{props.data.first_name}</h1>
        //         <h1>{props.data.last_name}</h1>

        //         {/* <h2>{first_name}</h2>
        //         <h2>{last_name}</h2>
        //         <p>grade: {grade}</p>
        //         <p>age: {age}</p>
        //         <p>status:{status}</p> */}
            
        // </div>
        
    )
    
    }

export default Student;