import React, { useContext } from 'react'
import { Cell } from '../../styles/Game Interface/GameCell.styled.js'
import { GameContext } from '../../contexts/GameContext.js'
import { checkWinner } from '../../utils/GameUtils/index.js'

export const GameCell = ({ cell }) => {
    const { updateBoard, gameState } = useContext(GameContext)

    const cellCLickHandler = () => {
        const result = checkWinner(gameState.board)
        if (result) {
            updateBoard(cell)
        }
    }

    return (
        <Cell onClick={() => updateBoard(cell - 1)}>
            {cell}
        </Cell>
    )
}
