// For creating the PrivateRoute

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    return(
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('token') && user.type === "admin") {
                    return <Component {...props} />;
                } else {
                    return <Redirect to='/main' />;
                }
            }}
        />
    );
};

export default AdminRoute;