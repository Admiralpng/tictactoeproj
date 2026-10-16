import styled from "styled-components";

export const HomeContainer = styled.div`
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
