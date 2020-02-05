import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Student from "./Student";

// const dummyStudents =[
//     {
//         id: 1,
//         first_name: 'Mandi',
//         last_name: 'Haase',
//         grade: '3',
//         address: '111 Ever St., Alexandria, VA 00000',
//         img_url: '',
//         background: 'I have been learning programming for 2 months',
//         status: 'active',
//         age: '10',
//         insurance: false,
//         exp_date: '',
//         birth_certificate: true,
//         special_needs: 'no',
//         representative_name: '',
//         representative_contact: ''
//     },

//     {
//         id: 2,
//         first_name: 'Jon',
//         last_name: 'Haase',
//         grade: '4',
//         address: '222 Ever St., Alexandria, VA 00000',
//         img_url: '',
//         background: 'I have been learning programming for 3 months',
//         status: 'active',
//         age: '11',
//         insurance: false,
//         exp_date: '',
//         birth_certificate: true,
//         special_needs: 'no',
//         representative_name: '',
//         representative_contact: ''
//     }
// ]

const Students =() => {
    const [students, setStudents] =useState([]);
    // const [searchResults, setSearchResults] =useState([])


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
    




















        {/* {students.map(student => (
            <Link to={`/student/${student.id}`}>
        <Student data={student}/>
        </Link> */}
    
    
        {/* ))};
        <Route path={"/student/:id"} component={Student}/> */}
    
</div>
    )
        };

    
export default Students;