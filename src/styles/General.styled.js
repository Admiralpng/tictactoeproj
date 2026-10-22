import styled from 'styled-components';

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.text};
    font-size: 3rem;
    font-family: "Press Start 2P", system-ui;
    text-wrap: nowrap;
`

export const Subtitle = styled.h2`
    color: ${(props) => props.theme.colors.text};
    font-size: 1.8rem;
    font-family: "Press Start 2P", system-ui;
    font-weight: 400;
    line-height: 1.2;
    ${(props) => props.theme.media.mobile}{
        line-height: 1.1;
        margin: 0;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => props.columnBased ? "column" : "row"};
    justify-content: space-between;
    text-align: center;
    align-items: center;
    padding: 18px 30px;
    height: 82.75vh;
    max-width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    ${(props) => props.theme.media.mobile} {
      padding: 18px;
      column-gap: 8px;
    }
`;

