import styled from 'styled-components';

export const Cell = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: rgb(246, 248, 109);
    width: 10rem;
    height: 10rem;
    ${(props) => props.theme.media.mobile} {
      max-width: 80px;
      max-height: 80px;
      font-size: 2rem;
    }
    border: 2px solid #000000;
    border-radius: 9px;
    font-family: 'Press Start 2P', cursive;
    font-size: 3rem;
    color: #202124;
    box-shadow: 0px 0px 1px 2px ${(props) => props.theme.colors.border};
, 
    &:hover{
    outline: 2.2px solid ${(props) => props.theme.colors.secondary};
    transition: ease-in-out 80ms;
}
`