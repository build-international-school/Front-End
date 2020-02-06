
import React, { useState } from 'react';
import styled from "styled-components";

// const styledButton = styled.button`
// color: palevioletred;
// font-size: 1em;
// margin: 1em;
// padding: 0.25em 1em;
// border: 2px; solid palevioletred;
// border-radius: 3px;
// `;

const AddStudent = person =>{
    console.log(person);


   
    
    const [newStudent, setNewStudent] = useState ({
        first_name: '',
        last_name: '',
        grade:'',
        address:'',
        background:'',
        status:'',
        age:'',
        insurance:'',
        special_needs:'',
        representative_name:'',
        representative_contact:'',


    });
console.log("New Student", newStudent)

const onInputChange = event =>{
    setNewStudent({
        ...newStudent,
        [event.target.name]:event.target.value,
    });
}
    const handleChanges = event => {
        
        console.log(newStudent);

        setNewStudent
            (event.target.value)
        ;
    };
    const submitForm = event =>{
        event.preventDefault();
        // props.addStudent(newStudent);
        setNewStudent({first_name:'', last_name:'', age:''})
    };
    return(
        <form onSubmit={submitForm}>
            <label htmlFor="fnameInput">First Name</label>
            <input  id='fnameInput'
                    name='first_name'
                    type='text'
                    onChange={onInputChange}
                    placeholder='Enter First Name'
                    value={newStudent.first_name}/>
            <label htmlFor="lnameInput">Last Name</label>
            <input id='lnameInput'
                    name='last_name'
                    type='text'
                    onChange={onInputChange}
                    placeholder='Enter Last Name'
                    value={newStudent.last_name}/>
            <label htmlFor="age">Age</label>
            <input id='age'
                    name='age'
                    type='text'
                    onChange={onInputChange}
                    placeholder='Enter Age'
                    value={newStudent.age}/>
            {/* <label htmlFor="grade">Grade</label>
            <input id='grade'
                    name='grade'
                    type='text'
                    onChange={onInputChange}
                    placeholder='Enter Grade'
                    value={newStudent.grade}/> */}
            {/* <label htmlFor="address">Address</label>
            <input id='address'
                    name='address'
                    type='text'
                    onChange={onInputChange}
                    placeholder='Enter Address'
                    value={newStudent.address}/> */}
            {/* <label htmlFor="background">Background</label>
            <input id='background'
                    name='background'
                    type='text'
                    onChange={onInputChange}
                    placeholder='Enter Background'
                    value={newStudent.background}/> */}
            {/* <label htmlFor="repname">Representative Name</label>
            <input id='representative_name'
                    name='representative_name'
                    type='text'
                    onChange={onInputChange}
                    placeholder='Enter Representative Name'
                    value={newStudent.representative_name}/> */}
            <label htmlFor="representative_contact">Representative Phone Number</label>
            <input id='representative_contact'
                    name='representative_contact'
                    type='tel'
                    onChange={onInputChange}
                    placeholder='Enter Representative Phone Number'
                    value={newStudent.representative_contact}/>
            <label htmlFor='statusSelect'>Status</label>
            <select id='statusSelect' name='studentStatus'>
                <option value='1'>Active</option>
                <option value='2'>Inactive</option>
            </select>
            <input type='checkbox' id='special' name='specialNeeds' />Special Needs<br />
            <input type='checkbox' id='insurance' name='insured' />Insured<br />
            
            <button type='submit'>Add Student</button>
        </form>
    );
};

export default AddStudent;
