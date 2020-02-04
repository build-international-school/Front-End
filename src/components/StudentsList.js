import React, { useEffect, useState } from "react";
// import axios from "axios";

const dummyStudents =[
    {
        id: 1,
        first_name: 'Mandi',
        last_name: 'Haase',
        grade: '3',
        address: '111 Ever St., Alexandria, VA 00000',
        img_url: '',
        background: 'I have been learning programming for 2 months',
        status: 'active',
        age: '10',
        insurance: false,
        exp_date: '',
        birth_certificate: true,
        special_needs: 'no',
        representative_name: '',
        representative_contact: ''
    },

    {
        id: 2,
        first_name: 'Jon',
        last_name: 'Haase',
        grade: '4',
        address: '222 Ever St., Alexandria, VA 00000',
        img_url: '',
        background: 'I have been learning programming for 3 months',
        status: 'active',
        age: '11',
        insurance: false,
        exp_date: '',
        birth_certificate: true,
        special_needs: 'no',
        representative_name: '',
        representative_contact: ''
    }
]
export default Students(){
    const [data, setData] =useState("");
    const [searchResults, setSearchResults] =useState([])
}

useEffect(()=> {
    const results = dummyStudents.filter(dummyStudent =>
        dummyStudent.toLowerCase().inclues(searchTerm.toLowerCase())   
);
setSearchResults(results);
    }, [searchTerm]);

    const handleChange =event => {
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    };
    return (
        <div className ="App">
            <form>
            <label htmlFor = "name"> Search:</label>
            <input 
                id="name"
                type="text"
                name="textfield"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            </form>
<div className="student-list">
        <ul>
        {searchResults.map(dummyStudent =>(
            <li key={dummyStudent}>{dummyStudent}}</li>

        ))}
        </ul>
    </div>
</div>
);
    
    

