import styled from 'styled-components'

export const GameBoard = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 6px;
    left: 50%;
    max-width: 600px;
    margin: 0;
    border: none;
    border-radius: 12px;
    ${(props) => props.theme.media.mobile} {
      max-width: fit-content;
    }
`