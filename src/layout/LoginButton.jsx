
import React from 'react'
import Button from "react-bootstrap/Button";
import {login } from "../actions/authAction"

const LoginButton = () => {
   
    return (
        <>
            <Button variant="success" className="m-2" onClick={login}>Login</Button>
        </>
    )
}

export default LoginButton
