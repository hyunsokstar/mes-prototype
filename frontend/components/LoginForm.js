import React, { useState } from "react";
import styled from 'styled-components';


const LoginBar = styled.h1`
    display: flex;
    justify-content: flex-end;
`;

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleClick = () => {
        try {
            // login({ email, password });
            alert("로그인 버튼 클릭")
        } catch (e) {
            alert("Failed to login");
            setEmail("");
            setPassword("");
        }
    };

    return (
        <div>
            <LoginBar>
                <input
                    value={email}
                    onChange={({ target: { value } }) => setEmail(value)}
                    type="text"
                    placeholder="email"
                />
                <input
                    value={password}
                    onChange={({ target: { value } }) => setPassword(value)}
                    type="password"
                    placeholder="password"
                />
                <button onClick={handleClick}>Login</button>
            </LoginBar>
        </div>
    )
}

export default LoginForm