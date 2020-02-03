// Main home page routed to from Login

import React from 'react';

const MainPage = props => {

    const handleSignout = () => {
        localStorage.clear();
    }

    return(
        
        <div>
            <a href="/login" onClick={handleSignout}>Log Out</a>
            This is the Main Page
        </div>
    )
}

export default MainPage;