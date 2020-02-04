import React, { useEffect, useState } from "react";



const dummyStudents = [
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
        representative_name: 'father',
        representative_contact: '1231231234'
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
        representative_name: 'mother',
        representative_contact: '1231231234'
    },
    {
        id: 3,
        first_name: 'Alex',
        last_name: 'Smith',
        grade: '4',
        address: '333 Ever St., Alexandria, VA 00000',
        img_url: '',
        background: 'I have been learning programming for 4 months',
        status: 'active',
        age: '11',
        insurance: false,
        exp_date: '',
        birth_certificate: true,
        special_needs: 'no',
        representative_name: 'mother',
        representative_contact: '1231231234'
    },
    {
        id: 4,
        first_name: 'Amber',
        last_name: 'Smith',
        grade: '4',
        address: '444 Ever St., Alexandria, VA 00000',
        img_url: '',
        background: 'I have been learning programming for 2 months',
        status: 'active',
        age: '11',
        insurance: false,
        exp_date: '',
        birth_certificate: true,
        special_needs: 'no',
        representative_name: 'mother',
        representative_contact: '1231231234'
    },
    {
        id: 5,
        first_name: 'Amy',
        last_name: 'Smith',
        grade: '4',
        address: '555 Ever St., Alexandria, VA 00000',
        img_url: '',
        background: 'I have been learning programming for 3 months',
        status: 'active',
        age: '12',
        insurance: false,
        exp_date: '',
        birth_certificate: true,
        special_needs: 'no',
        representative_name: 'mother',
        representative_contact: '1231231234'
    }
]

const Students = () => {
    // const [searchTerm, setSearchTerm] =useState("");
    // const [searchResults, setSearchResults] =useState([])

    // useEffect(() => {
    //     const results = dummyStudents.filter(student => {
    //         student.last_name.toLowerCase().includes(searchTerm.toLowerCase() || student.first_name.toLowerCase().includes(searchTerm.toLowerCase()));
    //     })
    //     setSearchResults(results);
    // }, [searchTerm]);

//     useEffect(()=> {
//         const results = dummyStudents.filter(dummyStudent => {
//             dummyStudent.toLowerCase().includes(searchTerm.toLowerCase())   
// );
// setSearchResults(results);
//     }, [searchTerm]);
// }

    // const handleChange = event => {
    //     console.log(event.target.value);
    //     setSearchTerm(event.target.value);
    // };

    // const handleSubmit = e => {
    //     console.log("SearchTerm: ", searchTerm);
    // }

    return (
        <div className ="students-container">
            <h1>Student List</h1>
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor = "name"> Search:</label>
                <input 
                    id="name"
                    type="text"
                    name="searchTerm"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button>Search</button>
            </form> */}

            <div className="student-list">
                {/* {searchResults.map(dummyStudent => (
                    <div>
                        <h2>{dummyStudent.name}</h2>
                        <h3>{dummyStudent.grade} | {dummyStudent.age}</h3>
                        <h3>{dummyStudent.status}</h3>
                    </div>
                ))} */}
                {dummyStudents.map(student => (
                    <div className="student-div">
                        {/* <h2>{student.first_name} {student.last_name}</h2>
                        <h3>{student.grade} | {student.age}</h3>
                        <h3>{student.status}</h3> */}
                        <Student key={student.id} student={student} />
                    </div>
                ))}
            </div>
        </div>
    )
};
    
        export default Students;