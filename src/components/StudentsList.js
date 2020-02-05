import React, { useEffect, useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

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
            console.log(response.data);
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
        
        {students.map(student => (
        <div>
        <h2>{student.first_name}</h2>
        <h3>{student.grade} | {student.age}</h3>
        <h3>{student.status}</h3>
        </div>

        ))};
        
    
</div>
    )
        };

    
export default Students;