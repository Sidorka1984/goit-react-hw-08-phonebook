import React from 'react';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import operations from '../../redux/auth/auth-operation';
import { register } from '../../redux/auth/auth-operation';
import { Button, Container, Form, Title, Label } from "../LoginView/LoginView.styled";


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
        e.preventDefault();
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <Container>
            <Title>Register</Title>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Label>
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
                </Label>
                <Label>
                    <TextField
                        id="email"
                        label="Mail"
                        variant="outlined"
                        margin="dense"
                        type="email"
                        name="email"
                        placeholder="sidorka.olka@gmail.com"
                        value={email}
                        onChange={handleChange}
                    />
                </Label>
                <Label>
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        margin="dense"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="sidorskaya"
                        onChange={handleChange}
                        
                        />
                </Label>
                <Button type="submit"
                    disabled={!name || !email || !password}
                >
                    Register
                </Button>
            </Form>
        </Container>
    )
}
 
