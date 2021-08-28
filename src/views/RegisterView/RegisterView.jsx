import React from 'react';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/auth-operation';
import { Button, Container, Form, Title } from "../LoginView/LoginView.styled";

export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(operations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <Container>
            <Title>Sing up</Title>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    margin="dense"
                    size="medium"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
                <TextField
                    id="email"
                    label="Mail"
                    variant="outlined"
                    margin="dense"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />

                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    margin="dense"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <Button type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    )
}
 
