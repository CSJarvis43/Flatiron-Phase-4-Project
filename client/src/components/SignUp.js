import React from 'react'
import { useRecoilState } from 'recoil';
import { passwordConfirmationState, passwordState, usernameState } from '../recoil/atoms';

function SignUp({ setUser }) {
    const [username, setUsername] = useRecoilState(usernameState)
    const [password, setPassword] = useRecoilState(passwordState)

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
        .then(setUser);
    }

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
        </form>
    );
}

export default SignUp