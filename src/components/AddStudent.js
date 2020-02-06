
import React, { useState } from 'react';

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
            <label htmlFor="name">First Name</label>
            <input  id='name'
                    name='first_name'
                    type='text'
                    onChange={handleChanges}
                    placeholder='Enter First Name'
                    value={newStudent.first_name}/>
            <label htmlFor="name">Last Name</label>
            <input id='name'
                    name='last_name'
                    type='text'
                    onChange={handleChanges}
                    placeholder='Enter Last Name'
                    value={newStudent.last_name}/>
            <label htmlFor="name">Last Name</label>
            <input id='age'
                    name='age'
                    type='text'
                    onChange={handleChanges}
                    placeholder='Enter Age'
                    value={newStudent.age}/>
            <button type='submit'>Add Student</button>
        </form>
    );
};

export default AddStudent;