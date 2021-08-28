import React from 'react';
import { Button } from '../../views/LoginView/LoginView.styled';
import { Container, Title } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import operations from '../../redux/auth/auth-operation';
import { ImUserTie } from 'react-icons/im';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    return (
        <Container>
            <ImUserTie size="30" />
            <Title>
                <span>Welcome {name}</span>
            </Title>
            <Button
                type="submit"
                onClick={() => dispatch(operations.logOut())}>
                Log out
            </Button>
        </Container>
    )

};