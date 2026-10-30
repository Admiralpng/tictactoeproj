import React, { useContext } from 'react'
import { Cell, DefaultOutline } from '../../styles/Game Interface/GameCell.styled.js'
import { GameContext } from '../../contexts/GameContext.js'
import { ModalContext } from '../../contexts/ModalContext.js'
import { SFXContext } from '../../contexts/SoundEffectsContext.js'
import { checkWinner } from "../../utils/GameUtils/indexWinLogic.js"
import { RoundOverModal } from './Modal/RoundOverModal.jsx'

export const GameCell = ({ cell, index }) => {
    const { updateBoard, gameState, roundComplete } = useContext(GameContext)
    const { handleModal } = useContext(ModalContext);
    const { hoverSfx, clickSfx, roundUpSfx, drawSfx } = useContext(SFXContext)

    const cellCLickHandler = () => {
        if (cell === "X" || cell === "O") return
        const updatedBoard = [...gameState.board];
        updatedBoard[index] = gameState.turn;
        updateBoard(index)
        clickSfx();

        const result = checkWinner(updatedBoard)

        if (result) {
            roundComplete(result === "draw" ? "draw" : result)
            if (result === "draw") {
                drawSfx();
            } else {
                roundUpSfx();
            }
            handleModal(<RoundOverModal />);
        };
    }

    const turnPlayed = cell === "X" || cell === "O"

    return (
        <Cell onClick={cellCLickHandler} onMouseEnter={() => hoverSfx()}>
            {turnPlayed ? (
                <span>{cell}</span>
            ) : (
                <DefaultOutline>{gameState.turn}</DefaultOutline>
            )}
        </Cell>
    )
}
