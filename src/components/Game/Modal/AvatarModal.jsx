import React, { useContext, useState } from 'react'
import { ModalHeader, ModalBody, ModalFooter } from '../../../styles/Game Interface/RoundOver.styled'
import { Title, Subtitle } from '../../../styles/General.styled'
import { GameContext } from '../../../contexts/GameContext'
import { ModalContext } from '../../../contexts/ModalContext'
import { PlayButton, RestartButton } from '../ActionButtons'
import { PlayerAvatar } from '../../../styles/Game Interface/ScoreBoard.styled'
import avatarp1 from '../../../assets/Avatars/avatarp1.jpg'
import avatarp1alt from '../../../assets/Avatars/avatarp1alt.jpg'
import avatarp2 from '../../../assets/Avatars/avatarp2.jpg'
import avatarp2alt from '../../../assets/Avatars/avatarp2alt.jpg'
import { PfpOpts } from '../../../styles/Game Interface/AvatarModal.styled'

const P1Avs = [avatarp1, avatarp1alt]
const P2Avs = [avatarp2, avatarp2alt]

export const SelectAvatar = ({ onConfirm }) => {
    const { gameState, updatePlayerAvatar } = useContext(GameContext)
    const { handleModal } = useContext(ModalContext)
    const [p1Avatar, setP1Avatar] = useState(gameState.player1.avatar)
    const [p2Avatar, setP2Avatar] = useState(gameState.player2.avatar)

    const handleConfirm = () => {
        updatePlayerAvatar('player1', p1Avatar)
        updatePlayerAvatar('player2', p2Avatar)
        if (onConfirm) {
            onConfirm()
        } else {
            handleModal()
        }
    }

    return (
        <div className="modal-container">
            <ModalHeader>
                <Title className="title">Choose Avatars</Title>
            </ModalHeader>
            <ModalBody>
                <Subtitle className="scoreboard">Player 1</Subtitle>
                <PfpOpts>
                    {P1Avs.map((avatar, index) => (
                        <div
                            key={`P1Avs-${index}`}
                            onClick={() => setP1Avatar(avatar)}
                            style={{
                                cursor: 'pointer',
                                border: p1Avatar === avatar ? '3px solid #F7D51D' : '3px solid transparent',
                                borderRadius: '50%',
                                boxShadow: p1Avatar === avatar ? '0 0 0 2px black' : 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '90px',
                                height: '90px',
                                flexShrink: 0
                            }}
                        >
                            <PlayerAvatar src={avatar} alt={`avatar option ${index + 1}`} style={{ marginBottom: 0 }} />
                        </div>
                    ))}
                </PfpOpts>
                <Subtitle className="scoreboard" style={{ marginTop: '10px' }}>Player 2</Subtitle>
                <PfpOpts>
                    {P2Avs.map((avatar, index) => (
                        <div
                            key={`p2-${index}`}
                            onClick={() => setP2Avatar(avatar)}
                            style={{
                                cursor: 'pointer',
                                border: p2Avatar === avatar ? '3px solid #F7D51D' : '3px solid transparent',
                                borderRadius: '50%',
                                boxShadow: p2Avatar === avatar ? '0 0 0 2px black' : 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '90px',
                                height: '90px',
                                flexShrink: 0
                            }}
                        >
                            <PlayerAvatar src={avatar} alt={`avatar option ${index + 1}`} style={{ marginBottom: 0 }} />
                        </div>
                    ))}
                </PfpOpts>
            </ModalBody>
            <ModalFooter style={{ marginTop: '20px' }}>
                <PlayButton onClick={handleConfirm}>Start Game</PlayButton>
                <RestartButton onClick={() => handleModal()}>Cancel</RestartButton>
            </ModalFooter>
        </div>
    )
}
