import styled from 'styled-components';

export const Cell = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.tertiary};
    width: 10rem;
    height: 10rem;
    padding: 0px;
    margin: 3px;
    position: relative;
    box-sizing: content-box;
    font-size: 3rem;
    font-family: "Press Start 2P", system-ui;
    z-index: 0;
    ${(props) => props.theme.media.mobile} {
      max-width: 80px;
      max-height: 80px;
      font-size: 1.7rem;
    }
    border: none;
    outline: 3px solid #000000;

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
        border-top: 5px black solid;
        border-bottom: 5px black solid;
    }
    &:after {
        left: -6px;
        top: 0;
        border-left: 5px black solid;
        border-right: 5px black solid;
    }
 
    &:hover{
        outline: 2px solid #202124;
        transition: ease-in-out 50ms;
    }

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-left: 5px;
        width: 100%;
        height: 100%;
    }
`

export const DefaultOutline = styled.span`
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-left: 5px;
        z-index: 1;
        -webkit-text-fill-color: transparent; 
        -webkit-text-stroke: transparent; 
        font-family: 'Press Start 2P', cursive;
        font-size: 2.4rem;
        &:hover{
            -webkit-text-stroke: 2px rgb(246, 248, 109);
        }
        ${(props) => props.theme.media.mobile} {
            -webkit-text-stroke: 2px rgb(246, 248, 109);    
            font-size: 10.5px;
        };
`
