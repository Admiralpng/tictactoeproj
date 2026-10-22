import React, { useContext } from 'react'
import { Container } from '../styles/General.styled.js'
import { GameBoard } from '../styles/Game Interface/GameBoard.styled.js'
import { GameCell } from '../components/Game/GameCell.jsx'
import { GameContext } from '../contexts/GameContext.js'
import { Player } from '../components/Game/Player.jsx'

export const Game = () => {
    const { gameState } = useContext(GameContext)

    return (
        <Container>
            <Player player={gameState.player1} playerTurn={gameState.player1.char === gameState.turn} />
            <GameBoard>
                {gameState.board.map((cell, index) => (
                    <GameCell key={index} cell={cell} index={index} />
                ))}
            </GameBoard>
            <Player player={gameState.player2} playerTurn={gameState.player2.char === gameState.turn} />
        </Container>
    )
}
