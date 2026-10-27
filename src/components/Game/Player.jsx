import React from 'react'
import { PlayerScoreBoard, PlayerAvatar } from '../../styles/Game Interface/ScoreBoard.styled'


export const Player = ({ player, playerTurn }) => {
    return (
        <PlayerScoreBoard playerTurn={playerTurn ?? false}>
            <PlayerAvatar src={player.avatar} alt={`${player.name} avatar`} />
            <div>{player.name} - {player.char}</div>
            <div>Pts: {player.score}</div>
        </PlayerScoreBoard>
    )
}

