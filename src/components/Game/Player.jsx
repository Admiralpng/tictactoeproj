import React from 'react'
import { PlayerScoreBoard, PlayerAvatar } from '../../styles/Game Interface/ScoreBoard.styled'


export const Player = ({ player, playerTurn }) => {
    return (
        <PlayerScoreBoard playerTurn={playerTurn ?? false}>
            <PlayerAvatar src={player.avatar} alt={`${player.name} Avatar`} />
            <div>{player.name.toUpperCase()} - {player.char}</div>
            <div>Score: {player.score}</div>
        </PlayerScoreBoard>
    )
}

