// For creating the PrivateRoute

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const WorkerRoute = ({ component: Component, ...rest }) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    return(
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('token') && user.type === "worker") {
                    return <Component {...props} />;
                } else {
                    return <Redirect to='/main' />;
                }
            }}
        />
    );
};

export default WorkerRoute;