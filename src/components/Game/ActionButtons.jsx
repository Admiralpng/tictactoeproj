import React from 'react'
import { ButtonWrapper } from '../../styles/Game Interface/ActionButtons.styled.js'

export const PlayButton = (props) => {
    return (
        <ButtonWrapper {...props}>
            {props.children}
        </ButtonWrapper>
    )
}

export const RestartButton = (props) => {
    return (
        <ButtonWrapper {...props}>
            {props.children}
        </ButtonWrapper>
    )
}

export const ContinueButton = (props) => {
    return (
        <ButtonWrapper className="proceed" {...props}>
            {props.children}
        </ButtonWrapper>
    )
}

export const SwitchButton = (props) => {
    return (
        <ButtonWrapper className="switch" {...props}>
            {props.children}
        </ButtonWrapper>
    )
}
