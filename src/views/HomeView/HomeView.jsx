import React from 'react';
import { Container, Title, Thumb } from "./HomeView.styled";
import imgWelcome from '../../images/pngwing.com.png'

const HomeView = () => (
    <Container>
        <Title>Welcome to the Phonebook</Title>
        <Thumb>
            <img src={imgWelcome} width="370" alt="Phonebook" />
        </Thumb>
        
    </Container>
)

export default HomeView;