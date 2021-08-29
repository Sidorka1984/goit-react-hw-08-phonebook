import React from 'react';
import { Container, Title } from "./HomeView.styled";
import imgWelcome from '../../images/pngwing.com.png'

const HomeView = () => (
    <Container>
        <Title>Welcome to the Phonebook</Title>
        <img src={imgWelcome} width="500" alt="Phonebook" />
    </Container>
)

export default HomeView;