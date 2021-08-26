import React from 'react';
import { Button } from '../../views/LoginView/LoginView.styled';
import { Container, Title } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operation';
import { ImUserTie } from 'react-icons/im';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(getUsername);

    return (
        <Container>
            <ImUserTie size="30" />
            <Title>
                <span>Welcome {name}</span>
            </Title>
            <Button
                type="submit"
                onClick={() => dispatch(logOut())}>
                Log out
            </Button>
        </Container>
    )

};