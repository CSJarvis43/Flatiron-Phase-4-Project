import { Box, Button, Container, FormControl, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { passwordState, usernameState } from '../recoil/atoms';

function SignUp({ setUser }) {
    const [username, setUsername] = useRecoilState(usernameState)
    const [password, setPassword] = useRecoilState(passwordState)

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
        .then((r) => r.json())
        .then(setUser)
        .then(navigate('/'))
    }

    return (
        <Container maxWidth="false">
            <Grid container>
                <Grid item xs={12} align="center" justify="center">
                    <FormControl sx={{ m: 2 }}>
                        <Typography justifySelf={'center'}>
                            Sign Up!
                        </Typography>
                        <TextField
                            sx={{ m: 2 }}
                            required
                            id="username"
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            label="Username"
                        />
                        <TextField
                            sx={{ m: 2 }}
                            required
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                        />
                        <Button
                            sx={{ m: 2 }}
                            onClick={handleSubmit}
                            variant="contained"
                        >
                            Sign Up
                        </Button>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} align="center" justify="center">
                    <Button
                        variant='contained'
                        component={Link}
                        to="/login"
                        align="center"
                        justify="center"
                    >
                        Log In Instead
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default SignUp