// // Individual student information (edit and delete will live here too)
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';

const Student =  props => {
    console.log("first name",props)
    // const [student, setStudent] = useState();
    // let {id} = useParams();

    //  useEffect(() =>{

    //     axiosWithAuth
    //     .get(`https://issw.herokuapp.com/api/students/${id}`)
        
    //     .then(response => {
    //         console.log("Here is the response",response)
    //         setStudent(response.data);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });
    // },[id]);



// const { first_name, last_name, grade, age, status } = student; 
//     console.log("In Student: ", props.student);

    console.log("In Student: ", props);

    return (
        
        <div className="save-wrapper">
            <div className="student-card">
                <h1>{props.first_name}</h1>

                {/* <h2>{first_name}</h2>
                <h2>{last_name}</h2>
                <p>grade: {grade}</p>
                <p>age: {age}</p>
                <p>status:{status}</p> */}
            </div>
        </div> 
    )
    
    }

export default Student;