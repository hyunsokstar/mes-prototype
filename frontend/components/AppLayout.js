// import React from "react";
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import LoginForm  from '../components/LoginForm'


const AppLayout = ({ children }) => {


    return (
        <div>
            <div>
                <LoginForm />
            </div>
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;