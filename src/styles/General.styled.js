import styled from 'styled-components';

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.text};
    font-size: 3rem;
    font-family: "Press Start 2P", system-ui;
`

export const Subtitle = styled.h2`
    color: ${(props) => props.theme.colors.text};
    font-size: 1.8rem;
    font-family: "Press Start 2P", system-ui;
    font-weight: 400;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 18px;
    height: 82.75vh;
    max-width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
`;

