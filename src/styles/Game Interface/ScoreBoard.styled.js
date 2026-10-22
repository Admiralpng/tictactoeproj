import styled from "styled-components";

export const PlayerScoreBoard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Press Start 2P', cursive;
    font-size: 1.4rem;
    font-weight: 800; 
    line-height: 1.4;
    color: ${(props) => props.theme.colors.text};
    -webkit-text-fill-color: ${({playerTurn}) => playerTurn ? "rgb(246, 248, 109)" : "${(props) => props.theme.colors.text}"};
    -webkit-text-stroke: ${({playerTurn}) => playerTurn ? "1px black" : "1px transparent"};
    ,    
    ${(props) => props.theme.media.mobile} {
      font-size: 0.8rem;
    }
`