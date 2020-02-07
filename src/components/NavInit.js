import React from "react";
import styled from "styled-components";

import issw from '../images/issw.png';

import { Navigation, LogoDiv, Logo, LogOutDiv, LogOut } from './Styles.js';


const NavInit = () => {
    return (
       <Navigation>         
           <LogoDiv>
               <Logo src={issw} alt="issw logo" />
           </LogoDiv>
           <LogOutDiv>
                <LogOut>Hello!</LogOut>
            </LogOutDiv>
       </Navigation>
       
    )
}

export default NavInit;
