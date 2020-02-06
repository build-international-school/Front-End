
import React, { useState } from 'react';
import styled from "styled-components";

const styledButton = styled.button`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px; solid palevioletred;
border-radius: 3px;
`;

const AddStudent = props =>{
    console.log('props from Form', props);
    const [newStudent, setNewStudent] = useState ({
        first_name: '',
        last_name: '',
        age:'',
    });

    const handleChanges = event => {
        console.log(newStudent);

        setNewStudent({
            ...newStudent,
            [event.target.first_name]:event.target.value
        });;
    };
    const submitForm = event =>{
        event.preventDefault();
        props.addStudent(newStudent);
        setNewStudent({first_name:'', last_name:'', age:''})
    };
    return(
        <form onSubmit={submitForm}>
            <label htmlFor="fnameInput">First Name</label>
            <input  id='fnameInput'
                    name='first_name'
                    type='text'
                    onChange={handleChanges}
                    placeholder='Enter First Name'
                    value={newStudent.first_name}/>
            <label htmlFor="lnameInput">Last Name</label>
            <input id='lnameInput'
                    name='last_name'
                    type='text'
                    onChange={handleChanges}
                    placeholder='Enter Last Name'
                    value={newStudent.last_name}/>
            <label htmlFor="age">Age</label>
            <input id='age'
                    name='age'
                    type='text'
                    onChange={handleChanges}
                    placeholder='Enter Age'
                    value={newStudent.age}/>
            <styledButton type='submit'>Add Student</styledButton>
        </form>
    );
};

export default AddStudent;

function App(){
    const [newStudent, setNewStudent] =useState([])

const addStudent = person => {
const newMember ={
    id:person.id,
    firstname: person.first_name,
    lastname: person.last_name,
    age: person.age,
};
setNewStudent([...newStudent, newMember])
};

return (
    <div>
        <h1>List of Students</h1>
        <AddStudent addStudent={addStudent}/>

        
    </div>
);
}