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
      font-size: 0.3rem;
      max-width: 125px;
      line-height: 1.2;
    }
`;

export const PlayerAvatar = styled.img`
  border-radius: 9999px;
  width: 74px;
  height: 74px;
  margin-bottom: 25px;
, 
  ${(props) => props.theme.media.mobile} {
    width: 65px;
    height: 65px;
    margin-bottom: 18px;
  }
`