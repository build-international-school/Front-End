import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams } from 'react-router-dom';


const StudentDetails = (props)=>{

const [singleStudent, setSingleStudent] = useState({});

const {id} = useParams();

useEffect(()=> {
    
   
    const getSingleStudent =() =>{
        axiosWithAuth()
         .get(`https://issw.herokuapp.com/api/students/${id}`)
         .then(response =>{
             console.log("This is from the axios call from StudentDetail",response.data);
             setSingleStudent(response.data);
         })
         .catch(error =>{
             console.error("Server Error", error);
         });
    }
    getSingleStudent();
     }, []);



return (
    <div>
        <h1>Student Information</h1>
        <h2>Full Name: {singleStudent.first_name} {singleStudent.last_name}</h2>
        <p>Grade: {singleStudent.grade}</p>
        <p>Address: {singleStudent.address}</p>
        <p>Background: {singleStudent.background}</p>
        <p>Status: {singleStudent.status}</p>
        <p>Age: {singleStudent.age}</p>
        <p>Insurance: {singleStudent.insurance}</p>
        <p>Special Needs: {singleStudent.special_needs}</p>
        <p>Representative Name: {singleStudent.representative_name}</p>
        <p>Representative Contact: {singleStudent.representative_contact}</p>
        <p>Administrative ID: {singleStudent.admin_id}</p>
    </div>
);

};

export default StudentDetails;
