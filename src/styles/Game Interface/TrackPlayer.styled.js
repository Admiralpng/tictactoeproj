import styled from "styled-components";

export const MusicWrapper = styled.div`
    position: fixed;
    bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 10vh;
    left: 30px;
    column-gap: 8px;
    ${(props) => props.theme.media.mobile} {
        width: 100vw;
        justify-content: space-between;
        margin-top: 20px;
        left: 0;
        bottom: 0;
        top: 10vh;
        height: fit-content;
    }
,
    &>button{
        display: flex; 
        justify-content: center;
        align-content: center;
        border: none;
        background: transparent;
        width: fit-content;
        height: fit-content;
        padding: 5px;
    }

    &>button>svg {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #202124;
        background: rgb(246, 248, 109);
        box-shadow: inset -3px -3px 0px 0px #c49515;
        padding: 6px;
        cursor: pointer;
        border: 4px solid #000;
    }

    &>button>svg:hover,
    &>button>svg:focus {
        background: #e0bf50;
        box-shadow: inset -4px -4px 0px 0px #c49515;
        transition: ease 100ms;
        border-color: #655ec7;
        transition: ease 200ms;
    }

    &>button>svg:active {
        box-shadow: inset 3px 3px 0px 0px #c49515;
    }
`

