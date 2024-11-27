import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
    const [password,setPassword] = useState('')
    const [username,setUsername] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password})
        
    }
    return (
        <>
        <h2>Profile</h2>
        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />{" "}
        <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login;