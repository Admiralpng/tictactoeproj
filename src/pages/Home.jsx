import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeContainer } from '../styles/Home.styled.js'
import { Subtitle, Title } from '../styles/General.styled.js'
import { PlayButton } from '../components/Game/PlayButton.jsx'

export const Home = () => {
    const navigate = useNavigate()

    return (
        <HomeContainer>
            <Title>Tic Tac Toe!</Title>
            <Subtitle>Welcome to the game! You can play together with your friends!</Subtitle>
            <PlayButton onClick={() => navigate("/game-on")}>Play Now!</PlayButton>
        </HomeContainer>
    )
}
