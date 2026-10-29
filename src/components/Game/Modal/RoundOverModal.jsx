import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Subtitle, Title } from '../../../styles/General.styled'
import { ModalHeader, ModalBody, ModalFooter } from '../../../styles/Game Interface/RoundOver.styled';
import { RestartButton, ContinueButton, SwitchButton } from '../ActionButtons.jsx';
import { GameContext } from '../../../contexts/GameContext.js';
import { ModalContext } from "../../../contexts/ModalContext.js"
import { SFXContext } from '../../../contexts/SoundEffectsContext.js'


export const RoundOverModal = () => {
    const navigate = useNavigate()
    const { resetBoard, switchTurns, gameState, roundComplete } = useContext(GameContext)
    const [showSwitch, setShowSwitch] = useState(false)
    const { handleModal } = useContext(ModalContext)
    const { clickSfx, restartGameSfx, menuHover1Sfx, menuHover2Sfx } = useContext(SFXContext)

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
                        <SwitchButton onClick={() => { handleModal(); switchTurns(); clickSfx() }} onMouseEnter={() => menuHover1Sfx()}>Switch Turns</SwitchButton>
                        <ContinueButton onClick={() => { handleModal(); clickSfx() }} onMouseEnter={() => menuHover2Sfx()}>No</ContinueButton>
                    </>
                ) : (
                    <>
                        <ContinueButton onClick={() => { setShowSwitch(true); clickSfx() }} onMouseEnter={() => menuHover1Sfx()}>Continue to Next Round?</ContinueButton>
                        <RestartButton onClick={() => { handleModal(); resetBoard(); restartGameSfx(); navigate("/") }} onMouseEnter={() => menuHover2Sfx()}>Restart!</RestartButton>
                    </>
                )}
            </ModalFooter>
        </div>
    )
}
