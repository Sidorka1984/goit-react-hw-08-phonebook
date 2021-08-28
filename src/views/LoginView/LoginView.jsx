import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Form, Title } from "./LoginView.styled";
import { TextField } from '@material-ui/core';
import operations from '../../redux/auth/auth-operation';

export default function LoginView() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(operations.logIn({ email, password }))
        setEmail('')
        setPassword('')
    }

    return (
        <Container>
            <Title>Sign in</Title>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <TextField
                    id="email"
                    label="Email Address"
                    variant="outlined"
                    margin="normal"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <Button type="submit">
                    Sign In
                </Button>

            </Form>
        </Container>
    )

}