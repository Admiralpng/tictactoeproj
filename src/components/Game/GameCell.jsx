import React, { useContext } from 'react'
import { Cell, DefaultOutline } from '../../styles/Game Interface/GameCell.styled.js'
import { GameContext } from '../../contexts/GameContext.js'
import { checkWinner } from "../../utils/GameUtils/indexWinLogic.js"
import { ModalContext } from '../../contexts/ModalContext.js'
import { RoundOverModal } from './Modal/RoundOverModal.jsx'

export const GameCell = ({ cell, index }) => {
    const { updateBoard, gameState, roundComplete } = useContext(GameContext)
    const { handleModal } = useContext(ModalContext)

    const cellCLickHandler = () => {
        if (cell === "X" || cell === "O") return
        const updatedBoard = [...gameState.board];
        updatedBoard[index] = gameState.turn;
        updateBoard(index)

        const result = checkWinner(updatedBoard)

        if (result) {
            roundComplete(result === "draw" ? "draw" : result)
            handleModal(<RoundOverModal />)
        };
    }

    const turnPlayed = cell === "X" || cell === "O"

    return (
        <Cell onClick={cellCLickHandler}>
            {turnPlayed ? (
                <span>{cell}</span>
            ) : (
                <DefaultOutline>{gameState.turn}</DefaultOutline>
            )}
        </Cell>
    )
}
