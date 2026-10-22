import React from 'react'
import { PlayerScoreBoard } from '../../styles/Game Interface/ScoreBoard.styled'

export const Player = ({ player, playerTurn }) => {
    return (
        <PlayerScoreBoard playerTurn={playerTurn ?? false}>
            <div>{player.name} - {player.char}</div>
            <div>Pts: {player.score}</div>
        </PlayerScoreBoard>
    )
}
