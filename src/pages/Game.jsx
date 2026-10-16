import React, { useContext } from 'react'
import { Container } from '../styles/General.styled.js'
import { GameBoard } from '../styles/Game Interface/GameBoard.styled.js'
import { GameCell } from '../components/Game/GameCell.jsx'
import { GameContext } from '../contexts/GameContext.js'

export const Game = () => {
    const { gameState } = useContext(GameContext)

    return (
        <Container>
            <GameBoard>
                {gameState.board.map((cell, index) => (
                    <GameCell key={index} cell={cell} />
                ))}
            </GameBoard>
        </Container>
    )
}
