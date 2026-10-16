import { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
    const [gameState, setGameState] = useState({
        board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        player1: {
            character: "X",
            name: "Player 1",
        },
        player2: {
            character: "O",
            name: "Player 2",
        },
        turn: "X"
    })

    const updateBoard = (index) => {
        const updatedBoard = [...gameState.board];
        updatedBoard[index] = gameState.turn;
        setGameState({ 
            ...gameState, 
            board: updatedBoard,
            turn: gameState.turn === "X" ? "O" : "X"
        });
    }

    return (
        <GameContext.Provider value={{ gameState, updateBoard }}>
            {props.children}
        </GameContext.Provider>
    )
}