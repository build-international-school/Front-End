// For styled components
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// MainPage
export const MainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: 2%;
`;

export const InfoBox = styled.div`
    width: 80%;
    margin: 1%;
`;

export const InfoTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 4%;
`;

export const MainOrg = styled.div`
    width: 25%;
`;

export const MainVisit = styled.div`
    width: 50%;
    padding: 1%;
    border: 3px outset grey;
    box-shadow: 5px 8px 5px black;
`;

export const Table = styled.table`
    margin: 0 auto 4%;
    width: 100%;
`;

export const TableRow = styled.tr`
    font-size: 1.25rem;
    line-height: 2;
`;

export const TableHeader = styled.th`
    font-size: 1.25rem;
    line-height: 2;
    border-bottom: 1px solid grey;
`;

export const MainTotal = styled.div`
    width: 10%;
    padding: 1%;
    border: 3px outset grey;
    box-shadow: 5px 8px 5px black;
`;

export const AllStudents = styled.div`
    margin: 0 auto;
    height: 300px;
    width: 100%;
    border: 3px outset grey;
    box-shadow: 5px 8px 5px black; 
    overflow-y: scroll;
`;

// Visits
export const MainVisitDiv = styled.div`
    display: flex;
    align-items: center;
    width: 95%;
    margin: 2%;
`;

export const VisitDiv = styled.div`
    margin: 0 auto;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const VisitForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-size: 1.15rem;
    text-align: left;
    font-weight: bold;
`;

export const Select = styled.select`
    margin: 5% 10%;
    width: 50%;
    font-family: 'Crimson Text', serif;
    font-size: 1.15rem;
    line-height: 1.25;
    border: 3px outset #073b66;
    border-radius: 5px;
`;

export const Input = styled.input`
    margin: 5% 10%;
    width: 50%;
    text-align: center;
    font-family: 'Crimson Text', serif;
    font-size: 1.15rem;
    line-height: 1.25;
    border: 3px outset #073b66;
    border-radius: 5px;
`;

export const Button = styled.button`
    margin: 1% auto;
    width: 25%;
    font-family: 'Crimson Text', serif;
    font-size: 1.15rem;
    line-height: 1.25;
    border-radius: 5px;
    border: 3px outset #073b66;
    background: #ec4c4c;
    color: white;
    box-shadow: 3px 5px 5px black;
`;

// StudentsList2
export const StudentsDiv = styled.div`
    margin: 0 auto;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const AllList = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 80%;
    padding: 2%;
    border: 3px outset grey;
    box-shadow: 5px 8px 5px black;
`;

export const StudentCard = styled.div`
    margin: 1%;
    width: 25%;
    border: 3px outset #073b66;
    background: #ec4c4c;
    color: white;
    box-shadow: 3px 5px 5px black;
`;

// Student2 
export const MainStudentDiv = styled.div`
    display: flex;
    align-items: center;
    width: 95%;
    margin: 2%;
`;

export const StudentDiv = styled.div`
    margin: 0 auto;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

// EditStudent
export const MainEditDiv = styled.div`
    display: flex;
    align-items: flex-start;
    width: 95%;
    margin: 2%;
`;

export const EditDiv = styled.div`
    margin: 0 auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const EditInput = styled.input`
    margin: 5% 10%;
    width: 25%;
    text-align: center;
    font-family: 'Crimson Text', serif;
    font-size: 1.15rem;
    line-height: 1.25;
    border: 3px outset #073b66;
    border-radius: 5px;
`;

export const EditTextarea = styled.textarea`
margin: 5% 10%;
width: 40%;
text-align: center;
font-family: 'Crimson Text', serif;
font-size: 1.15rem;
line-height: 1.25;
border: 3px outset #073b66;
border-radius: 5px;
`;


// SideBar
export const Side = styled.div`
    border: 1px solid grey;
    box-shadow: 3px 5px 5px black;
`;

// Nav
export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
    background-color: #e6e6e6;
    box-shadow: 0 5px 5px black;
`;

export const LogoDiv = styled.div`
    width: 25%;
`;

export const Logo = styled.img`
    height: 4rem;
`;

export const LogOutDiv = styled.div`
    width: 25%;
    margin-right: -1%;
`;

export const LogOut = styled.p`
    font-size: 1.5rem;
`;
