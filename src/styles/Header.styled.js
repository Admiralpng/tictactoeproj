import styled from "styled-components";

export const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
  padding: 18px;
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.primary};

  .logo {
    height: 50px;
    width: auto;
    color: ${(props) => props.theme.colors.text};
    fill: ${(props) => props.theme.colors.text};
  }

  .dark-icon,
  .light-icon {
    height: 30px;
    width: auto;
    color: ${(props) => props.theme.colors.text};
    fill: ${(props) => props.theme.colors.text};
  };
,
  .toggle-button{
    background: none;
    border: none;
    width: fit-content;
    height: fit-content;
    padding: 5px;
    cursor: pointer
  }
`
