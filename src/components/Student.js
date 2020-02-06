// // Individual student information (edit and delete will live here too)
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

const StudentCard = styled.div`
height: 200px:
width: 200px;
padding: 10px;
background-color: pink;
border-style: solid;
border-width: 3px;
border-color: black; 
border-radius:5px;

`;


const Student =  props => {
    console.log("student card props",props);



    return (
        <div>
{/* {props.students.map(student =>( */}
    <StudentCard>
        <h2>{props.student.first_name}</h2>
        <h2>{props.student.last_name}</h2>
        
    </StudentCard>


        
        </div>





        
    )
    
    }

export default Student;