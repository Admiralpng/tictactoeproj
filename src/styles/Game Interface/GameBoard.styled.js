import styled from 'styled-components'

export const GameBoard = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;
    left: 50%;
    min-width: fit-content;
    margin: 0;
    border: none;
    border-radius: 12px;
    ${(props) => props.theme.media.mobile} {
      max-width: 200px;
    }
`