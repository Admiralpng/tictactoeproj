import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeContainer } from '../styles/Home.styled.js'
import { Subtitle, Title } from '../styles/General.styled.js'
import { PlayButton } from '../components/Game/ActionButtons.jsx'
import { SelectAvatar } from '../components/Game/Modal/AvatarModal.jsx'
import { ModalContext } from '../contexts/ModalContext'
import { GameContext } from '../contexts/GameContext'
import { SFXContext } from '../contexts/SoundEffectsContext.js'

export const Home = () => {
    const navigate = useNavigate()
    const { handleModal } = useContext(ModalContext)
    const { gameState } = useContext(GameContext)
    const { hoverSfx, clickSfx } = useContext(SFXContext)

    const handlePfpSelector = () => {
        clickSfx()
        handleModal(<SelectAvatar onConfirm={() => { handleModal(); navigate("/game-on"); clickSfx() }} />)
    }

    return (
        <HomeContainer>
            <Title>Tic Tac Toe!</Title>
            <Subtitle>Welcome to the game! You can play together with your friends!</Subtitle>
            <PlayButton onClick={handlePfpSelector} onMouseEnter={() => hoverSfx()}>Play Now!</PlayButton>
        </HomeContainer>
    )
}
