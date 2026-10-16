import styled from "styled-components";

export const ButtonWrapper = styled.button`
    color: ${(props) => props.theme.colors.primary};    
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 12px 30px;
    border: ${(props) => props.theme.colors.tertiary} 2px solid;
    border-radius: 5px;
    font-size: 1.2rem;
    font-family: "Press Start 2P", system-ui;
    outline: 2px solid #000000;
    cursor: pointer;

    &:hover {
        background-color: #f6f1ebd5;
        box-shadow: 0 4px 8px "#f6f1eb";
        font-weight: 600;
        transition: ease 100ms;
`