import styled from "styled-components";

export const ButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: #202124;    
    padding: 14px 30px;
    border: 4px black solid;
    background: rgb(246, 248, 109);
    display: inline-block;
    position: relative;
    box-shadow: inset -4px -4px 0px 0px #c49515;
    font-size: 1.2rem;
    font-family: "Press Start 2P", system-ui;
    cursor: pointer;
    outline: 0px;
,
    &:hover,
    &:focus {
        color: #000000; 
        background: #e0bf50;
        box-shadow: inset -6px -6px 0px 0px #c49515;
        font-weight: 600;
        transition: ease 100ms;
    }

    &:active {
        box-shadow: inset 4px 4px 0px 0px #c49515;
    }

    &:before,
    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: content-box;
    }

    &:before {
        top: -6px;
        left: 0;
        border-top: 6px black solid;
        border-bottom: 6px black solid;
    }

    &:after {
        left: -6px;
        top: 0;
        border-left: 6px black solid;
        border-right: 6px black solid;
    }
,
    &.proceed {
    background: #F7D51D;
    box-shadow: inset -4px -4px 0px 0px #E59400;
    }

    &.proceed:hover,
    &.proceed:focus {
        background: #F2C409;
        box-shadow: inset -6px -6px 0px 0px #E59400;
    }

    &.proceed:active {
        box-shadow: inset 4px 4px 0px 0px #E59400;
    }
,
    &.switch {
    background: #ff2158;
    box-shadow: inset -4px -4px 0px 0px #da214f;;
    }

    &.switch:hover,
    &.switch:focus {
        background: #f1035f;;
        box-shadow: inset -6px -6px 0px 0px #da214f;;
    }

    &.switch:active {
        box-shadow: inset 4px 4px 0px 0px #da214f;;
    }

    ${(props) => props.theme.media.mobile}{
        line-height: 1.2;
        padding: 12px 22px;
    }
`