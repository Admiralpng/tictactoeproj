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
    letter-spacing: -2.5px;
    color: ${(props) => props.theme.colors.text};
    -webkit-text-fill-color: ${({playerTurn}) => playerTurn ? "#655ec7" : `${(props) => props.theme.colors.text}`};
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
  width: 90px;
  height: 90px;
  margin-bottom: 25px;
  padding: 2px;
  box-sizing: border-box;
  display: block;
  border: ${({playerTurn, theme}) => playerTurn ? "3px solid #655ec7" : `2px solid ${theme.colors.avatar}`};

, 
  ${(props) => props.theme.media.mobile} {
    width: 65px;
    height: 65px;
    margin-bottom: 18px;
  }
`