import React, { useContext, useState } from 'react'
import { Subtitle, Title } from '../../../styles/General.styled'
import { ModalHeader, ModalBody, ModalFooter } from '../../../styles/Game Interface/RoundOver.styled';
import { RestartButton, ContinueButton, SwitchButton } from '../ActionButtons.jsx';
import { GameContext } from '../../../contexts/GameContext.js';
import { ModalContext } from "../../../contexts/ModalContext.js"

export const RoundOverModal = () => {
    const { resetBoard, switchTurns, gameState, roundComplete } = useContext(GameContext)
    const [showSwitch, setShowSwitch] = useState(false)
    const { handleModal } = useContext(ModalContext)

    return (
        <div className="round-over-modal">
            <ModalHeader>
                <Title className="title">
                    Round Over!
                </Title>
            </ModalHeader>
            <ModalBody>
                <Subtitle className="scoreboard">
                    {gameState.player1.name}: {gameState.player1.score} pts
                </Subtitle>
                <Subtitle className="scoreboard">
                    {gameState.player2.name}: {gameState.player2.score} pts
                </Subtitle>
                <Subtitle className='victor'>
                    {gameState.result === "draw" ? "Round-Drawn"
                        : `${gameState.result === "victor1" ? gameState.player1.name : gameState.player2.name} won this round!`
                    }
                </Subtitle>
            </ModalBody>
            <ModalFooter>
                {showSwitch ? (
                    <>
                        <SwitchButton onClick={() => { handleModal(); switchTurns() }}>Switch Turns</SwitchButton>
                        <ContinueButton onClick={() => handleModal()}>No</ContinueButton>
                    </>
                ) : (
                    <>
                        <ContinueButton onClick={() => setShowSwitch(true)}>Continue to Next Round?</ContinueButton>
                        <RestartButton onClick={() => { handleModal(); resetBoard() }}>Restart!</RestartButton>
                    </>
                )}
            </ModalFooter>
        </div>
    )
}
