import React from "react";
import LoginForm  from '../components/LoginForm'


interface LayoutProps {
    children: React.ReactNode;
 }


const AppLayout = ({ children}: LayoutProps) => {
    return (
        <div>
            <div>
                <LoginForm />

            </div>
            {children}
        </div>
    );
};

export default AppLayout;

