import React from "react";
import styled from "styled-components";

import issw from '../images/issw.png';

import { Navigation, LogoDiv, Logo, LogOutDiv, LogOut } from './Styles.js';


const Nav = () => {
    const handleSignout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("allStudents");
    }

    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log("User: ", user);

    return (
       <Navigation>         
           <LogoDiv>
               <Logo src={issw} alt="issw logo" />
           </LogoDiv>
           <LogOutDiv>
                <LogOut>Hello, {user.first_name} | <a href="/login" onClick={handleSignout}>Log Out</a></LogOut>
            </LogOutDiv>
       </Navigation>
       
    )
}

export default Nav;
