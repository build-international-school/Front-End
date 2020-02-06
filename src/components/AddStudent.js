
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
    const submitFOrm = event =>{
        event.preventDefault();
        props.
    }
}

export default AddStudent;