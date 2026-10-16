import React from 'react'
import { ButtonWrapper } from '../../styles/Game Interface/PlayButton.styled.js'

export const PlayButton = (props) => {
    return (
        <ButtonWrapper {...props}>
            {props.children}
        </ButtonWrapper>
    )
}
