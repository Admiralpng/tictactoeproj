import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeContainer } from '../styles/Home.styled.js'
import { Subtitle, Title } from '../styles/General.styled.js'
import { PlayButton } from '../components/Game/ActionButtons.jsx'
import { ModalContext } from '../contexts/ModalContext'
import { GameContext } from '../contexts/GameContext'
import { SelectAvatar } from '../components/Game/Modal/AvatarModal.jsx'

export const Home = () => {
    const navigate = useNavigate()
    const { handleModal } = useContext(ModalContext)
    const { gameState } = useContext(GameContext)

    const handlePFPSelector = () => {
        handleModal(<SelectAvatar onConfirm={() => { handleModal(); navigate("/game-on") }} />)
    }

    return (
        <HomeContainer>
            <Title>Tic Tac Toe!</Title>
            <Subtitle>Welcome to the game! You can play together with your friends!</Subtitle>
            <PlayButton onClick={handlePFPSelector}>Play Now!</PlayButton>
        </HomeContainer>
    )
}
