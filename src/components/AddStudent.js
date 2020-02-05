// Add a new student
import React from "react";
import styled from "styled-components";
;


const AddStudent = () => {

    return (
        <h1>Add New Student Here</h1>
        
    )
};


export default AddStudent;
//the following is the form.js from the team-builder assignment to use as a reference
// import React, { useState } from 'react';


// const Form = props => {
//     console.log('props are here', props);
//     const [member, setMember] = useState ({
//         name: '',
//         email: '',
//         role: '',
//     });

//     const handleChanges = event => {
//         console.log(member);

//         setMember({
//             ...member,
//             [event.target.name]: event.target.value
//         });
//     };
// const submitForm = event =>{
//     event.preventDefault();
//     props.addMember(member);
//     setMember({ name:'', email:'', role:''})
// };

// return (
//     <form onSubmit={submitform}>
//         <label htmlFor="name">Name</label>
//         <input id='name'
//                 name='name'
//                 type='text'
//                 onChange={handleChanges}
//                 placeholder='Enter Name'
//                 value={member.name} />
//         <label htmlFor="email">Email</label>
//         <input id='email'
//                 name='email'
//                 type='text'
//                 onChange={handleChanges}
//                 placeholder='Enter Email'
//                 value={member.email} />
//         <label htmlFor='role'>Role</label>
//         <input  id='role'
//                 name='role'
//                 type='text'
//                 onChange={handleChanges}
//                 placeholder='Enter Role'
//                 value={member.role} />
//         <button type='submit'>Add Member</button>

//     </form>
// );

// };

// export default Form;