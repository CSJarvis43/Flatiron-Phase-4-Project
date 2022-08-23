import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { passwordState, usernameState } from '../recoil/atoms';

function Login({setUser}) {

    const [username, setUsername] = useRecoilState(usernameState)
    const [password, setPassword] = useRecoilState(passwordState)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        const userObj = {
            username: username,
            password: password
        }
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userObj),
        })
        .then((r) => r.json())
        .then((user) => {
            setUser(user)
            console.log(user)
            navigate('/')
        })
    }


  return (
    <Container maxWidth="false">
        <Typography>
            YO
        </Typography>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                autoComplete="off"
                alue={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
        <Button
            variant='contained'
            component={Link}
            to="/signup"
        >
            Signup
        </Button>
    </Container>
  )
}

export default Login