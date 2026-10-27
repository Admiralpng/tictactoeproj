import styled from "styled-components";

export const PfpOpts = styled.div `
    display: flex;
    flex-direction: row;
    gap: 10px; 
    justify-content: center;
    flex-wrap: wrap;
    border: 2px solid ${({playerTurn}) => playerTurn ? "rgb(246, 248, 109)" : "${(props) => props.theme.colors.avatar}"};;

,
`