import { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
    const [gameState, setGameState] = useState({
        board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        player1: {
            char: "X",
            name: "Player 1",
            score: 0
        },
        player2: {
            char: "O",
            name: "Player 2",
            score: 0
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

    const resetBoard = () => {
        setGameState({
            ...gameState,
            board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            player1: {
                char: "X",
                name: "Player 1",
                score: 0,
            },
            player2: {
                char: "O",
                name: "Player 2",
                score: 0,
            },
            turn: "X"
        })
    }

    const roundComplete = (result) => {
        if(gameState.turn === gameState.player1.char && result !== "draw"){
            setGameState({
                ...gameState,
                board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                player1: {
                    char: "X",
                    name: "Player 1",
                    score: gameState.player1.score+1
                },
                turn: "X"
            })
        }
        else if(gameState.turn === gameState.player2.char && result !== "draw"){
            setGameState({
                ...gameState,
                board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                player2: {
                    char: "O",
                    name: "Player 2",
                    score: gameState.player2.score+1
                },
                turn: "X"
            })
        }
        // Draw Con
        else {
            setGameState((prevGameState) => ({
            ...prevGameState,
            board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            player1: {
                ...prevGameState.player1,
                score: prevGameState.player1.score + 0.5
            },
            player2: {
                ...prevGameState.player2,
                score: prevGameState.player2.score + 0.5
            },
            turn: "X"
        }))
        }
    }

    const switchTurns = () => {
        const toggleChoice = (char) => (char === "X" ? "O" : "X");
        setGameState((prevGameState) => ({
            ...prevGameState,
            player1: {
                ...prevGameState.player1,
                char: toggleChoice(prevGameState.player1.char),
                score: prevGameState.player2.score,
            },
            player2: {
                ...prevGameState.player2,
                char: toggleChoice(prevGameState.player2.char),
                score: prevGameState.player2.score
            },
            turn: "X"
        }))
    }

    return (
        <GameContext.Provider value={{ gameState, updateBoard, resetBoard, roundComplete, switchTurns}}>
            {props.children}
        </GameContext.Provider>
    )
}