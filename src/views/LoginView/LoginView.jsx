import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Container, Form, Title, Label} from "./LoginView.styled";
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
                <Label>
                    <TextField
                        id="email"
                        label="Email Address"
                        variant="outlined"
                        margin="normal"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="your_name@gmail.com"
                        onChange={handleChange}                        
                        />
                </Label>
                <Label>
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="password"
                        onChange={handleChange}                        
                        />
                </Label>
                <Button type="submit"
                    disabled={!email || !password}
                >
                    Sign In
                </Button>

            </Form>
        </Container>
    )

}