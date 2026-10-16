import createGlobalStyle from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Press Start 2P", system-ui;
    font-style: normal;
    ${(...props) => props.theme.media.mobile} {
      font-size: 0.8rem;
    }
  }

  body {
    width: 100%;
    height: 100%;
  }
`;