import { useCallback, useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import axios from "axios";
import api from "../utils/api"

type Props = {}

const LoginBar = styled.h1`
    display: flex;
    justify-content: flex-end;
`;


function LoginForm({ }: Props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleClick = () => {
    //     try {
    //         alert("로그인 버튼 클릭")
    //     } catch (e) {
    //         alert("Failed to login");
    //         setEmail("");
    //         setPassword("");
    //     }
    // };

    const handleClick = useCallback(async () => {
        try {
            const response = await axios.post(
                `${api.cats}/login`,
                { email, password },
                { withCredentials: true }
            );

            console.log("response.data : ", response.data);

            const getResponse = await axios.get(`${api.cats}`, {
                withCredentials: true,
                headers: {
                    Authorization: "Bearer " + response.data.data.token,
                },
            });
            console.log("getResponse : ", getResponse);



        } catch (error: any) {
            if (error.response) {
                console.log(error.response);
                alert(error.response.data.message);
            } else {
                alert(error.message);
            }
        }
    }, [email, password]);


    return (
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
        </LoginBar>)
}

export default LoginForm